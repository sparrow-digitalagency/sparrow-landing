import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/config/services";
import { Section } from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/button";
import { cn } from "@/components/ui/cn";
import { leadHref } from "@/lib/lead/intent";

/**
 * Services ("ServicesGrid") — structural skeleton of the six directions.
 * Each direction has its own anchor and a CTA to the lead form with the
 * service preselected. The premium editorial layout is designed in Stage 2
 * (not necessarily a grid of six identical cards).
 */
export function ServicesSection() {
  const t = useTranslations();

  return (
    <Section id="services" surface="muted" title={t("sections.services.title")}>
      <ol className="mt-12 flex flex-col">
        {services.map((service, index) => (
          <li
            key={service.id}
            id={service.anchor}
            data-service={service.id}
            className={cn(
              "flex scroll-mt-20 flex-col gap-4 border-t border-line py-8 md:flex-row md:items-baseline md:justify-between",
              service.featured &&
                "rounded-card border-0 bg-accent px-6 text-on-accent",
            )}
          >
            <div className="flex items-baseline gap-6">
              <span className="text-sm tabular-nums opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold md:text-4xl">
                  {t(`services.${service.messageKey}.name`)}
                </h3>
                <p
                  className={cn(
                    "mt-2 max-w-xl",
                    service.featured ? "opacity-80" : "text-content-muted",
                  )}
                >
                  {t(`services.${service.messageKey}.summary`)}
                </p>
              </div>
            </div>
            <Link
              href={leadHref(service.id)}
              className={
                service.featured
                  ? "rounded-pill bg-black px-6 py-3 text-sm font-semibold text-white"
                  : buttonClass("outline", "sm")
              }
            >
              {t("common.ctaService")}
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
