import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { leadHref } from "@/lib/lead/intent";

export function Hero() {
  const t = useTranslations();

  return (
    <Section id="hero" as="h1" title={t("sections.hero.title")}>
      <p className="mt-6 max-w-2xl text-lg text-content-muted">
        {t("sections.hero.subtitle")}
      </p>
      <Link
        href={leadHref("consultation")}
        className={buttonStyles("accent", "mt-10")}
      >
        {t("common.ctaLead")}
      </Link>
    </Section>
  );
}
