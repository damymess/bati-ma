import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "")
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@bati.ma"
const FROM_EMAIL = "Bati.ma <noreply@bati.ma>"

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
      subject: `🏗️ Nouveau projet : ${project.title}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#b5522a;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:20px">Nouvelle demande de projet</h1>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:0;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Client</td><td style="padding:8px 0;font-weight:600">${project.client_name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${project.client_email}">${project.client_email}</a></td></tr>
              ${project.client_phone ? `<tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${project.client_phone}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Type de projet</td><td style="padding:8px 0">${project.project_type}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Ville</td><td style="padding:8px 0">${project.location}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Budget</td><td style="padding:8px 0">${formatBudget(project.budget_min, project.budget_max)}</td></tr>
              ${project.timeline ? `<tr><td style="padding:8px 0;color:#666">Délai</td><td style="padding:8px 0">${project.timeline}</td></tr>` : ""}
            </table>
            ${project.description ? `<div style="margin-top:16px;padding:12px;background:#f9f9f9;border-radius:6px"><strong>Description :</strong><br/>${project.description}</div>` : ""}
            <div style="margin-top:20px;text-align:center">
              <a href="https://bati.ma/dashboard/admin/projets/${project.id}" style="display:inline-block;background:#b5522a;color:white;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:600">Voir dans le dashboard</a>
            </div>
          </div>
        </div>
      `,
    })
  } catch (e) {
    console.error("[email] Failed to notify admin:", e)
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
            <p>Bonjour <strong>${project.client_name}</strong>,</p>
            <p>Nous avons bien reçu votre demande de projet :</p>
            <div style="background:#f9f9f9;padding:16px;border-radius:6px;margin:16px 0">
              <p style="margin:0 0 8px"><strong>${project.title}</strong></p>
              <p style="margin:0;color:#666">${project.project_type} · ${project.location}</p>
              <p style="margin:8px 0 0;color:#666">Budget : ${formatBudget(project.budget_min, project.budget_max)}</p>
            </div>
            <p>Votre projet est maintenant visible par les architectes qualifiés de notre plateforme. Vous recevrez bientôt des propositions.</p>
            <h3 style="margin:24px 0 8px;font-size:15px">Prochaines étapes :</h3>
            <ol style="color:#555;line-height:1.8">
              <li>Les architectes consultent votre projet</li>
              <li>Vous recevez des devis personnalisés</li>
              <li>Vous choisissez l'architecte qui vous convient</li>
            </ol>
            <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#999;font-size:13px">Cet email a été envoyé automatiquement par Bati.ma. Si vous n'êtes pas à l'origine de cette demande, ignorez ce message.</p>
          </div>
        </div>
      `,
    })
  } catch (e) {
    console.error("[email] Failed to confirm to client:", e)
  }
}
