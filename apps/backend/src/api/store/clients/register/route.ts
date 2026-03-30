import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { CLIENT_PROFILE_MODULE } from "../../../../modules/client-profile"
import bcrypt from "bcryptjs"
import { signToken } from "../../../../lib/jwt"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const clientService = req.scope.resolve(CLIENT_PROFILE_MODULE) as any
    const { name, email, password, phone, city } = req.body as any

    if (!name || !email || !password) {
      return res.status(400).json({ error: "name, email et password sont requis" })
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Format email invalide" })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Le mot de passe doit contenir au moins 6 caractères" })
    }

    // Check email uniqueness
    const existing = await clientService.listClientProfiles({ email: email.toLowerCase() })
    const duplicate = (existing as any[]).find(
      (c: any) => c.email?.toLowerCase() === email.toLowerCase() && c.password_hash
    )
    if (duplicate) {
      return res.status(409).json({ error: "Un compte existe déjà avec cet email" })
    }

    const password_hash = await bcrypt.hash(password, 10)

    const client = await clientService.createClientProfiles({
      name,
      email: email.toLowerCase(),
      password_hash,
      phone: phone || null,
      city: city || null,
      is_active: true,
    })

    const token = signToken({ id: client.id, email: client.email, role: "client" })

    const { password_hash: _, ...profile } = client
    res.status(201).json({ client: profile, token })
  } catch (e: any) {
    console.error("[clients/register]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
