import { model } from "@medusajs/framework/utils"

const ContactUnlock = model.define("contact_unlock", {
  id: model.id().primaryKey(),
  architect_profile_id: model.text(),
  project_request_id: model.text(),
  unlocked_at: model.dateTime(),
})

export default ContactUnlock
