import { model } from "@medusajs/framework/utils"

const ArchitectProfile = model.define("architect_profile", {
  id: model.id().primaryKey(),
  // Link to auth user
  name: model.text(),
  email: model.text(),
  phone: model.text().nullable(),

  // Professional
  license_number: model.text().nullable(),
  professional_body: model.text().default("Ordre des Architectes du Maroc"),
  years_experience: model.number().default(0),

  // Specialties & coverage
  specialties: model.json().default([]),
  regions: model.json().default([]),
  languages: model.json().default(["Français"]),

  // Portfolio
  description: model.text().nullable(),
  portfolio_images: model.json().default([]),
  website: model.text().nullable(),

  // Rates
  hourly_rate: model.number().nullable(),
  project_rate_min: model.number().nullable(),
  project_rate_max: model.number().nullable(),

  // Status
  verified: model.boolean().default(false),
  premium: model.boolean().default(false),
  is_active: model.boolean().default(true),

  // Stats
  rating: model.float().default(0),
  review_count: model.number().default(0),
})

export default ArchitectProfile
