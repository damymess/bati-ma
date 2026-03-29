import { MedusaService } from "@medusajs/framework/utils"
import ContactUnlock from "./models/contact-unlock"

class ContactUnlockService extends MedusaService({
  ContactUnlock,
}) {}

export default ContactUnlockService
