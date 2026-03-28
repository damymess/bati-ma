import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../../modules/architect-profile"
import bcrypt from "bcryptjs"
import { signToken } from "../../../../lib/jwt"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const { email, password } = req.body as any

    if (!email || !password) {
      return res.status(400).json({ error: "email et password requis" })
    }

    // Find architect by email
    const all = await architectService.listArchitectProfiles()
    const architect = (all as any[]).find(
      (a: any) => a.email?.toLowerCase() === email.toLowerCase()
    )

    if (!architect) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" })
    }

    if (!architect.password_hash) {
      return res.status(401).json({
        error: "Ce compte n'a pas encore de mot de passe. Inscrivez-vous via le formulaire d'inscription.",
      })
    }

    const valid = await bcrypt.compare(password, architect.password_hash)
    if (!valid) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" })
    }

    const token = signToken({ architect_id: architect.id, email: architect.email })

    const { password_hash: _, ...profile } = architect
    res.json({ architect: profile, token })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
