import { model } from "@medusajs/framework/utils"

const ForumThread = model.define("forum_thread", {
  id: model.id().primaryKey(),

  // Author
  author_id: model.text().nullable(), // customer ID (null = system/seed)
  author_name: model.text(),
  author_role: model.text().nullable(), // "Architecte DPLG, Casablanca"

  // Content
  title: model.text(),
  content: model.text(),
  category: model.text(), // slug from forum categories

  // Stats
  views: model.number().default(0),
  replies_count: model.number().default(0),

  // Moderation
  pinned: model.boolean().default(false),
  locked: model.boolean().default(false),
  is_active: model.boolean().default(true),
})

export default ForumThread
