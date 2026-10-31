import type { ReactNode } from "react";
import type { SectionId } from "@/config/sections";
import { Container } from "./Container";
import { cn } from "./cn";

type Surface = "default" | "muted" | "inverse";

type SectionProps = {
  id: SectionId;
  title: string;
  surface?: Surface;
  /** Visually hide the heading but keep it for screen readers / document outline. */
  hideTitle?: boolean;
  className?: string;
  children?: ReactNode;
};

const surfaces: Record<Surface, string> = {
  default: "bg-surface text-content",
  muted: "bg-surface-muted text-content",
  inverse: "bg-surface-inverse text-content-inverse",
};

/** Structural wrapper for a landing section (anchor + accessible h2). */
export function Section({
  id,
  title,
  surface = "default",
  hideTitle = false,
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 lg:py-section", surfaces[surface], className)}
    >
      <Container>
        <h2
          id={headingId}
          className={cn(
            "font-display text-[2rem] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-5xl",
            hideTitle && "sr-only",
          )}
        >
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
