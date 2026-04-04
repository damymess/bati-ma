import { Hono } from "hono"
import { sendContactToAdmin } from "../lib/email.js"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const contact = new Hono()

contact.post("/", async (c) => {
  const body = await c.req.json()

  const name = (body.name || "").trim()
  const email = (body.email || "").trim()
  const message = (body.message || "").trim()

  if (!name || name.length < 2) {
    return c.json({ message: "Le nom est requis (min. 2 caractères)" }, 400)
  }
  if (!email || !EMAIL_RE.test(email)) {
    return c.json({ message: "Format email invalide" }, 400)
  }
  if (!message || message.length < 10) {
    return c.json({ message: "Le message est requis (min. 10 caractères)" }, 400)
  }

  sendContactToAdmin({ name, email, message }).catch((e) =>
    console.error("[email] contact notify failed:", e)
  )

  return c.json({ success: true }, 201)
})
