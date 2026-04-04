// Umami event tracking + UTM capture

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

function getUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("bati_utm");
    if (stored) return JSON.parse(stored);
  } catch {}
  return {};
}

/** Call once on app mount to persist UTM params for the session */
export function captureUtm() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
    const v = params.get(key);
    if (v) utm[key] = v;
  }
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem("bati_utm", JSON.stringify(utm));
  }
}

function track(event: string, data?: Record<string, unknown>) {
  const utm = getUtm();
  window.umami?.track(event, { ...utm, ...data });
}

// ─── Form events ────────────────────────────────────────────────────────────

export function trackQuickLeadSubmit(data: { city: string; projectType: string }) {
  track("quick_lead_submitted", data);
}

export function trackDevisStep(step: number) {
  track(`devis_step_${step}`);
}

export function trackDevisSubmit(data: { city: string; projectType: string; budget?: string }) {
  track("devis_submitted", data);
}

export function trackSoumettreProjetSubmit() {
  track("soumettre_projet_submitted");
}

export function trackContactSubmit() {
  track("contact_submitted");
}

// ─── Architect events ───────────────────────────────────────────────────────

export function trackArchitectView(id: string, city: string) {
  track("architect_view", { id, city });
}

export function trackArchitectPhoneClick(id: string) {
  track("architect_phone_click", { id });
}

export function trackWhatsAppClick(id: string) {
  track("whatsapp_click", { id });
}

// ─── CTA events ─────────────────────────────────────────────────────────────

export function trackCtaClick(source: string, detail?: string) {
  track("cta_click", { source, detail });
}
