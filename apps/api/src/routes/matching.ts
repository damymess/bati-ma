import { Hono } from "hono"
import { matchArchitects } from "../lib/matching.js"

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
