import { Hono } from "hono"
import { db } from "../lib/db.js"
import { extractToken, verifyToken } from "../lib/jwt.js"

export const verifications = new Hono()

const DOCUMENT_TYPES = ["patente", "oam", "cnss", "assurance", "cin", "rc"] as const
type DocumentType = (typeof DOCUMENT_TYPES)[number]

const DOCUMENT_LABELS: Record<DocumentType, string> = {
  patente: "Patente commerciale",
  oam: "Agrément Ordre des Architectes du Maroc",
  cnss: "Attestation CNSS à jour",
  assurance: "Assurance décennale",
  cin: "Carte d'identité nationale",
  rc: "Registre de Commerce",
}

// ─── Architect: submit a document ───────────────────────────────────────────
verifications.post("/", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Authentification requise" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé aux architectes" }, 403)
  }

  const body = await c.req.json()
  const document_type = body.document_type
  const document_url = (body.document_url || "").trim()
  const expires_at = body.expires_at ? new Date(body.expires_at) : null

  if (!DOCUMENT_TYPES.includes(document_type)) {
    return c.json({ message: "Type de document invalide" }, 400)
  }
  if (!document_url) return c.json({ message: "URL du document requise" }, 400)

  // Remplacer si un document du même type existe déjà
  const existing = await db.verificationDocument.findFirst({
    where: {
      architect_profile_id: payload.id,
      document_type,
      status: { in: ["pending", "approved"] },
    },
  })

  if (existing) {
    const updated = await db.verificationDocument.update({
      where: { id: existing.id },
      data: {
        document_url,
        status: "pending",
        admin_note: null,
        reviewed_at: null,
        reviewed_by: null,
        expires_at,
      },
    })
    return c.json({ document: updated })
  }

  const doc = await db.verificationDocument.create({
    data: {
      architect_profile_id: payload.id,
      document_type,
      document_url,
      status: "pending",
      expires_at,
    },
  })
  return c.json({ document: doc }, 201)
})

// ─── Architect: list own documents + status global ──────────────────────────
verifications.get("/my", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Authentification requise" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé" }, 403)
  }

  const docs = await db.verificationDocument.findMany({
    where: { architect_profile_id: payload.id },
    orderBy: { created_at: "desc" },
  })

  // Pour chaque type de document, récupérer le plus récent
  const latestByType = new Map<string, typeof docs[0]>()
  for (const d of docs) {
    if (!latestByType.has(d.document_type)) latestByType.set(d.document_type, d)
  }

  const status = DOCUMENT_TYPES.map((type) => {
    const doc = latestByType.get(type)
    return {
      type,
      label: DOCUMENT_LABELS[type],
      status: doc?.status || "missing",
      document_url: doc?.document_url || null,
      admin_note: doc?.admin_note || null,
      expires_at: doc?.expires_at || null,
    }
  })

  const allApproved = status.every((s) => s.status === "approved")
  const anyPending = status.some((s) => s.status === "pending")
  const globalStatus = allApproved ? "verified" : anyPending ? "pending" : "incomplete"

  return c.json({
    global_status: globalStatus,
    documents: status,
    available_types: DOCUMENT_TYPES.map((t) => ({ type: t, label: DOCUMENT_LABELS[t] })),
  })
})

// ─── Admin: list pending verifications ──────────────────────────────────────
verifications.get("/admin", async (c) => {
  const status = c.req.query("status") || "pending"
  const limit = Math.min(Number(c.req.query("limit")) || 50, 200)

  const docs = await db.verificationDocument.findMany({
    where: { status },
    orderBy: { created_at: "asc" }, // plus anciens en premier
    take: limit,
  })

  const archIds = [...new Set(docs.map((d) => d.architect_profile_id))]
  const archs = await db.architectProfile.findMany({
    where: { id: { in: archIds } },
    select: { id: true, name: true, email: true, subscription_tier: true },
  })
  const archMap = new Map(archs.map((a) => [a.id, a]))

  return c.json({
    documents: docs.map((d) => ({
      ...d,
      architect: archMap.get(d.architect_profile_id),
      label: DOCUMENT_LABELS[d.document_type as DocumentType],
    })),
    count: docs.length,
  })
})

// ─── Admin: moderate a document ─────────────────────────────────────────────
verifications.post("/admin/:id", async (c) => {
  const id = c.req.param("id")
  const body = await c.req.json()
  const action = body.action // "approve" | "reject"
  const admin_note = body.admin_note || null
  const reviewed_by = body.reviewed_by || "admin"

  if (!["approve", "reject"].includes(action)) {
    return c.json({ message: "Action invalide" }, 400)
  }

  const newStatus = action === "approve" ? "approved" : "rejected"
  const doc = await db.verificationDocument.update({
    where: { id },
    data: {
      status: newStatus,
      admin_note,
      reviewed_at: new Date(),
      reviewed_by,
    },
  })

  // Si TOUS les documents requis sont approuvés → activer le flag `verified`
  if (newStatus === "approved") {
    const required: DocumentType[] = ["patente", "oam", "cnss", "assurance"]
    const approvedDocs = await db.verificationDocument.findMany({
      where: {
        architect_profile_id: doc.architect_profile_id,
        status: "approved",
        document_type: { in: required },
      },
      select: { document_type: true },
    })
    const approvedTypes = new Set(approvedDocs.map((d) => d.document_type))
    const allRequiredApproved = required.every((t) => approvedTypes.has(t))

    if (allRequiredApproved) {
      await db.architectProfile.update({
        where: { id: doc.architect_profile_id },
        data: { verified: true },
      })
    }
  }

  return c.json({ document: doc })
})
