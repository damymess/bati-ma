import { Module } from "@medusajs/framework/utils"
import ProjectRequestService from "./service"

export const PROJECT_REQUEST_MODULE = "projectRequestModuleService"

export default Module(PROJECT_REQUEST_MODULE, {
  service: ProjectRequestService,
})
