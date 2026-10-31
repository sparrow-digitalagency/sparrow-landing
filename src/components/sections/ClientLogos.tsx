import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/** Structural placeholder. Content and design: Stage 2. */
export function ClientLogos() {
  const t = useTranslations("sections.clients");
  return <Section id="clients" title={t("title")} />;
}
