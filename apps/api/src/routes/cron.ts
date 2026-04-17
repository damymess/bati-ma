import { Hono } from "hono"
import { db } from "../lib/db.js"
import { sendReengagementD1, sendReengagementD3, sendReengagementD7 } from "../lib/email.js"

export const cron = new Hono()

/**
 * Cron endpoint à appeler périodiquement (toutes les heures ou tous les jours)
 * depuis Coolify / un scheduler externe.
 *
 * Sécurisé par un header `x-cron-secret` matchant l'env var CRON_SECRET.
 *
 * Envoie les emails de re-engagement aux cold leads qui :
 * - J+1 : ont été créés il y a ~24h et n'ont pas encore upgrade (pas de téléphone)
 * - J+3 : ~72h, pas de téléphone, engagement_count < 2
 * - J+7 : ~168h, pas de téléphone, engagement_count < 3
 */
cron.post("/reengagement", async (c) => {
  const secret = c.req.header("x-cron-secret")
  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return c.json({ message: "Forbidden" }, 403)
  }

  const now = Date.now()
  const oneDayAgo = new Date(now - 24 * 3600_000)
  const twoDaysAgo = new Date(now - 48 * 3600_000)
  const threeDaysAgo = new Date(now - 72 * 3600_000)
  const fourDaysAgo = new Date(now - 96 * 3600_000)
  const sevenDaysAgo = new Date(now - 168 * 3600_000)
  const eightDaysAgo = new Date(now - 192 * 3600_000)

  const stats = { d1: 0, d3: 0, d7: 0 }

  // ─── J+1 : créé il y a 24-48h, pas encore upgrade, pas de re-engagement envoyé
  const d1Leads = await db.projectRequest.findMany({
    where: {
      created_at: { gte: twoDaysAgo, lt: oneDayAgo },
      lead_type: "cold",
      client_phone: null,
      engagement_count: 0,
      deleted_at: null,
    },
    take: 100,
  })
  for (const lead of d1Leads) {
    await sendReengagementD1({ ...lead, description: lead.description || undefined })
    await db.projectRequest.update({
      where: { id: lead.id },
      data: { engagement_count: 1, last_engagement_at: new Date() },
    })
    stats.d1++
  }

  // ─── J+3 : créé il y a 72-96h, lead toujours cold, 1 email déjà envoyé
  const d3Leads = await db.projectRequest.findMany({
    where: {
      created_at: { gte: fourDaysAgo, lt: threeDaysAgo },
      lead_type: "cold",
      client_phone: null,
      engagement_count: { lt: 2 },
      deleted_at: null,
    },
    take: 100,
  })
  for (const lead of d3Leads) {
    await sendReengagementD3({ ...lead, description: lead.description || undefined })
    await db.projectRequest.update({
      where: { id: lead.id },
      data: { engagement_count: 2, last_engagement_at: new Date() },
    })
    stats.d3++
  }

  // ─── J+7 : créé il y a 168-192h, pas encore upgrade, engagement_count < 3
  const d7Leads = await db.projectRequest.findMany({
    where: {
      created_at: { gte: eightDaysAgo, lt: sevenDaysAgo },
      lead_type: "cold",
      client_phone: null,
      engagement_count: { lt: 3 },
      deleted_at: null,
    },
    take: 100,
  })
  for (const lead of d7Leads) {
    await sendReengagementD7({ ...lead, description: lead.description || undefined })
    await db.projectRequest.update({
      where: { id: lead.id },
      data: { engagement_count: 3, last_engagement_at: new Date() },
    })
    stats.d7++
  }

  return c.json({ success: true, sent: stats })
})
