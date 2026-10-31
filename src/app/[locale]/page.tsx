import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { sections, type SectionId } from "@/config/sections";
import { Hero } from "@/components/sections/Hero";
import { TaskSelector } from "@/components/sections/TaskSelector";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Cases } from "@/components/sections/Cases";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { WhySparrow } from "@/components/sections/WhySparrow";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { LeadForm } from "@/components/sections/LeadForm";

/** Section id → component. Order is defined in `src/config/sections.ts`. */
const sectionComponents: Record<SectionId, () => React.ReactNode> = {
  hero: Hero,
  "task-selector": TaskSelector,
  services: ServicesSection,
  clients: ClientLogos,
  cases: Cases,
  consultation: ConsultationCta,
  "why-sparrow": WhySparrow,
  process: Process,
  faq: Faq,
  contact: LeadForm,
};

export default async function LandingPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      {sections.map(({ id }) => {
        const Section = sectionComponents[id];
        return <Section key={id} />;
      })}
    </>
  );
}
