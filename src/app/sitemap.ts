import type { MetadataRoute } from "next";
import { sections, locales } from "@/data/sections";

const baseUrl = "https://tsue-global-portal.onrender.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-02T00:00:00.000Z");
  return locales.flatMap((locale) => {
    const languages = {
      uz: baseUrl + "/uz",
      en: baseUrl + "/en",
      ru: baseUrl + "/ru"
    };
    return [
      {
        url: baseUrl + "/" + locale,
        lastModified: updated,
        changeFrequency: "weekly" as const,
        priority: 1,
        alternates: { languages }
      },
      ...sections.map((section) => ({
        url: baseUrl + "/" + locale + "/sections/" + section.slug,
        lastModified: updated,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            uz: baseUrl + "/uz/sections/" + section.slug,
            en: baseUrl + "/en/sections/" + section.slug,
            ru: baseUrl + "/ru/sections/" + section.slug
          }
        }
      }))
    ];
  });
}
