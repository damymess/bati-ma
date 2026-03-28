const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

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
};

export async function fetchArchitects(filters?: {
  city?: string;
  specialty?: string;
}): Promise<{ architects: ArchitectAPI[]; count: number }> {
  const params = new URLSearchParams();
  if (filters?.city) params.set("city", filters.city);
  if (filters?.specialty) params.set("specialty", filters.specialty);

  const res = await fetch(`${API_URL}/store/architects?${params}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return { architects: [], count: 0 };
  return res.json();
}

export async function fetchArchitect(
  id: string
): Promise<ArchitectAPI | null> {
  const res = await fetch(`${API_URL}/store/architects/${id}`, {
    next: { revalidate: 60 },
  });

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
