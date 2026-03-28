import { model } from "@medusajs/framework/utils"

const ProjectRequest = model.define("project_request", {
  id: model.id().primaryKey(),

  // Client info
  client_name: model.text(),
  client_email: model.text(),
  client_phone: model.text().nullable(),

  // Architect (nullable = open request)
  architect_profile_id: model.text().nullable(),

  // Project details
  title: model.text(),
  description: model.text(),
  project_type: model.text(), // Résidentiel, Commercial, Intérieur, Riad, Eco
  location: model.text(),     // City name
  address: model.text().nullable(),

  // Budget
  budget_min: model.number().nullable(),
  budget_max: model.number().nullable(),
  timeline: model.text().nullable(),

  // Status workflow
  status: model.text().default("submitted"),
  // submitted → viewed → quoted → accepted → rejected → completed

  // Response from architect
  architect_response: model.text().nullable(),
  proposed_fee: model.number().nullable(),

  // Metadata
  source: model.text().default("website"),
})

export default ProjectRequest
