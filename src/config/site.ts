/** Global, non-translatable site settings. */
export const siteConfig = {
  name: "Sparrow.Agency",
  /** Public base URL, used for canonical URLs, hreflang and the sitemap. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  /** Indexing stays off until the production launch is explicitly approved. */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
} as const;
