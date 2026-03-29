import { Module } from "@medusajs/framework/utils"
import ForumService from "./service"

export const FORUM_MODULE = "forumModuleService"

export default Module(FORUM_MODULE, {
  service: ForumService,
})
