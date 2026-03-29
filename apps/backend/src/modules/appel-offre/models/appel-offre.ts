import { model } from "@medusajs/framework/utils"

const AppelOffre = model.define("appel_offre", {
  id: model.id().primaryKey(),

  title: model.text(),
  description: model.text(),
  organism: model.text(),
  city: model.text(),
  reference: model.text().nullable(),

  // Classification
  type: model.text(), // "Travaux" | "Services" | "Fournitures"
  sector: model.text(), // "Architecture" | "BTP" | "Urbanisme" | "Intérieur"

  // Budget
  budget: model.text().nullable(),

  // Dates
  deadline: model.text(),
  publish_date: model.text(),

  // Source
  source: model.text().default("marchespublics.gov.ma"),
  source_url: model.text().nullable(),

  // Status
  status: model.text().default("Ouvert"), // "Ouvert" | "Clôturé" | "Attribué"
  is_active: model.boolean().default(true),
})

export default AppelOffre
