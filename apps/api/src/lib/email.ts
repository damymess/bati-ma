import { Resend } from "resend"
import { db } from "./db.js"

const resend = new Resend(process.env.RESEND_API_KEY || "")
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@bati.ma"
const FROM_EMAIL = "Bati.ma <noreply@bati.ma>"
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL || "https://bati.ma"

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

type ProjectData = {
  id: string
  title: string
  client_name: string
  client_email: string
  client_phone?: string | null
  project_type: string
  location: string
  description?: string
  budget_min?: number | null
  budget_max?: number | null
  timeline?: string | null
  architect_name?: string | null
}

function formatBudget(min?: number | null, max?: number | null): string {
  if (!min && !max) return "Non défini"
  if (min && max) return `${min.toLocaleString("fr-MA")} - ${max.toLocaleString("fr-MA")} MAD`
  if (min) return `À partir de ${min.toLocaleString("fr-MA")} MAD`
  return `Jusqu'à ${max!.toLocaleString("fr-MA")} MAD`
}

export async function sendProjectSubmissionToAdmin(project: ProjectData) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `Nouveau projet : ${project.title}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Nouvelle demande de projet</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Client</td><td style="padding:8px 0;font-weight:600">${esc(project.client_name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${esc(project.client_email)}">${esc(project.client_email)}</a></td></tr>
              ${project.client_phone ? `<tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${esc(project.client_phone)}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Type</td><td style="padding:8px 0">${esc(project.project_type)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Ville</td><td style="padding:8px 0">${esc(project.location)}</td></tr>
              ${project.architect_name ? `<tr><td style="padding:8px 0;color:#666">Architecte demand\u00e9</td><td style="padding:8px 0;font-weight:600;color:#b5522a">${esc(project.architect_name)}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Budget</td><td style="padding:8px 0">${formatBudget(project.budget_min, project.budget_max)}</td></tr>
            </table>
            ${project.description ? `<div style="margin-top:16px;padding:12px;background:#f9f9f9;border-radius:6px"><strong>Description :</strong><br/>${esc(project.description)}</div>` : ""}
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] admin notify failed:", e)
  }
}

export async function sendContactToAdmin(data: {
  name: string
  email: string
  message: string
}) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `Message de contact — ${data.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Nouveau message de contact</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:100px">Nom</td><td style="padding:8px 0;font-weight:600">${esc(data.name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
            </table>
            <div style="margin-top:16px;padding:12px;background:#f9f9f9;border-radius:6px">
              <strong>Message :</strong><br/>${esc(data.message).replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] contact admin notify failed:", e)
  }
}

export async function sendPasswordResetEmail(data: {
  email: string
  name: string
  resetUrl: string
}) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Réinitialisation de votre mot de passe — Bati.ma",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Bati.ma</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(data.name)}</strong>,</p>
            <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe :</p>
            <div style="text-align:center;margin:24px 0">
              <a href="${esc(data.resetUrl)}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:12px 32px;border-radius:6px;font-weight:600;font-size:14px">
                Réinitialiser mon mot de passe
              </a>
            </div>
            <p style="color:#666;font-size:13px">Ce lien expire dans <strong>1 heure</strong>. Si vous n'avez pas fait cette demande, ignorez cet email.</p>
            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:13px">Email envoyé automatiquement par Bati.ma</p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] password reset failed:", e)
  }
}

export async function sendProjectConfirmationToClient(project: ProjectData) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `Votre projet "${project.title}" a bien été reçu - Bati.ma`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Bati.ma</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(project.client_name)}</strong>,</p>
            <p>Nous avons bien reçu votre demande de projet :</p>
            <div style="background:#f9f9f9;padding:16px;border-radius:6px;margin:16px 0">
              <p style="margin:0 0 8px"><strong>${esc(project.title)}</strong></p>
              <p style="margin:0;color:#666">${esc(project.project_type)} · ${esc(project.location)}</p>
              <p style="margin:8px 0 0;color:#666">Budget : ${formatBudget(project.budget_min, project.budget_max)}</p>
            </div>
            <p>Votre projet est maintenant visible par les architectes qualifiés de notre plateforme.</p>
            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:13px">Email envoyé automatiquement par Bati.ma</p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] client confirm failed:", e)
  }
}

/**
 * Récupère jusqu'à 3 architectes de la ville + verified ou Pro/Elite en priorité
 */
