import { MedusaService } from "@medusajs/framework/utils"
import AppelOffre from "./models/appel-offre"

class AppelOffreService extends MedusaService({
  AppelOffre,
}) {}

export default AppelOffreService
