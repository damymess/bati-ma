import { serve } from "@hono/node-server"
import { serveStatic } from "@hono/node-server/serve-static"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"

import { architects } from "./routes/architects.js"
import { clients } from "./routes/clients.js"
import { projects } from "./routes/projects.js"
import { forum } from "./routes/forum.js"
import { appels } from "./routes/appels.js"
import { admin } from "./routes/admin.js"
import { contact } from "./routes/contact.js"
import { auth } from "./routes/auth.js"
import { upload } from "./routes/upload.js"
import { matching } from "./routes/matching.js"
import { subscriptions } from "./routes/subscriptions.js"
import { reviews } from "./routes/reviews.js"
import { verifications } from "./routes/verifications.js"
import { cron } from "./routes/cron.js"
import { authRateLimit } from "./middleware/rateLimit.js"
import { adminMiddleware } from "./middleware/admin.js"

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

// Serve uploaded files
app.use("/uploads/*", serveStatic({ root: process.env.UPLOAD_DIR || "./uploads", rewriteRequestPath: (path) => path.replace("/uploads", "") }))

// Health check
app.get("/store/custom", (c) => c.json({ status: "ok" }))
app.get("/admin/custom", (c) => c.json({ status: "ok" }))

// Rate limiting on auth endpoints (must be before route mounting)
app.use("/store/architects/login", authRateLimit)
app.use("/store/architects/register", authRateLimit)
app.use("/store/clients/login", authRateLimit)
app.use("/store/clients/register", authRateLimit)

// Store routes
app.route("/store/architects", architects)
app.route("/store/clients", clients)
app.route("/store", projects)
app.route("/store/forum", forum)
app.route("/store/appels-offres", appels)
app.route("/store/contact", contact)
app.route("/store/auth", auth)
app.route("/store/architects/portfolio", upload)
app.route("/store/matching", matching)
app.route("/store/subscriptions", subscriptions)
app.route("/store/reviews", reviews)
app.route("/store/verifications", verifications)

// Admin routes (toutes protégées par adminMiddleware — JWT admin OU x-admin-api-key)
app.use("/admin/*", adminMiddleware)
app.route("/admin", admin)
app.route("/admin/reviews", reviews)
app.route("/admin/verifications", verifications)
app.route("/cron", cron)

// Start server
const port = Number(process.env.PORT) || 9000

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`🚀 Bati.ma API running on http://localhost:${info.port}`)
})
