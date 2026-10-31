import { isServiceId, type ServiceId } from "@/config/services";
import { LEAD_SECTION_ID } from "@/config/sections";

/**
 * Lead intent = what the visitor wants to request. It is passed to the lead form
 * through the URL (`/?service=meta-ads#contact`), so the form (Stage 2) can
 * preselect it and analytics can attribute the lead.
 */
export type LeadIntent = ServiceId | "consultation" | "ads-consultation";

export const LEAD_INTENT_PARAM = "service";

const extraIntents = ["consultation", "ads-consultation"] as const;

export function isLeadIntent(value: unknown): value is LeadIntent {
  return (
    isServiceId(value) ||
    (typeof value === "string" &&
      (extraIntents as readonly string[]).includes(value))
  );
}

/** Parses the `?service=` value; unknown values are ignored. */
export function parseLeadIntent(
  value: string | null | undefined,
): LeadIntent | null {
  return isLeadIntent(value) ? value : null;
}

/** Href (for the localized `Link`) to the lead form with a preselected intent. */
export function leadHref(intent: LeadIntent) {
  return {
    pathname: "/" as const,
    query: { [LEAD_INTENT_PARAM]: intent },
    hash: LEAD_SECTION_ID,
  };
}

/** Href to a service block on the landing page. */
export function serviceSectionHref(anchor: string) {
  return { pathname: "/" as const, hash: anchor };
}