async function getRecommendedArchitects(city: string, limit = 3) {
  if (!city) return []
  try {
    const all = await db.architectProfile.findMany({
      where: { is_active: true, deleted_at: null },
      select: {
        id: true, name: true, rating: true, review_count: true,
        verified: true, subscription_tier: true, specialties: true, regions: true,
      },
    })
    const filtered = all.filter((a) => {
      const regions = (a.regions as string[]) || []
      return regions.some((r) => r.toLowerCase().includes(city.toLowerCase()))
    })
    const scored = filtered.map((a) => {
      let score = 0
      if (a.subscription_tier === "elite") score += 10000
      else if (a.subscription_tier === "pro" || a.subscription_tier === "premium") score += 5000
      else if (a.subscription_tier === "essentiel" || a.subscription_tier === "standard") score += 500
      if (a.verified) score += 1000
      score += (a.rating || 0) * 100
      score += Math.min(a.review_count || 0, 30) * 10
      return { a, score }
    })
    scored.sort((x, y) => y.score - x.score)
    return scored.slice(0, limit).map((s) => s.a)
  } catch {
    return []
  }
}

function renderArchitectCards(architects: Awaited<ReturnType<typeof getRecommendedArchitects>>, city: string) {
  if (architects.length === 0) return ""
  const cityLower = city.toLowerCase()
  return `
    <div style="margin:28px 0">
      <h3 style="font-size:16px;color:#333;margin:0 0 12px">3 architectes recommandés à ${esc(city)}</h3>
      ${architects
        .map(
          (a) => `
        <a href="${WEB_URL}/architecte/${encodeURIComponent(cityLower)}/${a.id}" style="display:block;text-decoration:none;border:1px solid #e5e5e5;border-radius:10px;padding:14px 16px;margin-bottom:10px;color:#333">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <p style="margin:0 0 4px;font-weight:600;color:#111;font-size:14px">${esc(a.name)}${a.verified ? ' <span style="background:#22c55e;color:white;font-size:10px;padding:2px 6px;border-radius:4px;margin-left:4px">Vérifié</span>' : ""}</p>
              <p style="margin:0;color:#666;font-size:12px">${a.rating > 0 ? `★ ${a.rating.toFixed(1)} (${a.review_count} avis) · ` : ""}${((a.specialties as string[]) || []).slice(0, 2).join(", ") || "Architecte"}</p>
            </div>
            <span style="color:#b5522a;font-size:12px;font-weight:600">Voir le profil →</span>
          </div>
        </a>`,
        )
        .join("")}
    </div>`
}

function renderBreakdown(payload: unknown): string {
  if (!payload || typeof payload !== "object") return ""
  const p = payload as { min?: number; max?: number; surface?: number; quality?: string }
  if (!p.min || !p.max) return ""
  const grosOeuvreMin = Math.round(p.min * 0.45)
  const grosOeuvreMax = Math.round(p.max * 0.45)
  const secondOeuvreMin = Math.round(p.min * 0.25)
  const secondOeuvreMax = Math.round(p.max * 0.25)
  const finitionsMin = Math.round(p.min * 0.20)
  const finitionsMax = Math.round(p.max * 0.20)
  const honorairesMin = Math.round(p.min * 0.10)
  const honorairesMax = Math.round(p.max * 0.10)
  const fmt = (n: number) => n.toLocaleString("fr-MA") + " MAD"
  return `
    <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px">
      <tr style="background:#f9f5f0">
        <th style="text-align:left;padding:10px 12px;color:#666;font-weight:600">Poste</th>
        <th style="text-align:right;padding:10px 12px;color:#666;font-weight:600">Min</th>
        <th style="text-align:right;padding:10px 12px;color:#666;font-weight:600">Max</th>
      </tr>
      <tr><td style="padding:10px 12px;border-top:1px solid #eee">Gros œuvre (45%)</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;color:#666">${fmt(grosOeuvreMin)}</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;font-weight:600">${fmt(grosOeuvreMax)}</td></tr>
      <tr><td style="padding:10px 12px;border-top:1px solid #eee">Second œuvre (25%)</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;color:#666">${fmt(secondOeuvreMin)}</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;font-weight:600">${fmt(secondOeuvreMax)}</td></tr>
      <tr><td style="padding:10px 12px;border-top:1px solid #eee">Finitions (20%)</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;color:#666">${fmt(finitionsMin)}</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;font-weight:600">${fmt(finitionsMax)}</td></tr>
      <tr><td style="padding:10px 12px;border-top:1px solid #eee">Honoraires architecte (10%)</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;color:#666">${fmt(honorairesMin)}</td><td style="text-align:right;padding:10px 12px;border-top:1px solid #eee;font-weight:600">${fmt(honorairesMax)}</td></tr>
      <tr style="background:#f5f0ea;font-weight:700">
        <td style="padding:12px;border-top:2px solid #b5522a">Total</td>
        <td style="text-align:right;padding:12px;border-top:2px solid #b5522a;color:#666">${fmt(p.min)}</td>
        <td style="text-align:right;padding:12px;border-top:2px solid #b5522a;color:#b5522a">${fmt(p.max)}</td>
      </tr>
    </table>`
}

