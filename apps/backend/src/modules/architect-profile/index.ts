import { Module } from "@medusajs/framework/utils"
import ArchitectProfileService from "./service"

export const ARCHITECT_PROFILE_MODULE = "architectProfileModuleService"

export default Module(ARCHITECT_PROFILE_MODULE, {
  service: ArchitectProfileService,
})
