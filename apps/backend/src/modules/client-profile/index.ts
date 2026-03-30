import { Module } from "@medusajs/framework/utils"
import ClientProfileService from "./service"

export const CLIENT_PROFILE_MODULE = "clientProfileModuleService"

export default Module(CLIENT_PROFILE_MODULE, {
  service: ClientProfileService,
})
