const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://api.bati.ma";
const API_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_KEY ??
  "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";

function headers(): HeadersInit {
  return {
    "Content-Type": "application/json",
    "x-publishable-api-key": API_KEY,
  };
}

// ─── Forum ──────────────────────────────────────────────────────────────────
export type APIForumThread = {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_role: string | null;
  category: string;
  views: number;
  replies_count: number;
  pinned: boolean;
  created_at: string;
  updated_at: string;
};

export type APIForumReply = {
  id: string;
  thread_id: string;
  author_name: string;
  author_role: string | null;
  content: string;
  created_at: string;
};

export async function fetchForumThreads(category?: string): Promise<APIForumThread[]> {
  const params = category ? `?category=${category}` : "";
  const res = await fetch(`${API_BASE}/store/forum${params}`, {
    headers: headers(),
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.threads ?? [];
}

export async function fetchForumThread(id: string): Promise<{ thread: APIForumThread; replies: APIForumReply[] } | null> {
  const res = await fetch(`${API_BASE}/store/forum/${id}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function createForumThread(data: {
  title: string;
  content: string;
  category: string;
  author_name: string;
  author_role?: string;
  author_id?: string;
}): Promise<APIForumThread | null> {
  const res = await fetch(`${API_BASE}/store/forum`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.thread;
}

export async function createForumReply(
  threadId: string,
  data: { content: string; author_name: string; author_role?: string; author_id?: string }
): Promise<APIForumReply | null> {
  const res = await fetch(`${API_BASE}/store/forum/${threadId}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.reply;
}

// ─── Appels d'offres ────────────────────────────────────────────────────────
export type APIAppelOffre = {
  id: string;
  title: string;
  description: string;
  organism: string;
  city: string;
  reference: string | null;
  type: string;
  sector: string;
  budget: string | null;
  deadline: string;
  publish_date: string;
  source: string;
  source_url: string | null;
  status: string;
  created_at: string;
};

export async function fetchAppelsOffres(filters?: {
  status?: string;
  sector?: string;
  city?: string;
}): Promise<APIAppelOffre[]> {
  const params = new URLSearchParams();
  if (filters?.status) params.set("status", filters.status);
  if (filters?.sector) params.set("sector", filters.sector);
  if (filters?.city) params.set("city", filters.city);
  const qs = params.toString() ? `?${params}` : "";
  const res = await fetch(`${API_BASE}/store/appels-offres${qs}`, {
    headers: headers(),
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.appels_offres ?? [];
}

export async function fetchAppelOffre(id: string): Promise<APIAppelOffre | null> {
  const res = await fetch(`${API_BASE}/store/appels-offres/${id}`, {
    headers: headers(),
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.appel_offre ?? null;
}

// ─── Projets (marketplace) ──────────────────────────────────────────────────
export type APIProject = {
  id: string;
  title: string;
  description: string;
  client_name: string;
  client_email: string;
  project_type: string;
  location: string;
  budget_min: number | null;
  budget_max: number | null;
  timeline: string | null;
  status: string;
  is_public: boolean;
  responses_count: number;
  created_at: string;
};

export async function fetchPublicProjects(filters?: {
  city?: string;
  project_type?: string;
}): Promise<APIProject[]> {
  const params = new URLSearchParams();
  if (filters?.city) params.set("city", filters.city);
  if (filters?.project_type) params.set("project_type", filters.project_type);
  const qs = params.toString() ? `?${params}` : "";
  const res = await fetch(`${API_BASE}/store/projects${qs}`, {
    headers: headers(),
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.projects ?? [];
}

export async function submitProject(data: {
  title: string;
  description: string;
  project_type: string;
  location: string;
  budget_min?: number;
  budget_max?: number;
  timeline?: string;
  client_name: string;
  client_email: string;
  is_public: boolean;
}): Promise<boolean> {
  const res = await fetch(`${API_BASE}/store/project-requests`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ ...data, source: "marketplace" }),
  });
  return res.ok;
}

export async function respondToProject(
  projectId: string,
  data: { architect_profile_id: string; architect_response: string; proposed_fee?: number }
): Promise<boolean> {
  const res = await fetch(`${API_BASE}/store/projects/${projectId}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  });
  return res.ok;
}
