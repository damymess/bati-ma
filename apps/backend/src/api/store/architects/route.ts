import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../modules/architect-profile"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE)
    const architects = await architectService.listArchitectProfiles()
    res.json({ architects, count: architects.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message, stack: e.stack?.split("\n").slice(0, 5) })
  }
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE)
    const body = req.body as Record<string, unknown>

    const architect = await architectService.createArchitectProfiles({
      name: body.name as string,
      email: body.email as string,
      phone: (body.phone as string) || null,
      license_number: (body.license_number as string) || null,
      specialties: body.specialties || [],
      regions: body.regions || [],
      languages: body.languages || ["Français"],
      description: (body.description as string) || null,
      years_experience: (body.years_experience as number) || 0,
      hourly_rate: (body.hourly_rate as number) || null,
      project_rate_min: (body.project_rate_min as number) || null,
      project_rate_max: (body.project_rate_max as number) || null,
      website: (body.website as string) || null,
      verified: false,
      premium: false,
      is_active: true,
    })

    res.status(201).json({ architect })
  } catch (e: any) {
    res.status(500).json({ error: e.message, stack: e.stack?.split("\n").slice(0, 5) })
  }
}
