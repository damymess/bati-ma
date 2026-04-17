/**
 * Lead pricing tier logic (inspiré Habitatpresto / MyBuilder)
 *
 * 4 types de leads, chaque niveau de qualification augmente la valeur :
 * - cold     : email uniquement (vient du calculateur bloqué)
 * - warm     : email + téléphone
 * - hot      : email + téléphone + timing + financement (shortlist)
 * - exclusive: demande directe à UN architecte (fiche archi)
 */

export type LeadType = "cold" | "warm" | "hot" | "exclusive"

export type LeadPricing = {
  creditsRequired: number
  priceMad: number
  maxArchitectsCanBuy: number // nombre max d'architectes qui peuvent acheter ce lead
  exclusivityHours: number // durée d'exclusivité pour les Pro/Elite
}

export const LEAD_PRICING: Record<LeadType, LeadPricing> = {
  cold: {
    creditsRequired: 1,
    priceMad: 100,
    maxArchitectsCanBuy: 10, // lead peu qualifié, partagé largement
    exclusivityHours: 0,
  },
  warm: {
    creditsRequired: 2,
    priceMad: 250,
    maxArchitectsCanBuy: 5,
    exclusivityHours: 0,
  },
  hot: {
    creditsRequired: 3,
    priceMad: 500,
    maxArchitectsCanBuy: 3, // shortlist MyBuilder-style
    exclusivityHours: 24, // Pro/Elite ont 24h d'avance
  },
  exclusive: {
    creditsRequired: 5,
    priceMad: 800,
    maxArchitectsCanBuy: 1, // demande directe à 1 architecte
    exclusivityHours: 0,
  },
}

export function getLeadPricing(leadType: string): LeadPricing {
  return LEAD_PRICING[leadType as LeadType] || LEAD_PRICING.cold
}

/**
 * Calcule le niveau de qualification en fonction des champs remplis
 */
export function qualifyLead(data: {
  client_email: string
  client_phone?: string | null
  timeline?: string | null
  financing?: string | null
  architect_profile_id?: string | null
}): LeadType {
  // Si ciblage direct à un architecte précis
  if (data.architect_profile_id) return "exclusive"

  const hasPhone = !!data.client_phone
  const hasTiming = !!data.timeline
  const hasFinancing = !!data.financing

  if (hasPhone && hasTiming && hasFinancing) return "hot"
  if (hasPhone) return "warm"
  return "cold"
}
