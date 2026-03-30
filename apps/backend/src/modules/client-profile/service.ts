import { MedusaService } from "@medusajs/framework/utils"
import ClientProfile from "./models/client-profile"

class ClientProfileService extends MedusaService({
  ClientProfile,
}) {}

export default ClientProfileService
