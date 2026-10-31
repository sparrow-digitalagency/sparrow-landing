import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/config/services";
import { serviceSectionHref } from "@/lib/lead/intent";
import { Container } from "@/components/ui/Container";

/** Black contrast footer (structure only; final content in Stage 2/3). */
export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-surface-inverse pt-16 pb-28 text-sm text-content-inverse lg:pb-16">
      <Container className="flex flex-col gap-10 md:flex-row md:justify-between">
        <p className="flex items-center gap-2 font-display text-xl font-extrabold tracking-[-0.02em]">
          <span
            className="size-3 border-2 border-white bg-lime"
            aria-hidden="true"
          />
          {t("common.brand")}
        </p>
        <nav aria-label={t("common.servicesNav")}>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={serviceSectionHref(service.anchor)}
                  className="flex min-h-11 items-center text-white/75 hover:text-white"
                >
                  {t(`services.${service.messageKey}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-white/75">
          © {new Date().getFullYear()} {t("common.brand")}. {t("footer.rights")}
        </p>
      </Container>
    </footer>
  );
}
