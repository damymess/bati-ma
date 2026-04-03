import { Hono } from "hono"
import { db } from "../lib/db.js"

export const appels = new Hono()

// List appels d'offres
appels.get("/", async (c) => {
  const status = c.req.query("status")
  const sector = c.req.query("sector")
  const city = c.req.query("city")

  const where: any = { is_active: true, deleted_at: null }
  if (status) where.status = status
  if (sector) where.sector = sector
  if (city) where.city = city

  const list = await db.appelOffre.findMany({
    where,
    orderBy: { deadline: "asc" },
  })

  return c.json({ appels_offres: list, count: list.length })
})

// Get appel d'offre
appels.get("/:id", async (c) => {
  const item = await db.appelOffre.findFirst({
    where: { id: c.req.param("id"), deleted_at: null },
  })
  if (!item) return c.json({ message: "Appel d'offre non trouvé" }, 404)
  return c.json({ appel_offre: item })
})
