import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"

import { architects } from "./routes/architects.js"
import { clients } from "./routes/clients.js"
import { projects } from "./routes/projects.js"
import { forum } from "./routes/forum.js"
import { appels } from "./routes/appels.js"
import { admin } from "./routes/admin.js"

const app = new Hono()

// Middleware
app.use("*", logger())
app.use(
  "*",
  cors({
    origin: (process.env.STORE_CORS || "http://localhost:3000").split(","),
    credentials: true,
  })
)

// Error handler
app.onError((err, c) => {
  // JSON parse errors → 400
  if (err.message.includes("JSON")) {
    return c.json({ message: "Corps de requête JSON invalide" }, 400)
  }
  console.error(`[ERROR] ${c.req.method} ${c.req.path}:`, err.message)
  return c.json({ error: err.message }, 500)
})

// Health check
app.get("/store/custom", (c) => c.json({ status: "ok" }))
app.get("/admin/custom", (c) => c.json({ status: "ok" }))

// Store routes
app.route("/store/architects", architects)
app.route("/store/clients", clients)
app.route("/store", projects)
app.route("/store/forum", forum)
app.route("/store/appels-offres", appels)

// Admin routes
app.route("/admin", admin)

// Start server
const port = Number(process.env.PORT) || 9000

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`🚀 Bati.ma API running on http://localhost:${info.port}`)
})
