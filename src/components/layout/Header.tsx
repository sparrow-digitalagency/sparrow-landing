import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navSections } from "@/config/sections";
import { leadHref } from "@/lib/lead/intent";
import { Container } from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/button";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-[4.5rem] lg:h-22">
        <Logo />

        <nav aria-label={t("common.primaryNav")} className="hidden lg:block">
          <ul className="flex gap-10 text-[0.9375rem] font-medium">
            {navSections.map((item) => (
              <li key={item.id}>
                <Link
                  href={{ pathname: "/", hash: item.id }}
                  className="decoration-2 underline-offset-[6px] hover:underline"
                >
                  {t(`nav.${item.messageKey}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LocaleSwitcher variant="pill" />
          <Link
            href={leadHref("consultation")}
            className={buttonClass("primary", "sm")}
          >
            {t("common.ctaLead")}
          </Link>
        </div>

        <div className="-mr-2 flex items-center lg:hidden">
          <LocaleSwitcher variant="compact" />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
