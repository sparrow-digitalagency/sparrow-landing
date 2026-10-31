/**
 * Order of the landing sections (approved structure):
 * Hero → Task Selector → Services → Client Logos → Cases → Consultation CTA →
 * Why Sparrow → Process → FAQ → Lead Form
 *
 * `id` is the DOM anchor. `messageKey` is the key under `sections.*` in messages.
 * `inNav` controls whether the section appears in the header navigation
 * (label: `nav.<messageKey>`).
 */
export const sections = [
  { id: "hero", messageKey: "hero", inNav: false },
  { id: "task-selector", messageKey: "taskSelector", inNav: false },
  { id: "services", messageKey: "services", inNav: true },
  { id: "clients", messageKey: "clients", inNav: false },
  { id: "cases", messageKey: "cases", inNav: false },
  { id: "consultation", messageKey: "consultationCta", inNav: false },
  { id: "why-sparrow", messageKey: "whySparrow", inNav: false },
  { id: "process", messageKey: "process", inNav: true },
  { id: "faq", messageKey: "faq", inNav: true },
  { id: "contact", messageKey: "leadForm", inNav: false },
] as const;

export type SectionId = (typeof sections)[number]["id"];
export type SectionMessageKey = (typeof sections)[number]["messageKey"];
export type NavSection = Extract<(typeof sections)[number], { inNav: true }>;

export const navSections = sections.filter((s): s is NavSection => s.inNav);

/** Anchor of the hero section (used by the mobile sticky CTA). */
export const HERO_SECTION_ID = "hero" satisfies SectionId;

/** Anchor of the lead form section. */
export const LEAD_SECTION_ID = "contact" satisfies SectionId;

/** Anchor of the Task Selector section (secondary hero CTA). */
export const TASK_SECTION_ID = "task-selector" satisfies SectionId;
