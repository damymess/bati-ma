import { db } from "./db.js"

/**
 * Helper pour tracer les actions admin.
 * Usage:
 *   await logAdminAction({ entity_type: "project_request", entity_id: "xxx",
 *                         action: "delete", actor_email: "contact@bati.ma" })
 *
 * Jamais critique — ne bloque jamais l'action principale si le log échoue.
 */
export async function logAdminAction({
  entity_type,
  entity_id,
  action,
  actor_email,
  diff,
}: {
  entity_type: string
  entity_id: string
  action: string
  actor_email?: string
  diff?: { before?: Record<string, unknown>; after?: Record<string, unknown> } | null
}) {
  try {
    await db.adminActionLog.create({
      data: {
        entity_type,
        entity_id,
        action,
        actor_email: actor_email || "unknown",
        diff: diff ? (diff as any) : undefined,
      },
    })
  } catch (e) {
    // Ne jamais bloquer l'action principale
    console.error("[audit] log failed:", e)
  }
}

/**
 * Récupère l'historique d'une entité (pour la section "Historique" en page détail)
 */
export async function getEntityAuditLog(entity_type: string, entity_id: string, limit = 50) {
  try {
    return await db.adminActionLog.findMany({
      where: { entity_type, entity_id },
      orderBy: { created_at: "desc" },
      take: limit,
    })
  } catch {
    return []
  }
}
