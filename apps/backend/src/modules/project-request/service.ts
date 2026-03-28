import { MedusaService } from "@medusajs/framework/utils"
import ProjectRequest from "./models/project-request"

class ProjectRequestService extends MedusaService({
  ProjectRequest,
}) {}

export default ProjectRequestService