/**
 * Re-engagement emails (séquence pour cold leads — 3 emails sur 7 jours)
 */
export async function sendReengagementD1(project: ProjectData) {
  if (!process.env.RESEND_API_KEY || !project.client_email) return
  try {
    const architects = await getRecommendedArchitects(project.location, 3)
    const architectsHtml = renderArchitectCards(architects, project.location)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `${esc(project.client_name)}, 3 architectes disponibles pour votre projet`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;padding:20px">
          <p>Bonjour <strong>${esc(project.client_name)}</strong>,</p>
          <p>Hier, vous avez utilisé notre calculateur pour estimer le budget de votre <strong>${esc(project.project_type)}</strong> à ${esc(project.location)}.</p>
          <p><strong>Bonne nouvelle :</strong> 3 architectes vérifiés de ${esc(project.location)} sont disponibles et peuvent étudier votre projet.</p>
          ${architectsHtml}
          <div style="text-align:center;margin:28px 0">
            <a href="${WEB_URL}/demande-devis?city=${encodeURIComponent(project.location.toLowerCase())}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600">Recevoir 3 devis gratuits</a>
          </div>
          <p style="color:#666;font-size:13px">Les devis sont gratuits et sans engagement. Vous choisissez ensuite avec qui vous voulez travailler.</p>
          <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
          <p style="color:#999;font-size:11px;text-align:center">Vous avez reçu cet email suite à votre estimation sur Bati.ma. <a href="${WEB_URL}/contact" style="color:#666">Se désinscrire</a></p>
        </div>`,
    })
  } catch (e) {
    console.error("[email] reengagement D1 failed:", e)
  }
}

export async function sendReengagementD3(project: ProjectData) {
  if (!process.env.RESEND_API_KEY || !project.client_email) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `Comment Karim a économisé 15% sur son projet de ${esc(project.project_type.toLowerCase())}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;padding:20px">
          <p>Bonjour <strong>${esc(project.client_name)}</strong>,</p>
          <p>L'un des plus gros pièges quand on construit au Maroc : choisir son architecte sur un seul critère (le prix ou la recommandation d'un ami).</p>
          <p><strong>Karim Alami</strong>, qui a construit sa villa à ${esc(project.location)} l'année dernière, nous a confié :</p>
          <blockquote style="border-left:3px solid #b5522a;padding:8px 16px;margin:16px 0;background:#f9f5f0;font-style:italic;color:#555">
            "J'ai comparé 3 devis via Bati.ma. Le premier était à 2,4M MAD, le deuxième à 2,1M et le troisième à 1,8M pour le même cahier des charges. J'ai négocié avec le 3e et économisé 15% sur mon budget total."
          </blockquote>
          <p>La règle d'or : <strong>toujours comparer au moins 3 devis</strong>.</p>
          <div style="text-align:center;margin:28px 0">
            <a href="${WEB_URL}/demande-devis?city=${encodeURIComponent(project.location.toLowerCase())}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600">Comparer 3 devis à ${esc(project.location)}</a>
          </div>
          <p style="color:#666;font-size:13px">100% gratuit. Réponse des architectes sous 48h.</p>
          <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
          <p style="color:#999;font-size:11px;text-align:center">Bati.ma — Annuaire architectes Maroc</p>
        </div>`,
    })
  } catch (e) {
    console.error("[email] reengagement D3 failed:", e)
  }
}

export async function sendReengagementD7(project: ProjectData) {
  if (!process.env.RESEND_API_KEY || !project.client_email) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `Votre estimation ${esc(project.location)} est-elle toujours d'actualité ?`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;padding:20px">
          <p>Bonjour <strong>${esc(project.client_name)}</strong>,</p>
          <p>Il y a une semaine, vous avez fait estimer le budget d'un projet <strong>${esc(project.project_type)}</strong> à ${esc(project.location)}.</p>
          <p>Où en êtes-vous ?</p>
          <div style="background:#fff8f2;border:1px solid #b5522a33;border-radius:10px;padding:20px;margin:20px 0">
            <p style="margin:0 0 12px;font-weight:600">Quelques infos qui peuvent aider :</p>
            <ul style="margin:0;padding-left:20px;font-size:14px;line-height:1.8">
              <li>Les architectes de ${esc(project.location)} sont actuellement disponibles (hors saison)</li>
              <li>Les prix des matériaux restent stables ce trimestre</li>
              <li>Délai moyen permis de construire : 2 à 3 mois</li>
            </ul>
          </div>
          <p>Si vous souhaitez avancer, 3 architectes peuvent étudier gratuitement votre projet :</p>
          <div style="text-align:center;margin:28px 0">
            <a href="${WEB_URL}/demande-devis?city=${encodeURIComponent(project.location.toLowerCase())}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600">Relancer mon projet</a>
          </div>
          <p style="color:#666;font-size:13px">Sinon, c'est notre dernier email de suivi — nous ne vous dérangerons plus.</p>
          <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
          <p style="color:#999;font-size:11px;text-align:center">Bati.ma</p>
        </div>`,
    })
  } catch (e) {
    console.error("[email] reengagement D7 failed:", e)
  }
}

/**
 * Email de confirmation / correction des infos envoyé par l'admin
 * quand un lead semble douteux. Le client reçoit un lien unique vers
 * un formulaire pré-rempli où il peut corriger/confirmer ses infos.
 */
/**
 * Welcome email envoyé aux architectes post-inscription.
 * Objectif : pousser à compléter le profil pour apparaître publiquement.
 */
export async function sendArchitectWelcomeEmail(architect: {
  name: string
  email: string
  regions?: string[]
  specialties?: string[]
}) {
  if (!process.env.RESEND_API_KEY || !architect.email) return
  try {
    const firstRegion = (architect.regions || [])[0] || "votre ville"
    const firstRegionLabel = firstRegion.charAt(0).toUpperCase() + firstRegion.slice(1)

    // Compteurs de preuve sociale (approximatifs — à remplacer plus tard par des vraies stats)
    const stats = await db.$transaction([
      db.projectRequest.count({
        where: { deleted_at: null, created_at: { gte: new Date(Date.now() - 7 * 24 * 3600 * 1000) } },
      }),
      db.architectProfile.count({ where: { deleted_at: null, verified: true } }),
    ])
    const leadsThisWeek = stats[0] || 0
    const verifiedArchitects = stats[1] || 0

    await resend.emails.send({
      from: FROM_EMAIL,
      to: architect.email,
      subject: `Bienvenue ${architect.name} ! Votre profil est en attente...`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Bienvenue sur Bati.ma 🎉</h1>
            <p style="margin:4px 0 0;font-size:13px;opacity:0.85">Votre compte architecte est créé</p>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(architect.name)}</strong>,</p>
            <p>Félicitations, votre compte architecte est créé ! <strong>Mais votre profil n'est pas encore visible publiquement.</strong></p>

            <div style="background:#fff8f2;border:2px solid #b5522a33;border-radius:12px;padding:18px;margin:20px 0">
              <p style="margin:0 0 10px;font-weight:600;color:#b5522a">Complétion profil : 20%</p>
              <div style="background:#e5e5e5;border-radius:4px;height:8px;overflow:hidden">
                <div style="background:#b5522a;height:100%;width:20%"></div>
              </div>
              <p style="margin:14px 0 8px;font-weight:600;color:#333;font-size:14px">3 étapes pour devenir visible :</p>
              <ul style="margin:0;padding-left:20px;font-size:14px;line-height:1.7">
                <li>📝 Rédiger votre description (80 caractères min)</li>
                <li>📷 Ajouter 3 photos de vos meilleurs projets</li>
                <li>📞 Renseigner votre téléphone</li>
              </ul>
            </div>

            <div style="text-align:center;margin:24px 0">
              <a href="${WEB_URL}/dashboard/architecte/profil" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:14px">
                Compléter mon profil →
              </a>
            </div>

            ${
              leadsThisWeek > 0
                ? `<div style="background:#f5f5f5;border-radius:8px;padding:14px;margin:20px 0;font-size:13px;color:#555">
                <strong style="color:#b5522a">📊 Cette semaine sur Bati.ma :</strong><br/>
                ${leadsThisWeek} demande${leadsThisWeek > 1 ? "s" : ""} de devis reçue${leadsThisWeek > 1 ? "s" : ""}<br/>
                ${verifiedArchitects} architecte${verifiedArchitects > 1 ? "s" : ""} vérifié${verifiedArchitects > 1 ? "s" : ""} actifs
              </div>`
                : ""
            }

            <p style="color:#666;font-size:13px">
              <strong>Astuce :</strong> les architectes avec 5+ photos et une description détaillée reçoivent <strong>3x plus de demandes de devis</strong>.
            </p>

            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:12px;text-align:center">
              Besoin d'aide ? Répondez à cet email ou contactez-nous.<br/>
              <a href="${WEB_URL}" style="color:#b5522a">bati.ma</a>
            </p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] architect welcome failed:", e)
  }
}

/**
 * Email de relance J+3 pour architectes avec profil incomplet.
 * Déclenché par le cron /cron/architect-reactivation
 */
export async function sendArchitectReactivationEmail(architect: {
  name: string
  email: string
  completion_percent: number
  missing_fields: string[]
}) {
  if (!process.env.RESEND_API_KEY || !architect.email) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: architect.email,
      subject: `${architect.name}, il reste ${architect.missing_fields.length} champs pour être visible`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Votre profil attend...</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(architect.name)}</strong>,</p>
            <p>Il y a 3 jours vous avez créé votre compte sur Bati.ma, mais <strong>votre profil n'est toujours pas visible</strong> dans la liste publique des architectes.</p>

            <div style="background:#fff8f2;border:2px solid #b5522a33;border-radius:12px;padding:18px;margin:20px 0">
              <p style="margin:0 0 10px;font-weight:600;color:#b5522a">Votre profil : ${architect.completion_percent}%</p>
              <div style="background:#e5e5e5;border-radius:4px;height:10px;overflow:hidden">
                <div style="background:#b5522a;height:100%;width:${architect.completion_percent}%"></div>
              </div>
              <p style="margin:14px 0 8px;font-weight:600;color:#333;font-size:14px">Il vous reste à remplir :</p>
              <ul style="margin:0;padding-left:20px;font-size:14px;line-height:1.7">
                ${architect.missing_fields
                  .slice(0, 5)
                  .map((f) => `<li>${esc(f)}</li>`)
                  .join("")}
              </ul>
            </div>

            <div style="text-align:center;margin:24px 0">
              <a href="${WEB_URL}/dashboard/architecte/profil" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:14px">
                Finaliser mon profil →
              </a>
            </div>

            <p style="color:#666;font-size:13px">
              Les profils complets reçoivent en moyenne <strong>3x plus de demandes de devis</strong> et apparaissent dans les résultats de recherche locaux.
            </p>

            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:12px;text-align:center">
              <a href="${WEB_URL}" style="color:#b5522a">bati.ma</a>
            </p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] architect reactivation failed:", e)
  }
}

/**
 * Magic link email : 1-clic login sans mot de passe.
 * Pattern Slack / Substack / Vercel.
 */
export async function sendMagicLinkToClient(name: string, email: string, token: string) {
  if (!process.env.RESEND_API_KEY || !email) return
  try {
    const link = `${WEB_URL}/magic-link/${token}`
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Continuer votre demande de devis — Bati.ma`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Bon retour ${esc(name)} 👋</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Nous avons reconnu votre email. Cliquez ci-dessous pour continuer votre demande de devis sans avoir à saisir de mot de passe :</p>
            <div style="text-align:center;margin:28px 0">
              <a href="${link}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:14px">
                Continuer ma demande →
              </a>
            </div>
            <p style="color:#666;font-size:13px">Ce lien est valable <strong>1 heure</strong> et ne peut être utilisé qu'une seule fois.</p>
            <p style="color:#999;font-size:12px">Si vous n'avez pas demandé ce lien, ignorez cet email.</p>
            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:12px;text-align:center"><a href="${WEB_URL}" style="color:#b5522a">bati.ma</a></p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] magic link failed:", e)
  }
}

