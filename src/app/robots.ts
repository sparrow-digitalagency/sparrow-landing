import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.allowIndexing) {
    // Pre-launch: block all crawlers until NEXT_PUBLIC_ALLOW_INDEXING=true.
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
