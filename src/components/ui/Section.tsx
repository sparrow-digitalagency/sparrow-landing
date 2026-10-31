import type { ReactNode } from "react";
import type { SectionId } from "@/config/sections";
import { Container } from "./Container";
import { cn } from "./cn";

type SectionProps = {
  id: SectionId;
  title: string;
  /** Visually hide the heading but keep it for screen readers / document outline. */
  hideTitle?: boolean;
  /** Use `h1` for the first (hero) section, `h2` otherwise. */
  as?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
};

/** Structural wrapper for a landing section (anchor + accessible heading). */
export function Section({
  id,
  title,
  hideTitle = false,
  as: Heading = "h2",
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-b border-line py-section", className)}
    >
      <Container>
        <Heading
          id={headingId}
          className={cn(
            "font-display text-3xl font-semibold tracking-tight md:text-5xl",
            hideTitle && "sr-only",
          )}
        >
          {title}
        </Heading>
        {children}
      </Container>
    </section>
  );
}