/**
 * Welcome email client avec shortlist des 3 architectes sélectionnés.
 * Envoyé après la soumission d'un projet.
 */
export async function sendClientWelcomeEmail(
  client: { name: string; email: string },
  project: ProjectData,
  shortlistArchitects: Array<{ id: string; name: string; rating: number; review_count: number; verified: boolean; regions?: unknown }>,
) {
  if (!process.env.RESEND_API_KEY || !client.email) return
  try {
    const cityLower = project.location.toLowerCase()
    const cardsHtml = shortlistArchitects
      .map(
        (a) => `
      <a href="${WEB_URL}/architecte/${encodeURIComponent(cityLower)}/${a.id}" style="display:block;text-decoration:none;border:1px solid #e5e5e5;border-radius:10px;padding:14px 16px;margin-bottom:10px;color:#333">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <p style="margin:0 0 4px;font-weight:600;color:#111;font-size:14px">${esc(a.name)}${a.verified ? ' <span style="background:#22c55e;color:white;font-size:10px;padding:2px 6px;border-radius:4px;margin-left:4px">Vérifié</span>' : ""}</p>
            <p style="margin:0;color:#666;font-size:12px">${a.rating > 0 ? `★ ${a.rating.toFixed(1)} (${a.review_count} avis)` : "Nouveau sur bati.ma"}</p>
          </div>
          <span style="color:#b5522a;font-size:12px;font-weight:600">Voir le profil →</span>
        </div>
      </a>`,
      )
      .join("")

    await resend.emails.send({
      from: FROM_EMAIL,
      to: client.email,
      subject: `Votre projet est en route, ${client.name} ! 3 architectes vont vous contacter.`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Votre demande est bien partie 🎉</h1>
            <p style="margin:4px 0 0;font-size:13px;opacity:0.85">Bati.ma — Annuaire architectes Maroc</p>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(client.name)}</strong>,</p>
            <p>Votre projet <strong>${esc(project.title)}</strong> à ${esc(project.location)} a été transmis à 3 architectes qualifiés de votre région.</p>

            ${shortlistArchitects.length > 0 ? `
            <h3 style="font-size:16px;color:#333;margin:24px 0 10px">👷 Les 3 architectes qui vont vous contacter</h3>
            ${cardsHtml}
            ` : `
            <p style="color:#666;font-size:13px;background:#f5f5f5;padding:12px;border-radius:6px">Nous recherchons les architectes les plus pertinents pour votre projet. Vous serez contacté(e) sous 24-48h.</p>
            `}

            <div style="background:#fff8f2;border:1px solid #b5522a33;border-radius:8px;padding:14px;margin:20px 0;font-size:13px">
              <p style="margin:0;font-weight:600;color:#b5522a">⏱️ Prochaines étapes</p>
              <ol style="margin:8px 0 0;padding-left:20px;font-size:13px;line-height:1.7;color:#555">
                <li>Les architectes vont étudier votre projet</li>
                <li>Ils vont vous contacter sous <strong>24-48h</strong> par téléphone ou email</li>
                <li>Comparez les devis et choisissez celui qui vous convient</li>
              </ol>
            </div>

            <div style="text-align:center;margin:24px 0">
              <a href="${WEB_URL}/dashboard/client" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;font-size:14px">
                Suivre mon projet
              </a>
            </div>

            <p style="color:#666;font-size:13px"><strong>💡 Astuce :</strong> si vous n'avez pas de nouvelles sous 48h, répondez à cet email et nous relancerons les architectes.</p>

            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:12px;text-align:center"><a href="${WEB_URL}" style="color:#b5522a">bati.ma</a> · Annuaire architectes vérifiés du Maroc</p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] client welcome failed:", e)
  }
}

export async function sendVerificationEmailToClient(
  project: ProjectData & { verification_token?: string | null },
  token: string,
) {
  if (!process.env.RESEND_API_KEY || !project.client_email) return
  try {
    const verifyUrl = `${WEB_URL}/verifier-projet/${token}`
    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `Confirmez votre demande de devis — Bati.ma`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Confirmez votre demande</h1>
            <p style="margin:4px 0 0;font-size:13px;opacity:0.85">Bati.ma — Annuaire architectes Maroc</p>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(project.client_name || "")}</strong>,</p>
            <p>Merci d'avoir soumis votre demande de devis sur Bati.ma. Avant de transmettre votre projet aux architectes, nous aimerions <strong>confirmer quelques informations</strong> pour que les professionnels puissent vous contacter efficacement.</p>

            <div style="background:#f9f5f0;border:1px solid #b5522a22;border-radius:8px;padding:16px;margin:20px 0;font-size:13px">
              <p style="margin:0 0 8px;font-weight:600;color:#666">Récapitulatif actuel :</p>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:4px 0;color:#666;width:100px">Projet</td><td style="padding:4px 0">${esc(project.title)}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Ville</td><td style="padding:4px 0">${esc(project.location)}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Budget</td><td style="padding:4px 0">${formatBudget(project.budget_min, project.budget_max)}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Téléphone</td><td style="padding:4px 0">${esc(project.client_phone || "— non renseigné —")}</td></tr>
              </table>
            </div>

            <div style="text-align:center;margin:28px 0">
              <a href="${verifyUrl}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:14px">
                Confirmer / Corriger mes informations
              </a>
            </div>

            <p style="color:#666;font-size:13px"><strong>Si vos infos sont déjà correctes</strong>, confirmez simplement en cliquant le bouton. Sinon, vous pourrez les modifier.</p>
            <p style="color:#999;font-size:12px">Ce lien est valable <strong>14 jours</strong> et ne peut être utilisé qu'une seule fois.</p>

            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:12px;text-align:center">
              Vous n'avez pas soumis cette demande ? <a href="${WEB_URL}/contact" style="color:#b5522a">Contactez-nous</a>
              &nbsp;·&nbsp;<a href="${WEB_URL}" style="color:#b5522a">bati.ma</a>
            </p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] verification to client failed:", e)
  }
}

