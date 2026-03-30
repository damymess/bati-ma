import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { CLIENT_PROFILE_MODULE } from "../../../../modules/client-profile"
import bcrypt from "bcryptjs"
import { signToken } from "../../../../lib/jwt"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const clientService = req.scope.resolve(CLIENT_PROFILE_MODULE) as any
    const { email, password } = req.body as any

    if (!email || !password) {
      return res.status(400).json({ error: "email et password requis" })
    }

    const results = await clientService.listClientProfiles({ email: email.toLowerCase() })
    const client = (results as any[])[0]

    if (!client) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" })
    }

    if (!client.password_hash) {
      return res.status(401).json({ error: "Ce compte n'a pas de mot de passe. Inscrivez-vous d'abord." })
    }

    const valid = await bcrypt.compare(password, client.password_hash)
    if (!valid) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" })
    }

    const token = signToken({ id: client.id, email: client.email, role: "client" })

    const { password_hash: _, ...profile } = client
    res.json({ client: profile, token })
  } catch (e: any) {
    console.error("[clients/login]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
