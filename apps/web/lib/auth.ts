const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://api.bati.ma"
const API_KEY = process.env.NEXT_PUBLIC_MEDUSA_KEY ?? "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f"
const TOKEN_KEY = "bati_architect_token"

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
  created_at: string
}

function headers() {
  return {
    "Content-Type": "application/json",
    "x-publishable-api-key": API_KEY,
  }
}

// ─── Token management (localStorage — client-side only) ─────────────────────
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

// ─── API calls ───────────────────────────────────────────────────────────────
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
  if (!res.ok) throw new Error(json.error || "Erreur inscription")
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
  if (!res.ok) throw new Error(json.error || "Identifiants incorrects")
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
  if (!res.ok) throw new Error(json.error || "Erreur mise à jour")
  return json.architect
}

export function logout() {
  clearToken()
}
