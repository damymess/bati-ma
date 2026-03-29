/**
 * Format budget range for display.
 * @param compact - Use short format (300k) vs full (300 000)
 */
export function formatBudget(min: number | null, max: number | null, compact = false): string {
  if (!min && !max) return "Non défini";

  const fmt = (n: number) =>
    compact ? `${(n / 1000).toFixed(0)}k` : n.toLocaleString("fr-MA");

  const suffix = compact ? " MAD" : " MAD";

  if (min && max) return `${fmt(min)} – ${fmt(max)}${suffix}`;
  if (min) return `> ${fmt(min)}${suffix}`;
  if (max) return `< ${fmt(max)}${suffix}`;
  return "Non défini";
}

/**
 * Human-readable time ago string.
 */
export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";

  const diff = Date.now() - date.getTime();
  if (diff < 0) return "";

  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Il y a quelques minutes";
  if (hours < 24) return `Il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Hier";
  return `Il y a ${days} jours`;
}
