import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/** Additional consultation CTA after Cases. Structural placeholder — design: PR 2.2. */
export function ConsultationCta() {
  const t = useTranslations("sections.consultationCta");
  return <Section id="consultation" surface="muted" title={t("title")} />;
}
