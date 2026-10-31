/**
 * Single source of truth for the six service directions of the landing.
 *
 * Everything that lists services (ServicesSection, Task Selector, navigation,
 * lead-form preselection, analytics) must read from this array.
 *
 * Branding & Design is intentionally NOT a standalone direction. It may only be
 * mentioned in copy as part of complex work (e.g. Full-service Digital, Websites).
 *
 * Stage 1 is a single landing page: services are sections of that page
 * (anchors), not separate routes. Dedicated ad landing pages can be added later
 * by reusing this config without changing existing URLs.
 */
export type ServiceDefinition = {
  /** Stable id. Used as the `?service=` value, the analytics value and the lead value. */
  id: string;
  /** Anchor of the service block on the landing page. */
  anchor: string;
  /** Key under `services.*` in `src/messages/*.json`. */
  messageKey: string;
  /** Visually highlighted (accent) direction. */
  featured: boolean;
};

export const services = [
  {
    id: "websites",
    anchor: "websites",
    messageKey: "websites",
    featured: false,
  },
  {
    id: "meta-ads",
    anchor: "meta-ads",
    messageKey: "metaAds",
    featured: false,
  },
  {
    id: "google-ads",
    anchor: "google-ads",
    messageKey: "googleAds",
    featured: false,
  },
  { id: "smm", anchor: "smm", messageKey: "smm", featured: false },
  { id: "seo-geo", anchor: "seo-geo", messageKey: "seoGeo", featured: false },
  {
    id: "full-service-digital",
    anchor: "full-service-digital",
    messageKey: "fullServiceDigital",
    featured: true,
  },
] as const satisfies readonly ServiceDefinition[];

export type Service = (typeof services)[number];
export type ServiceId = Service["id"];
export type ServiceMessageKey = Service["messageKey"];

export const serviceIds: readonly ServiceId[] = services.map((s) => s.id);

export function isServiceId(value: unknown): value is ServiceId {
  return (
    typeof value === "string" &&
    (serviceIds as readonly string[]).includes(value)
  );
}

export function getService(id: ServiceId): Service {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}
