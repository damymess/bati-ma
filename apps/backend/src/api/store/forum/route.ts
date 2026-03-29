import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { FORUM_MODULE } from "../../../modules/forum"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const forumService = req.scope.resolve(FORUM_MODULE) as any
    const { category } = req.query as { category?: string }

    const filters: Record<string, unknown> = { is_active: true }
    if (category) filters.category = category

    const threads = await forumService.listForumThreads(filters, {
      order: { created_at: "DESC" },
    })
    res.json({ threads, count: threads.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const forumService = req.scope.resolve(FORUM_MODULE) as any
    const body = req.body as any

    if (!body.title || !body.content || !body.category || !body.author_name) {
      return res.status(400).json({
        message: "Missing required fields: title, content, category, author_name",
      })
    }

    const thread = await forumService.createForumThreads(body)
    res.status(201).json({ thread })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
