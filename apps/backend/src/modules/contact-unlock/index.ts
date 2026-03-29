import { Module } from "@medusajs/framework/utils"
import ContactUnlockService from "./service"

export const CONTACT_UNLOCK_MODULE = "contactUnlockModuleService"

export default Module(CONTACT_UNLOCK_MODULE, {
  service: ContactUnlockService,
})
