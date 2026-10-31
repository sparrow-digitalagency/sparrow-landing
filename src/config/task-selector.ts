import type { ServiceId } from "./services";

/**
 * Task Selector ("С какой задачей вам помочь?").
 *
 * Each option leads the visitor quickly to the relevant offer (service block)
 * or to the lead form with a preselected request type.
 */
export type TaskTarget =
  /** Scroll to the service block on the landing. */
  | { kind: "service"; service: ServiceId }
  /** Ask a follow-up choice (used for "Need advertising"). */
  | { kind: "choice"; choices: readonly TaskChoice[] }
  /** Go straight to the lead form with a general / consultation request. */
  | { kind: "lead"; intent: "consultation" };

export type TaskChoice =
  | { id: string; messageKey: string; kind: "service"; service: ServiceId }
  | {
      id: string;
      messageKey: string;
      kind: "lead";
      intent: "ads-consultation";
    };

export type TaskOption = {
  id: string;
  /** Key under `taskSelector.options.*` in `src/messages/*.json`. */
  messageKey: string;
  target: TaskTarget;
};

export const taskOptions = [
  {
    id: "website",
    messageKey: "website",
    target: { kind: "service", service: "websites" },
  },
  {
    id: "ads",
    messageKey: "ads",
    target: {
      kind: "choice",
      choices: [
        {
          id: "meta-ads",
          messageKey: "metaAds",
          kind: "service",
          service: "meta-ads",
        },
        {
          id: "google-ads",
          messageKey: "googleAds",
          kind: "service",
          service: "google-ads",
        },
        {
          id: "ads-consultation",
          messageKey: "adsConsultation",
          kind: "lead",
          intent: "ads-consultation",
        },
      ],
    },
  },
  {
    id: "social",
    messageKey: "social",
    target: { kind: "service", service: "smm" },
  },
  {
    id: "search",
    messageKey: "search",
    target: { kind: "service", service: "seo-geo" },
  },
  {
    id: "turnkey",
    messageKey: "turnkey",
    target: { kind: "service", service: "full-service-digital" },
  },
  {
    id: "consultation",
    messageKey: "consultation",
    target: { kind: "lead", intent: "consultation" },
  },
] as const satisfies readonly TaskOption[];

export type TaskOptionItem = (typeof taskOptions)[number];
export type TaskChoiceItem = Extract<
  TaskOptionItem["target"],
  { kind: "choice" }
>["choices"][number];
