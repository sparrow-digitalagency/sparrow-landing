import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/** FAQ (4–6 questions) before the lead form. Structural placeholder — content: PR 2.3. */
export function Faq() {
  const t = useTranslations("sections.faq");
  return <Section id="faq" title={t("title")} />;
}
