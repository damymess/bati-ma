import { model } from "@medusajs/framework/utils"

const ClientProfile = model.define("client_profile", {
  id: model.id().primaryKey(),
  name: model.text(),
  email: model.text(),
  phone: model.text().nullable(),
  city: model.text().nullable(),
  password_hash: model.text().nullable(),
  is_active: model.boolean().default(true),
})

export default ClientProfile
