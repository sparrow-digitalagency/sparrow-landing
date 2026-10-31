import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/config/services";
import { HERO_SECTION_ID, TASK_SECTION_ID } from "@/config/sections";
import { leadHref, serviceSectionHref } from "@/lib/lead/intent";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeHighlight } from "@/components/ui/LimeHighlight";
import { buttonClass } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/components/ui/cn";
import { HeroMedia } from "./HeroMedia";

/**
 * Hero — Concept A (approved).
 * Large headline left, image right dissolving into the background, one lime
 * accent on the key word, primary CTA (proposal) + secondary (task selector),
 * services strip on #F7F7F3.
 */
export function Hero() {
  const t = useTranslations();

  return (
    <section
      id={HERO_SECTION_ID}
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Desktop image: bleeds to the right edge, dissolves left/bottom. */}
      <div className="absolute top-0 right-0 bottom-[4.5rem] hidden w-[39%] lg:block">
        <HeroMedia
          alt={t("hero.imageAlt")}
          variant="desktop"
          className="size-full"
        />
        <Tagline
          className="absolute bottom-[12%] -left-5 w-[20.5rem]"
          text={t("hero.tagline")}
        />
      </div>

      <Container className="relative pt-10 pb-12 md:pt-16 lg:min-h-[40rem] lg:pt-12 lg:pb-[5.5rem] xl:min-h-[42rem]">
        <div className="lg:w-[58%]">
          <Eyebrow rule>{t("hero.eyebrow")}</Eyebrow>

          <h1
            id="hero-title"
            className="mt-6 font-display font-extrabold md:mt-8 lg:mt-7"
          >
            <span className="block max-w-[47.5rem] text-[1.5rem] leading-[1.15] font-medium tracking-[-0.02em] md:text-[2.25rem] lg:text-[2.25rem] xl:text-[2.5rem] xl:leading-[1.1]">
              {t("hero.setup")}
            </span>
            <span className="hero-punch mt-3 block">
              <span className="block">{t("hero.punchLead")}</span>
              <LimeHighlight className="-ml-[0.12em] inline-block">
                {t("hero.punchAccent")}
              </LimeHighlight>
            </span>
          </h1>

          <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-content-muted md:mt-8 md:text-xl md:leading-normal lg:mt-6">
            {t("hero.subtitle")}
          </p>

          <div className="mt-6 flex flex-col gap-1.5 md:mt-10 md:flex-row md:items-center md:gap-8 lg:mt-8">
            <Link
              href={leadHref("consultation")}
              className={cn(buttonClass("primary", "lg"), "w-full md:w-auto")}
            >
              {t("hero.ctaPrimary")}
              <ArrowRightIcon size={20} strokeWidth={2.2} />
            </Link>
            <Link
              href={{ pathname: "/", hash: TASK_SECTION_ID }}
              className={cn(
                buttonClass("secondary"),
                "justify-center md:justify-start",
              )}
            >
              {t("hero.ctaSecondary")}
              <ArrowDownIcon size={18} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Mobile / tablet image with lime tagline overlapping. */}
      <div className="relative ml-5 md:ml-10 lg:hidden">
        <HeroMedia
          alt={t("hero.imageAlt")}
          variant="mobile"
          className="h-[23.75rem] md:h-[30rem]"
        />
        <Tagline
          className="absolute top-14 -left-5 w-[14.75rem] md:-left-10 md:w-[20rem]"
          text={t("hero.tagline")}
          compact
        />
      </div>

      {/* Services strip. */}
      <nav
        aria-label={t("common.servicesNav")}
        className="relative border-t border-line bg-surface-muted lg:absolute lg:inset-x-0 lg:bottom-0"
      >
        <Container>
          <ul className="flex flex-wrap gap-2 py-5 lg:h-[4.5rem] lg:flex-nowrap lg:items-center lg:justify-between lg:gap-4 lg:py-0">
            {services.map((service, index) => (
              <li key={service.id}>
                <Link
                  href={serviceSectionHref(service.anchor)}
                  className={cn(
                    "flex min-h-11 items-center gap-2.5 font-display text-sm font-bold tracking-[-0.01em] lg:min-h-0 lg:border-0 lg:bg-transparent lg:px-0 lg:text-[1.0625rem]",
                    "border border-line-strong bg-white px-3.5 hover:border-black lg:decoration-2 lg:underline-offset-4 lg:hover:underline",
                    service.featured &&
                      "border-black bg-lime lg:bg-lime lg:px-2.5 lg:py-1",
                  )}
                >
                  <span className="font-sans text-[0.6875rem] font-semibold text-content-subtle tabular-nums lg:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {t(`services.${service.messageKey}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </section>
  );
}

function Tagline({
  text,
  className,
  compact = false,
}: {
  text: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "box-border bg-lime text-on-accent",
        compact ? "px-[1.125rem] py-4" : "p-7 pb-[1.875rem]",
        className,
      )}
    >
      {!compact && (
        <p className="text-xs font-bold tracking-[0.1em] uppercase">
          Sparrow.Agency
        </p>
      )}
      <p
        className={cn(
          "font-display font-bold tracking-[-0.02em]",
          compact
            ? "text-[1.0625rem] leading-[1.2] md:text-xl"
            : "mt-3.5 text-[1.5625rem] leading-[1.15]",
        )}
      >
        {text}
      </p>
    </div>
  );
}
