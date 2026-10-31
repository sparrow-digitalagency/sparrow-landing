import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/** Structural placeholder. Content and design: Stage 2. */
export function WhySparrow() {
  const t = useTranslations("sections.whySparrow");
  return <Section id="why-sparrow" title={t("title")} />;
}
