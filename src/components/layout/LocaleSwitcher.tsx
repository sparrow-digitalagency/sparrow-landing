"use client";

import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { localeLabels, localizedPath, routing } from "@/i18n/routing";
import { cn } from "@/components/ui/cn";

/** The only way to change the language (no automatic detection). */
export function LocaleSwitcher() {
  const t = useTranslations("common");
  const current = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t("languageSwitcher")}>
      <ul className="flex items-center gap-1 text-xs font-semibold">
        {routing.locales.map((locale) => (
          <li key={locale}>
            {/* Direct public URL (English → "/", not "/en") to avoid a redirect hop. */}
            <NextLink
              href={localizedPath(locale, pathname as `/${string}`)}
              hrefLang={locale}
              aria-current={locale === current ? "true" : undefined}
              className={cn(
                "rounded-pill px-2 py-1",
                locale === current
                  ? "bg-accent text-on-accent"
                  : "text-content-muted hover:text-content",
              )}
            >
              {localeLabels[locale]}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
