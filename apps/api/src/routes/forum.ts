import { Hono } from "hono"
import { db } from "../lib/db.js"

export const forum = new Hono()

// List threads
forum.get("/", async (c) => {
  const category = c.req.query("category")
  const where: any = { is_active: true, deleted_at: null }
  if (category) where.category = category

  const threads = await db.forumThread.findMany({
    where,
    orderBy: { created_at: "desc" },
  })

  return c.json({ threads, count: threads.length })
})

// Create thread
forum.post("/", async (c) => {
  const { title, content, category, author_name, author_id, author_role } = await c.req.json()

  if (!title || !content || !category || !author_name) {
    return c.json({ message: "Champs requis : title, content, category, author_name" }, 400)
  }

  const thread = await db.forumThread.create({
    data: {
      title,
      content,
      category,
      author_name,
      author_id: author_id || null,
      author_role: author_role || null,
    },
  })

  return c.json({ thread }, 201)
})

// Get thread + replies
forum.get("/:id", async (c) => {
  const thread = await db.forumThread.findFirst({
    where: { id: c.req.param("id"), is_active: true, deleted_at: null },
  })
  if (!thread) return c.json({ message: "Sujet non trouvé" }, 404)

  // Increment views
  await db.forumThread.update({
    where: { id: thread.id },
    data: { views: thread.views + 1 },
  })

  const replies = await db.forumReply.findMany({
    where: { thread_id: thread.id, is_active: true, deleted_at: null },
    orderBy: { created_at: "asc" },
  })

  return c.json({ thread: { ...thread, views: thread.views + 1 }, replies })
})

// Post reply
forum.post("/:id", async (c) => {
  const { content, author_name, author_id, author_role } = await c.req.json()

  if (!content || !author_name) {
    return c.json({ message: "Champs requis : content, author_name" }, 400)
  }

  const thread = await db.forumThread.findFirst({
    where: { id: c.req.param("id"), is_active: true, deleted_at: null },
  })
  if (!thread) return c.json({ message: "Sujet non trouvé" }, 404)

  const reply = await db.forumReply.create({
    data: {
      thread_id: thread.id,
      content,
      author_name,
      author_id: author_id || null,
      author_role: author_role || null,
    },
  })

  // Increment replies_count
  await db.forumThread.update({
    where: { id: thread.id },
    data: { replies_count: thread.replies_count + 1 },
  })

  return c.json({ reply }, 201)
})
