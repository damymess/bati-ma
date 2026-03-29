import { model } from "@medusajs/framework/utils"

const ForumReply = model.define("forum_reply", {
  id: model.id().primaryKey(),

  // Relations
  thread_id: model.text(),
  author_id: model.text().nullable(),
  author_name: model.text(),
  author_role: model.text().nullable(),

  // Content
  content: model.text(),

  // Moderation
  is_active: model.boolean().default(true),
})

export default ForumReply
