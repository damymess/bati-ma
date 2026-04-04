import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/lib/cities";
import { GUIDE_SLUGS } from "@/lib/guides";
import { CATEGORY_SLUGS } from "@/lib/forum";
import { AO_IDS } from "@/lib/appels-offres";
import { QUARTIER_PARAMS } from "@/lib/quartiers";
import { SPECIALTY_SLUGS } from "@/lib/specialties";

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

  const forumPages = CATEGORY_SLUGS.map((cat) => ({
    url: `${BASE}/forum/${cat}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  const aoPages = AO_IDS.map((id) => ({
    url: `${BASE}/appels-offres/${id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const quartierPages = QUARTIER_PARAMS.map(({ city, quartier }) => ({
    url: `${BASE}/architecte/${city}/q/${quartier}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const specialtyPages = CITY_SLUGS.flatMap((city) =>
    SPECIALTY_SLUGS.map((spec) => ({
      url: `${BASE}/architecte/${city}/specialite/${spec}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))
  );

  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/architecte`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/architecte-interieur`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/appels-offres`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE}/forum`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/projets`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    ...cityPages,
    ...quartierPages,
    ...specialtyPages,
    ...guidePages,
    ...forumPages,
    ...aoPages,
  ];
}
