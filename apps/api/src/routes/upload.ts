import { Hono } from "hono"
import { db } from "../lib/db.js"
import { extractToken, verifyToken } from "../lib/jwt.js"
import { writeFile, mkdir, unlink } from "node:fs/promises"
import { join } from "node:path"
import { randomUUID } from "node:crypto"

const UPLOAD_DIR = process.env.UPLOAD_DIR || "./uploads"
const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const MAX_IMAGES = 5
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]

export const upload = new Hono()

// ─── Upload portfolio image ────────────────────────────────────────────────
upload.post("/upload", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Token manquant" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé aux architectes" }, 401)
  }

  const architect = await db.architectProfile.findUnique({ where: { id: payload.id } })
  if (!architect) return c.json({ message: "Profil non trouvé" }, 404)

  const currentImages: string[] = (architect.portfolio_images as string[]) || []
  if (currentImages.length >= MAX_IMAGES) {
    return c.json({ message: `Maximum ${MAX_IMAGES} images autorisées` }, 400)
  }

  const body = await c.req.parseBody()
  const file = body["file"]

  if (!file || typeof file === "string") {
    return c.json({ message: "Fichier requis" }, 400)
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return c.json({ message: "Format accepté : JPG, PNG, WebP" }, 400)
  }

  if (file.size > MAX_FILE_SIZE) {
    return c.json({ message: "Taille max : 2 Mo" }, 400)
  }

  // Save file
  const dir = join(UPLOAD_DIR, "portfolio", payload.id)
  await mkdir(dir, { recursive: true })

  const ext = file.name?.split(".").pop() || "jpg"
  const filename = `${randomUUID()}.${ext}`
  const filepath = join(dir, filename)

  const buffer = Buffer.from(await file.arrayBuffer())
  await writeFile(filepath, buffer)

  const url = `/uploads/portfolio/${payload.id}/${filename}`

  // Update DB
  await db.architectProfile.update({
    where: { id: payload.id },
    data: { portfolio_images: [...currentImages, url] },
  })

  return c.json({ url, count: currentImages.length + 1 }, 201)
})

// ─── Delete portfolio image ────────────────────────────────────────────────
upload.delete("/delete/:index", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Token manquant" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé aux architectes" }, 401)
  }

  const architect = await db.architectProfile.findUnique({ where: { id: payload.id } })
  if (!architect) return c.json({ message: "Profil non trouvé" }, 404)

  const index = Number(c.req.param("index"))
  const images: string[] = (architect.portfolio_images as string[]) || []

  if (index < 0 || index >= images.length) {
    return c.json({ message: "Index invalide" }, 400)
  }

  // Try delete file
  const url = images[index]
  try {
    const filepath = join(UPLOAD_DIR, url.replace("/uploads/", ""))
    await unlink(filepath)
  } catch {}

  const updated = images.filter((_, i) => i !== index)
  await db.architectProfile.update({
    where: { id: payload.id },
    data: { portfolio_images: updated },
  })

  return c.json({ images: updated, count: updated.length })
})
