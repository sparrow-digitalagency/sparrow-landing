import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

/**
 * Lead form section (anchor `#contact`).
 *
 * Stage 1: placeholder only — no form, no submission, no integrations.
 * Stage 2: the form reads the preselected intent from `?service=`
 * (see `src/lib/lead/intent.ts`) and posts to a server route that delivers the
 * lead to email + Telegram.
 */
export function LeadForm() {
  const t = useTranslations("sections.leadForm");

  return (
    <Section id="contact" surface="inverse" title={t("title")}>
      <p className="mt-6 text-white/75">{t("placeholder")}</p>
    </Section>
  );
}
