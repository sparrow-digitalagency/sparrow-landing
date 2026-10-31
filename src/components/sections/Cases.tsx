import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/** Structural placeholder. Content and design: Stage 2. */
export function Cases() {
  const t = useTranslations("sections.cases");
  return <Section id="cases" title={t("title")} />;
}
