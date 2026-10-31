import type { Metadata } from "next";
import { localizedPath, routing, type Locale } from "@/i18n/routing";

export { localizedPath };
import { siteConfig } from "@/config/site";

/** hreflang values per locale. */
export const hreflang: Record<Locale, string> = {
  en: "en",
  uk: "uk",
  pl: "pl",
  ru: "ru",
};

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}` || siteConfig.url;
}

/** canonical + hreflang alternates (x-default → English at "/"). */
export function buildAlternates(
  locale: Locale,
  path: `/${string}` = "/",
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[hreflang[l]] = localizedPath(l, path);
  }
  languages["x-default"] = localizedPath(routing.defaultLocale, path);

  return {
    canonical: localizedPath(locale, path),
    languages,
  };
}
