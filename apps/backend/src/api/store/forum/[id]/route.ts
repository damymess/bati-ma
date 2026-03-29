import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { FORUM_MODULE } from "../../../../modules/forum"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const forumService = req.scope.resolve(FORUM_MODULE) as any
    const { id } = req.params

    const thread = await forumService.retrieveForumThread(id)
    if (!thread) return res.status(404).json({ message: "Thread not found" })

    // Increment views
    await forumService.updateForumThreads(id, { views: thread.views + 1 })

    // Get replies
    const replies = await forumService.listForumReplys(
      { thread_id: id, is_active: true },
      { order: { created_at: "ASC" } }
    )

    res.json({ thread, replies })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

// Post a reply
export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const forumService = req.scope.resolve(FORUM_MODULE) as any
    const { id } = req.params
    const body = req.body as any

    if (!body.content || !body.author_name) {
      return res.status(400).json({
        message: "Missing required fields: content, author_name",
      })
    }

    const reply = await forumService.createForumReplys({
      ...body,
      thread_id: id,
    })

    // Update reply count
    const thread = await forumService.retrieveForumThread(id)
    await forumService.updateForumThreads(id, {
      replies_count: thread.replies_count + 1,
    })

    res.status(201).json({ reply })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
