import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/lib/cities";
import { GUIDE_SLUGS } from "@/lib/guides";

const BASE = "https://bati.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cityPages = CITY_SLUGS.flatMap((city) => [
    {
      url: `${BASE}/architecte/${city}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE}/architecte-interieur/${city}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  const guidePages = GUIDE_SLUGS.map((slug) => ({
    url: `${BASE}/guide/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/architecte`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/architecte-interieur`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...cityPages,
    ...guidePages,
  ];
}
