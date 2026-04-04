const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000"
const API_KEY = process.env.NEXT_PUBLIC_MEDUSA_KEY ?? ""
const TOKEN_KEY = "bati_token"
// Migrate old key
if (typeof window !== "undefined" && localStorage.getItem("bati_architect_token") && !localStorage.getItem(TOKEN_KEY)) {
  localStorage.setItem(TOKEN_KEY, localStorage.getItem("bati_architect_token")!)
  localStorage.removeItem("bati_architect_token")
}

export type ArchitectProfile = {
  id: string
  name: string
  email: string
  phone: string | null
  specialties: string[]
  regions: string[]
  description: string | null
  website: string | null
  hourly_rate: number | null
  project_rate_min: number | null
  project_rate_max: number | null
  years_experience: number
  license_number: string | null
  verified: boolean
  premium: boolean
  is_active: boolean
  rating: number
  review_count: number
  portfolio_images: string[]
  created_at: string
}

export type ClientProfile = {
  id: string
  name: string
  email: string
  phone: string | null
  city: string | null
  is_active: boolean
  created_at: string
}

function headers() {
  return {
    "Content-Type": "application/json",
    ...(API_KEY ? { "x-publishable-api-key": API_KEY } : {}),
  }
}

// ─── Token management ───────────────────────────────────────────────────────

export function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function isLoggedIn(): boolean {
  return !!getToken()
}

/** Decode JWT payload without verifying signature (client-side only) */
export function decodeToken(): { id: string; email: string; role: "architect" | "client" } | null {
  const token = getToken()
  if (!token) return null
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    // Legacy compat: old tokens have architect_id but no role
    if (!payload.role && payload.architect_id) {
      payload.role = "architect"
      payload.id = payload.architect_id
    }
    return payload
  } catch {
    return null
  }
}

// ─── Architect auth ─────────────────────────────────────────────────────────

export async function register(data: {
  name: string
  email: string
  password: string
  phone?: string
  specialties?: string[]
  regions?: string[]
  description?: string
  years_experience?: number
  license_number?: string
}): Promise<{ architect: ArchitectProfile; token: string }> {
  const res = await fetch(`${API_BASE}/store/architects/register`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || json.error || "Erreur inscription")
  setToken(json.token)
  return json
}

export async function login(email: string, password: string): Promise<{ architect: ArchitectProfile; token: string }> {
  const res = await fetch(`${API_BASE}/store/architects/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || json.error || "Identifiants incorrects")
  setToken(json.token)
  return json
}

export async function getMe(): Promise<ArchitectProfile | null> {
  const token = getToken()
  if (!token) return null
  const res = await fetch(`${API_BASE}/store/architects/me`, {
    headers: { ...headers(), Authorization: `Bearer ${token}` },
  })
  if (!res.ok) { clearToken(); return null }
  const json = await res.json()
  return json.architect
}

export async function updateMe(data: Partial<ArchitectProfile>): Promise<ArchitectProfile> {
  const token = getToken()
  if (!token) throw new Error("Non authentifié")
  const res = await fetch(`${API_BASE}/store/architects/me`, {
    method: "PUT",
    headers: { ...headers(), Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || json.error || "Erreur mise à jour")
  return json.architect
}

// ─── Client auth ────────────────────────────────────────────────────────────

export async function registerClient(data: {
  name: string
  email: string
  password: string
  phone?: string
  city?: string
}): Promise<{ client: ClientProfile; token: string }> {
  const res = await fetch(`${API_BASE}/store/clients/register`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || json.error || "Erreur inscription")
  setToken(json.token)
  return json
}

export async function loginClient(email: string, password: string): Promise<{ client: ClientProfile; token: string }> {
  const res = await fetch(`${API_BASE}/store/clients/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || json.error || "Identifiants incorrects")
  setToken(json.token)
  return json
}

export async function getMeClient(): Promise<ClientProfile | null> {
  const token = getToken()
  if (!token) return null
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    const res = await fetch(`${API_BASE}/store/clients/me`, {
      headers: { ...headers(), Authorization: `Bearer ${token}` },
      signal: controller.signal,
    })
    clearTimeout(timeout)
    if (!res.ok) return null
    const json = await res.json()
    return json.client
  } catch {
    return null
  }
}

export async function fetchClientProjets(): Promise<any[]> {
  const token = getToken()
  if (!token) return []
  const res = await fetch(`${API_BASE}/store/clients/projets`, {
    headers: { ...headers(), Authorization: `Bearer ${token}` },
  })
  if (!res.ok) return []
  const json = await res.json()
  return json.projets || []
}

// ─── Password reset ────────────────────────────────────────────────────────

export async function forgotPassword(email: string, role: "architect" | "client"): Promise<{ message: string }> {
  const res = await fetch(`${API_BASE}/store/auth/forgot-password`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, role }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || "Erreur")
  return json
}

export async function resetPassword(token: string, password: string): Promise<{ message: string; token: string; role: string }> {
  const res = await fetch(`${API_BASE}/store/auth/reset-password`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ token, password }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || "Erreur")
  if (json.token) setToken(json.token)
  return json
}

// ─── Shared ─────────────────────────────────────────────────────────────────

export function logout() {
  clearToken()
}
