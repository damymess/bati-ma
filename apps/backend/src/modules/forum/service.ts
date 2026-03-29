import { MedusaService } from "@medusajs/framework/utils"
import ForumThread from "./models/forum-thread"
import ForumReply from "./models/forum-reply"

class ForumService extends MedusaService({
  ForumThread,
  ForumReply,
}) {}

export default ForumService
