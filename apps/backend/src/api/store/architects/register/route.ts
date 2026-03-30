import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../../modules/architect-profile"
import bcrypt from "bcryptjs"
import { signToken } from "../../../../lib/jwt"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const body = req.body as any

    const { name, email, password, phone, specialties, regions, description, years_experience, license_number } = body

    if (!name || !email || !password) {
      return res.status(400).json({ error: "name, email et password sont requis" })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Le mot de passe doit contenir au moins 6 caractères" })
    }

    // Check email uniqueness
    const existing = await architectService.listArchitectProfiles({ email })
    const duplicate = (existing as any[]).find(
      (a: any) => a.email?.toLowerCase() === email.toLowerCase() && a.password_hash
    )
    if (duplicate) {
      return res.status(409).json({ error: "Un compte existe déjà avec cet email" })
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 10)

    // Create profile
    const architect = await architectService.createArchitectProfiles({
      name,
      email: email.toLowerCase(),
      password_hash,
      phone: phone || null,
      specialties: Array.isArray(specialties) ? specialties : [],
      regions: Array.isArray(regions) ? regions : [],
      description: description || null,
      years_experience: years_experience || 0,
      license_number: license_number || null,
      verified: false,
      premium: false,
      is_active: true,
    })

    const token = signToken({ id: architect.id, email: architect.email, role: "architect" })

    // Return profile without password_hash
    const { password_hash: _, ...profile } = architect
    res.status(201).json({ architect: profile, token })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
