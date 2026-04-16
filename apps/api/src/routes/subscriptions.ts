import { Hono } from "hono"
import { db } from "../lib/db.js"
import { extractToken, verifyToken } from "../lib/jwt.js"
import { getTierConfig, TIERS } from "../lib/subscription.js"

export const subscriptions = new Hono()

// ─── Get available tiers (public) ───────────────────────────────────────────
subscriptions.get("/tiers", async (c) => {
  // Expose seulement les tiers "actifs" (pas legacy)
  const activeTiers = ["free", "essentiel", "pro", "elite"].map((slug) => TIERS[slug])
  return c.json({ tiers: activeTiers })
})

// ─── Create checkout session (architect authenticated) ──────────────────────
// Supporte Stripe (carte internationale) — CMI à ajouter ensuite
subscriptions.post("/checkout", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Authentification requise" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé aux architectes" }, 403)
  }

  const body = await c.req.json()
  const tier = (body.tier || "").toString()
  const cycle = body.cycle === "annual" ? "annual" : "monthly"

  const config = TIERS[tier]
  if (!config || tier === "free") {
    return c.json({ message: "Plan invalide" }, 400)
  }

  const amount = cycle === "annual" ? config.priceAnnual : config.priceMonthly
  if (amount === 0) return c.json({ message: "Plan gratuit" }, 400)

  const architect = await db.architectProfile.findUnique({ where: { id: payload.id } })
  if (!architect) return c.json({ message: "Architecte introuvable" }, 404)

  // ─── Stripe checkout (si clé configurée) ──────────────────────────────────
  const stripeKey = process.env.STRIPE_SECRET_KEY
  const publicUrl = process.env.NEXT_PUBLIC_WEB_URL || process.env.STORE_CORS?.split(",")[0] || "https://bati.ma"

  if (stripeKey) {
    try {
      // Appel direct à l'API Stripe sans SDK pour rester sans dépendance
      const params = new URLSearchParams()
      params.append("mode", "subscription")
      params.append("success_url", `${publicUrl}/dashboard/architecte/abonnement?success=1`)
      params.append("cancel_url", `${publicUrl}/dashboard/architecte/abonnement?canceled=1`)
      params.append("customer_email", architect.email)
      params.append("client_reference_id", architect.id)
      params.append("metadata[architect_id]", architect.id)
      params.append("metadata[tier]", tier)
      params.append("metadata[cycle]", cycle)

      // Prix inline — en production, créer des Prices Stripe pré-définis
      params.append("line_items[0][price_data][currency]", "mad")
      params.append("line_items[0][price_data][product_data][name]", `Bati.ma ${config.label}`)
      params.append(
        "line_items[0][price_data][product_data][description]",
        `Abonnement ${cycle === "annual" ? "annuel" : "mensuel"}`
      )
      params.append("line_items[0][price_data][unit_amount]", String(amount * 100)) // centimes
      params.append(
        "line_items[0][price_data][recurring][interval]",
        cycle === "annual" ? "year" : "month"
      )
      params.append("line_items[0][quantity]", "1")

      const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      })

      const session = await res.json()
      if (!res.ok) {
        console.error("[stripe] checkout error", session)
        return c.json({ message: session.error?.message || "Erreur Stripe" }, 500)
      }

      return c.json({ url: session.url, session_id: session.id })
    } catch (err) {
      console.error("[stripe] exception", err)
      return c.json({ message: "Erreur de création de la session de paiement" }, 500)
    }
  }

  // ─── Fallback : enregistrer un abonnement "manuel" (mode test sans Stripe) ─
  // En attendant la configuration CMI/Stripe, on renvoie un message clair.
  return c.json({
    message:
      "Le paiement en ligne est en cours d'activation. Contactez-nous à contact@bati.ma pour activer manuellement votre abonnement.",
    manual: true,
    tier,
    cycle,
    amount,
  }, 503)
})

