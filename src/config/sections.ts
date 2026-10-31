/**
 * Order of the landing sections (approved structure):
 * Hero → Task Selector → Services → Client Logos → Cases → Why Sparrow → Process → Lead Form
 *
 * `id` is the DOM anchor. `messageKey` is the key under `sections.*` in messages.
 * `inNav` controls whether the section appears in the header navigation.
 */
export const sections = [
  { id: "hero", messageKey: "hero", inNav: false },
  { id: "task-selector", messageKey: "taskSelector", inNav: false },
  { id: "services", messageKey: "services", inNav: true },
  { id: "clients", messageKey: "clients", inNav: false },
  { id: "cases", messageKey: "cases", inNav: true },
  { id: "why-sparrow", messageKey: "whySparrow", inNav: true },
  { id: "process", messageKey: "process", inNav: true },
  { id: "contact", messageKey: "leadForm", inNav: true },
] as const;

export type SectionId = (typeof sections)[number]["id"];
export type SectionMessageKey = (typeof sections)[number]["messageKey"];

/** Anchor of the lead form section. */
export const LEAD_SECTION_ID = "contact" satisfies SectionId;