export async function sendEstimationToClient(project: ProjectData & { calculator_payload?: unknown }) {
  if (!process.env.RESEND_API_KEY || !project.client_email) return
  try {
    const architects = await getRecommendedArchitects(project.location, 3)
    const breakdown = renderBreakdown(project.calculator_payload)
    const architectsHtml = renderArchitectCards(architects, project.location)

    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `Votre estimation : ${formatBudget(project.budget_min, project.budget_max)} — Bati.ma`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Votre estimation de budget</h1>
            <p style="margin:4px 0 0;font-size:13px;opacity:0.85">Bati.ma — Calculateur construction Maroc</p>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(project.client_name)}</strong>,</p>
            <p>Voici l'estimation de votre projet de construction :</p>

            <div style="background:linear-gradient(135deg,#f5f0ea,#fff);border:2px solid #b5522a33;border-radius:12px;padding:24px;margin:20px 0;text-align:center">
              <p style="margin:0 0 8px;color:#666;font-size:13px">Budget estim\u00e9</p>
              <p style="margin:0;font-size:28px;font-weight:bold;color:#b5522a">${formatBudget(project.budget_min, project.budget_max)}</p>
              <p style="margin:8px 0 0;color:#999;font-size:12px">Hors terrain \u00b7 Prix indicatifs 2026</p>
            </div>

            <table style="width:100%;border-collapse:collapse;margin:16px 0">
              <tr><td style="padding:8px 0;color:#666;width:120px">Type de projet</td><td style="padding:8px 0;font-weight:600">${esc(project.project_type)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Ville</td><td style="padding:8px 0;font-weight:600">${esc(project.location)}</td></tr>
            </table>

            ${breakdown}

            ${project.description ? `<div style="margin:16px 0;padding:12px;background:#f9f9f9;border-radius:6px;font-size:13px;color:#555">${esc(project.description).replace(/\n/g, "<br/>")}</div>` : ""}

            ${architectsHtml}

            <div style="text-align:center;margin:24px 0">
              <a href="${WEB_URL}/demande-devis?city=${encodeURIComponent(project.location.toLowerCase())}&amp;type=${encodeURIComponent(project.project_type)}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:14px">
                Recevoir 3 devis gratuits \u00e0 ${esc(project.location)}
              </a>
            </div>

            <p style="color:#666;font-size:13px">Cette estimation est indicative (&plusmn; 5%). Pour un devis pr\u00e9cis, un architecte doit \u00e9tudier votre terrain et vos besoins sp\u00e9cifiques.</p>

            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:12px;text-align:center">
              <a href="https://bati.ma/outils/calculateur-cout-construction-maroc" style="color:#b5522a;text-decoration:none">Refaire une estimation</a>
              &nbsp;\u00b7&nbsp;
              <a href="https://bati.ma" style="color:#b5522a;text-decoration:none">bati.ma</a>
            </p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] estimation to client failed:", e)
  }
}
