import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/** Structural placeholder. Content and design: Stage 2. */
export function Process() {
  const t = useTranslations("sections.process");
  return <Section id="process" surface="muted" title={t("title")} />;
}
