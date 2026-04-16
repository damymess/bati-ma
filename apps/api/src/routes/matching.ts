import { Hono } from "hono"
import { matchArchitects, shortlistForProject } from "../lib/matching.js"
import { db } from "../lib/db.js"

export const matching = new Hono()

matching.get("/", async (c) => {
  const city = c.req.query("city")
  const projectType = c.req.query("project_type")

  if (!city) {
    return c.json({ message: "Paramètre city requis" }, 400)
  }

  const architects = await matchArchitects(city, projectType || "", 3)

  return c.json({ architects, count: architects.length })
})

// ─── Shortlist pour un ProjectRequest (modèle MyBuilder) ───────────────────
// Utilisé en interne par l'admin/system après réception d'un projet,
// pour notifier les 3 meilleurs architectes (Pro/Elite en priorité).
matching.get("/shortlist/:projectId", async (c) => {
  const projectId = c.req.param("projectId")
  const architects = await shortlistForProject(projectId, 3)
  return c.json({ architects, count: architects.length })
})
