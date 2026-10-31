import { defineRouting } from "next-intl/routing";

/**
 * Locales of the landing.
 *
 * - `en` is the default locale and is served from `/` without a prefix
 *   (`/en/...` permanently redirects to `/...`).
 * - `uk` is the ISO 639-1 code for Ukrainian (used for `lang` and `hreflang`),
 *   but its URL prefix is `/ua` as approved.
 * - No automatic language detection: neither Accept-Language nor geolocation
 *   nor a locale cookie is used. The language changes only via the switcher.
 */
export const routing = defineRouting({
  locales: ["en", "uk", "pl", "ru"],
  defaultLocale: "en",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      uk: "/ua",
    },
  },
  localeDetection: false,
  localeCookie: false,
  // hreflang alternates are emitted via page metadata (see src/lib/seo).
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];

/** Public URL prefix for each locale ("" for the default locale). */
export const localePathPrefix: Record<Locale, string> = {
  en: "",
  uk: "/ua",
  pl: "/pl",
  ru: "/ru",
};

/** Short labels for the language switcher. */
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  uk: "UA",
  pl: "PL",
  ru: "RU",
};

/** Public path of `path` in `locale`, e.g. ("uk", "/") → "/ua". */
export function localizedPath(
  locale: Locale,
  path: `/${string}` = "/",
): string {
  const prefix = localePathPrefix[locale];
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}
