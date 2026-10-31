import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl, hreflang, localizedPath } from "@/lib/seo/alternates";

/** Stage 1: one landing page in four languages. */
const pages = ["/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, path)),
      changeFrequency: "monthly" as const,
      priority: locale === routing.defaultLocale ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries([
          ...routing.locales.map((l) => [
            hreflang[l],
            absoluteUrl(localizedPath(l, path)),
          ]),
          [
            "x-default",
            absoluteUrl(localizedPath(routing.defaultLocale, path)),
          ],
        ]),
      },
    })),
  );
}
