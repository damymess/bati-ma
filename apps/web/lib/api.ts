const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";
const API_KEY = process.env.NEXT_PUBLIC_MEDUSA_KEY || "";

export type ArchitectAPI = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  license_number: string | null;
  specialties: string[];
  regions: string[];
  languages: string[];
  description: string | null;
  portfolio_images: string[];
  website: string | null;
  years_experience: number;
  hourly_rate: number | null;
  project_rate_min: number | null;
  project_rate_max: number | null;
  verified: boolean;
  premium: boolean;
  rating: number;
  review_count: number;
};

export type ProjectRequestInput = {
  title: string;
  client_name: string;
  client_email: string;
  client_phone?: string;
  architect_id?: string;
  description: string;
  project_type: string;
  location: string;
  address?: string;
  budget_min?: number;
  budget_max?: number;
  timeline?: string;
  financing?: string | null;
  calculator_payload?: unknown;
};

export async function fetchArchitects(filters?: {
  city?: string;
  specialty?: string;
}): Promise<{ architects: ArchitectAPI[]; count: number }> {
  const params = new URLSearchParams();
  if (filters?.city) params.set("city", filters.city);
  if (filters?.specialty) params.set("specialty", filters.specialty);

  const res = await fetch(`${API_URL}/store/architects?${params}`);

  if (!res.ok) return { architects: [], count: 0 };
  return res.json();
}

export async function fetchArchitect(
  id: string
): Promise<ArchitectAPI | null> {
  const res = await fetch(`${API_URL}/store/architects/${id}`);

  if (!res.ok) return null;
  const data = await res.json();
  return data.architect;
}

export async function registerArchitect(
  data: Omit<ArchitectAPI, "id" | "verified" | "premium" | "rating" | "review_count" | "portfolio_images">
): Promise<{ architect: ArchitectAPI }> {
  const res = await fetch(`${API_URL}/store/architects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}

export async function submitProjectRequest(
  data: ProjectRequestInput
): Promise<{ project_request: unknown }> {
  const res = await fetch(`${API_URL}/store/project-requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Submission failed");
  return res.json();
}

// ─── Contact ────────────────────────────────────────────────────────────────

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean }> {
  const res = await fetch(`${API_URL}/store/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Erreur d'envoi" }));
    throw new Error(err.message || "Erreur d'envoi");
  }
  return res.json();
}

// ─── Demandes de devis ──────────────────────────────────────────────────────

export type DemandeDevis = {
  id: string;
  title: string;
  description: string;
  project_type: string;
  location: string;
  budget_min: number | null;
  budget_max: number | null;
  timeline: string | null;
  created_at: string;
  contact_locked?: boolean;
  client_name?: string;
  client_email?: string;
  client_phone?: string;
};

export async function fetchDemandesDevis(
  filters?: { city?: string; project_type?: string },
  token?: string | null
): Promise<{ demandes: DemandeDevis[]; count: number; subscription_tier: string | null }> {
  const params = new URLSearchParams();
  if (filters?.city) params.set("city", filters.city);
  if (filters?.project_type) params.set("project_type", filters.project_type);

  const hdrs: Record<string, string> = {};
  if (API_KEY) hdrs["x-publishable-api-key"] = API_KEY;
  if (token) hdrs["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}/store/demandes-devis?${params}`, {
    headers: hdrs,
  });

  if (!res.ok) return { demandes: [], count: 0, subscription_tier: null };
  return res.json();
}

export async function fetchDemandeDevis(
  id: string,
  token?: string | null
): Promise<{
  demande: DemandeDevis;
  already_unlocked: boolean;
  subscription_tier: string | null;
  can_unlock: boolean;
} | null> {
  const hdrs: Record<string, string> = {};
  if (API_KEY) hdrs["x-publishable-api-key"] = API_KEY;
  if (token) hdrs["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}/store/demandes-devis/${id}`, {
    headers: hdrs,
  });

  if (!res.ok) return null;
  return res.json();
}

// ─── Admin project requests ────────────────────────────────────────────────

export async function fetchAdminProjectRequests(opts?: {
  status?: string;
  limit?: number;
  offset?: number;
}): Promise<{ project_requests: any[]; count: number }> {
  const params = new URLSearchParams();
  if (opts?.status) params.set("status", opts.status);
  if (opts?.limit) params.set("limit", String(opts.limit));
  if (opts?.offset) params.set("offset", String(opts.offset));

  const res = await fetch(`${API_URL}/admin/project-requests?${params}`);
  if (!res.ok) return { project_requests: [], count: 0 };
  return res.json();
}

export async function fetchAdminProjectRequest(
  id: string
): Promise<{ project_request: any }> {
  const res = await fetch(`${API_URL}/admin/project-requests/${id}`);
  if (!res.ok) throw new Error("Projet non trouvé");
  return res.json();
}

export async function updateAdminProjectRequestStatus(
  id: string,
  status: string
): Promise<{ project_request: any }> {
  const res = await fetch(`${API_URL}/admin/project-requests/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Erreur mise à jour");
  return res.json();
}

export async function unlockContact(
  demandeId: string,
  token: string
): Promise<{
  client_name: string;
  client_email: string;
  client_phone: string | null;
  already_unlocked: boolean;
}> {
  const hdrs: Record<string, string> = { Authorization: `Bearer ${token}` };
  if (API_KEY) hdrs["x-publishable-api-key"] = API_KEY;

  const res = await fetch(`${API_URL}/store/demandes-devis/${demandeId}/contact`, {
    method: "POST",
    headers: hdrs,
  });

  if (!res.ok) {
    let message = "Erreur lors du déblocage";
    try {
      const err = await res.json();
      message = err.message || err.error || message;
    } catch {}
    throw new Error(message);
  }
  return res.json();
}
