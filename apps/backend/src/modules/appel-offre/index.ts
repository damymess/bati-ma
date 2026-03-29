import { Module } from "@medusajs/framework/utils"
import AppelOffreService from "./service"

export const APPEL_OFFRE_MODULE = "appelOffreModuleService"

export default Module(APPEL_OFFRE_MODULE, {
  service: AppelOffreService,
})
