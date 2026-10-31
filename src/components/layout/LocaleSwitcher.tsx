"use client";

import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { localeLabels, localizedPath, routing } from "@/i18n/routing";
import { cn } from "@/components/ui/cn";

/**
 * The only way to change the language (no automatic detection).
 * Links go straight to the public URL (English → "/", not "/en").
 */
export function LocaleSwitcher({
  variant = "pill",
  className,
}: {
  /** pill: desktop header; compact: mobile header / menu. */
  variant?: "pill" | "compact";
  className?: string;
}) {
  const t = useTranslations("common");
  const current = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t("languageSwitcher")} className={className}>
      <ul className="flex items-center gap-1">
        {routing.locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <NextLink
                href={localizedPath(locale, pathname as `/${string}`)}
                hrefLang={locale}
                lang={locale}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "flex items-center justify-center text-xs font-semibold transition-colors",
                  variant === "pill" && "h-8 min-w-9 rounded-pill border px-2",
                  variant === "pill" &&
                    (active
                      ? "border-black bg-lime"
                      : "border-transparent hover:border-line-strong"),
                  variant === "compact" && "h-11 min-w-8",
                  variant === "compact" &&
                    (active
                      ? "font-extrabold underline decoration-2 underline-offset-4"
                      : "text-content-muted hover:text-black"),
                )}
              >
                {localeLabels[locale]}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
