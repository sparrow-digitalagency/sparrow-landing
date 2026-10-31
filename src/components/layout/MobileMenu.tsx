"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navSections } from "@/config/sections";
import { leadHref } from "@/lib/lead/intent";
import { buttonClass } from "@/components/ui/button";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/components/ui/cn";

/** Mobile / tablet navigation panel (below the lg breakpoint). */
export function MobileMenu() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t("common.menuClose") : t("common.menuOpen")}
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center"
      >
        {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-surface md:top-[4.5rem]"
      >
        <nav
          aria-label={t("common.primaryNav")}
          className="flex flex-col gap-2 px-gutter pt-8 pb-10 md:px-10"
        >
          <ul className="flex flex-col">
            {navSections.map((item, index) => (
              <li key={item.id} className="border-b border-line">
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={{ pathname: "/", hash: item.id }}
                  onClick={close}
                  className="flex min-h-16 items-center font-display text-[1.75rem] font-extrabold tracking-[-0.02em]"
                >
                  {t(`nav.${item.messageKey}`)}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={leadHref("consultation")}
            onClick={close}
            className={cn(buttonClass("primary", "md"), "mt-8 w-full")}
          >
            {t("common.ctaLead")}
            <ArrowRightIcon size={18} />
          </Link>
        </nav>
      </div>
    </>
  );
}
