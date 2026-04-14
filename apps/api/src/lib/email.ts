import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "")
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@bati.ma"
const FROM_EMAIL = "Bati.ma <noreply@bati.ma>"

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

type ProjectData = {
  id: string
  title: string
  client_name: string
  client_email: string
  client_phone?: string | null
  project_type: string
  location: string
  description?: string
  budget_min?: number | null
  budget_max?: number | null
  timeline?: string | null
  architect_name?: string | null
}

function formatBudget(min?: number | null, max?: number | null): string {
  if (!min && !max) return "Non défini"
  if (min && max) return `${min.toLocaleString("fr-MA")} - ${max.toLocaleString("fr-MA")} MAD`
  if (min) return `À partir de ${min.toLocaleString("fr-MA")} MAD`
  return `Jusqu'à ${max!.toLocaleString("fr-MA")} MAD`
}

export async function sendProjectSubmissionToAdmin(project: ProjectData) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `Nouveau projet : ${project.title}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Nouvelle demande de projet</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Client</td><td style="padding:8px 0;font-weight:600">${esc(project.client_name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${esc(project.client_email)}">${esc(project.client_email)}</a></td></tr>
              ${project.client_phone ? `<tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${esc(project.client_phone)}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Type</td><td style="padding:8px 0">${esc(project.project_type)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Ville</td><td style="padding:8px 0">${esc(project.location)}</td></tr>
              ${project.architect_name ? `<tr><td style="padding:8px 0;color:#666">Architecte demand\u00e9</td><td style="padding:8px 0;font-weight:600;color:#b5522a">${esc(project.architect_name)}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Budget</td><td style="padding:8px 0">${formatBudget(project.budget_min, project.budget_max)}</td></tr>
            </table>
            ${project.description ? `<div style="margin-top:16px;padding:12px;background:#f9f9f9;border-radius:6px"><strong>Description :</strong><br/>${esc(project.description)}</div>` : ""}
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] admin notify failed:", e)
  }
}

export async function sendContactToAdmin(data: {
  name: string
  email: string
  message: string
}) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `Message de contact — ${data.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Nouveau message de contact</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:100px">Nom</td><td style="padding:8px 0;font-weight:600">${esc(data.name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
            </table>
            <div style="margin-top:16px;padding:12px;background:#f9f9f9;border-radius:6px">
              <strong>Message :</strong><br/>${esc(data.message).replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] contact admin notify failed:", e)
  }
}

export async function sendPasswordResetEmail(data: {
  email: string
  name: string
  resetUrl: string
}) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Réinitialisation de votre mot de passe — Bati.ma",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Bati.ma</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(data.name)}</strong>,</p>
            <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe :</p>
            <div style="text-align:center;margin:24px 0">
              <a href="${esc(data.resetUrl)}" style="display:inline-block;background:#b5522a;color:white;text-decoration:none;padding:12px 32px;border-radius:6px;font-weight:600;font-size:14px">
                Réinitialiser mon mot de passe
              </a>
            </div>
            <p style="color:#666;font-size:13px">Ce lien expire dans <strong>1 heure</strong>. Si vous n'avez pas fait cette demande, ignorez cet email.</p>
            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:13px">Email envoyé automatiquement par Bati.ma</p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] password reset failed:", e)
  }
}

export async function sendProjectConfirmationToClient(project: ProjectData) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: project.client_email,
      subject: `Votre projet "${project.title}" a bien été reçu - Bati.ma`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Bati.ma</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <p>Bonjour <strong>${esc(project.client_name)}</strong>,</p>
            <p>Nous avons bien reçu votre demande de projet :</p>
            <div style="background:#f9f9f9;padding:16px;border-radius:6px;margin:16px 0">
              <p style="margin:0 0 8px"><strong>${esc(project.title)}</strong></p>
              <p style="margin:0;color:#666">${esc(project.project_type)} · ${esc(project.location)}</p>
              <p style="margin:8px 0 0;color:#666">Budget : ${formatBudget(project.budget_min, project.budget_max)}</p>
            </div>
            <p>Votre projet est maintenant visible par les architectes qualifiés de notre plateforme.</p>
            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:13px">Email envoyé automatiquement par Bati.ma</p>
          </div>
        </div>`,
    })
  } catch (e) {
    console.error("[email] client confirm failed:", e)
  }
}