// ─── Stripe webhook (payment events) ────────────────────────────────────────
subscriptions.post("/webhook/stripe", async (c) => {
  const stripeSecret = process.env.STRIPE_WEBHOOK_SECRET
  const stripeKey = process.env.STRIPE_SECRET_KEY

  if (!stripeSecret || !stripeKey) {
    return c.json({ message: "Stripe non configuré" }, 503)
  }

  const rawBody = await c.req.text()
  const signature = c.req.header("stripe-signature")

  // NOTE: signature verification simplifiée — en prod utiliser la lib stripe officielle
  // Pour l'instant on accepte si la signature est présente
  if (!signature) {
    return c.json({ message: "Signature manquante" }, 400)
  }

  let event: any
  try {
    event = JSON.parse(rawBody)
  } catch {
    return c.json({ message: "JSON invalide" }, 400)
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        const architectId = session.metadata?.architect_id
        const tier = session.metadata?.tier
        const cycle = session.metadata?.cycle || "monthly"
        if (!architectId || !tier) break

        const config = getTierConfig(tier)
        const amount = cycle === "annual" ? config.priceAnnual : config.priceMonthly
        const now = new Date()
        const periodEnd = new Date(now)
        if (cycle === "annual") periodEnd.setFullYear(periodEnd.getFullYear() + 1)
        else periodEnd.setMonth(periodEnd.getMonth() + 1)

        // Upsert subscription
        await db.subscription.upsert({
          where: { architect_profile_id: architectId },
          create: {
            architect_profile_id: architectId,
            tier,
            billing_cycle: cycle,
            provider: "stripe",
            provider_subscription_id: session.subscription,
            provider_customer_id: session.customer,
            status: "active",
            current_period_start: now,
            current_period_end: periodEnd,
            amount_mad: amount,
          },
          update: {
            tier,
            billing_cycle: cycle,
            provider_subscription_id: session.subscription,
            provider_customer_id: session.customer,
            status: "active",
            current_period_start: now,
            current_period_end: periodEnd,
            amount_mad: amount,
            cancel_at_period_end: false,
          },
        })

        // Update architect tier
        await db.architectProfile.update({
          where: { id: architectId },
          data: {
            subscription_tier: tier,
            subscription_expires_at: periodEnd,
            contacts_limit: config.contactsLimit,
          },
        })
        break
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object
        const subscription = await db.subscription.findFirst({
          where: { provider_subscription_id: sub.id },
        })
        if (!subscription) break

        const newStatus =
          sub.status === "active" ? "active" : sub.status === "canceled" ? "canceled" : sub.status

        await db.subscription.update({
          where: { id: subscription.id },
          data: {
            status: newStatus,
            cancel_at_period_end: !!sub.cancel_at_period_end,
            current_period_end: sub.current_period_end
              ? new Date(sub.current_period_end * 1000)
              : undefined,
          },
        })

        // Si annulé → downgrade à free à la fin de période
        if (newStatus === "canceled") {
          await db.architectProfile.update({
            where: { id: subscription.architect_profile_id },
            data: {
              subscription_tier: "free",
              subscription_expires_at: null,
              contacts_limit: 0,
            },
          })
        }
        break
      }
    }
  } catch (err) {
    console.error("[stripe webhook] error", err)
    return c.json({ message: "Erreur interne" }, 500)
  }

  return c.json({ received: true })
})

// ─── Get current subscription (authenticated) ───────────────────────────────
subscriptions.get("/me", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Authentification requise" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé aux architectes" }, 403)
  }

  const subscription = await db.subscription.findUnique({
    where: { architect_profile_id: payload.id },
  })

  return c.json({ subscription })
})

// ─── Cancel subscription ────────────────────────────────────────────────────
subscriptions.post("/cancel", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Authentification requise" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé" }, 403)
  }

  const subscription = await db.subscription.findUnique({
    where: { architect_profile_id: payload.id },
  })
  if (!subscription) return c.json({ message: "Aucun abonnement actif" }, 404)

  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (stripeKey && subscription.provider_subscription_id) {
    // Annulation à la fin de période
    await fetch(
      `https://api.stripe.com/v1/subscriptions/${subscription.provider_subscription_id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "cancel_at_period_end=true",
      }
    )
  }

  await db.subscription.update({
    where: { id: subscription.id },
    data: { cancel_at_period_end: true },
  })

  return c.json({ message: "Abonnement annulé à la fin de la période en cours" })
})
