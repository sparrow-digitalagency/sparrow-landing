import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/config/services";
import { serviceSectionHref } from "@/lib/lead/intent";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="py-12 text-sm">
      <Container className="flex flex-col gap-8 md:flex-row md:justify-between">
        <p className="font-display text-lg font-bold">{t("common.brand")}</p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={serviceSectionHref(service.anchor)}
                className="text-content-muted hover:text-content"
              >
                {t(`services.${service.messageKey}.name`)}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-content-muted">
          © {new Date().getFullYear()} {t("common.brand")}. {t("footer.rights")}
        </p>
      </Container>
    </footer>
  );
}
