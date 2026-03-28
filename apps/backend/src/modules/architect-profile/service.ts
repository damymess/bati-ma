import { MedusaService } from "@medusajs/framework/utils"
import ArchitectProfile from "./models/architect-profile"

class ArchitectProfileService extends MedusaService({
  ArchitectProfile,
}) {}

export default ArchitectProfileService
