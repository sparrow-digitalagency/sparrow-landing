"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HERO_SECTION_ID, LEAD_SECTION_ID } from "@/config/sections";
import { leadHref } from "@/lib/lead/intent";
import { buttonClass } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/components/ui/cn";

/**
 * One compact floating CTA on mobile/tablet (below lg).
 * Appears after the hero has scrolled out of view and hides while the lead
 * form is visible, so it never covers the form.
 */
export function StickyCta() {
  const t = useTranslations("common");
  const [heroVisible, setHeroVisible] = useState(true);
  const [leadVisible, setLeadVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(HERO_SECTION_ID);
    const lead = document.getElementById(LEAD_SECTION_ID);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting);
        if (entry.target === lead) setLeadVisible(entry.isIntersecting);
      }
    });
    if (hero) observer.observe(hero);
    if (lead) observer.observe(lead);
    return () => observer.disconnect();
  }, []);

  const visible = !heroVisible && !leadVisible;

  return (
    <div
      data-sticky-cta
      inert={!visible}
      aria-hidden={!visible}
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center bg-linear-to-b from-white/0 via-white/90 to-white px-4 pt-10 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-all duration-300 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <Link
        href={leadHref("consultation")}
        className={cn(
          buttonClass("primary", "md"),
          "pointer-events-auto h-13 px-7 text-[0.9375rem] shadow-float",
        )}
      >
        {t("ctaLead")}
        <ArrowRightIcon size={16} />
      </Link>
    </div>
  );
}
