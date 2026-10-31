import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { sections } from "@/config/sections";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "./LocaleSwitcher";

const navItems = sections.filter((s) => s.inNav);

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
        >
          {t("common.brand")}
        </Link>
        <nav aria-label={t("common.primaryNav")} className="hidden lg:block">
          <ul className="flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={{ pathname: "/", hash: item.id }}
                  className="text-content-muted hover:text-content"
                >
                  {t(`nav.${item.messageKey}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher />
      </Container>
    </header>
  );
}
