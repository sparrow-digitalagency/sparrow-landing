import Image from "next/image";
import { media } from "@/config/media";
import { cn } from "@/components/ui/cn";

/**
 * Hero image that dissolves into the page background.
 * While `media.hero.src` is null, a TEMPORARY neutral image is rendered
 * (decorative, hidden from assistive tech).
 */
export function HeroMedia({
  alt,
  variant,
  className,
}: {
  alt: string;
  variant: "desktop" | "mobile";
  className?: string;
}) {
  const fade =
    variant === "desktop" ? "hero-media-fade" : "hero-media-fade-mobile";
  const { src, width, height } = media.hero;

  if (!src) {
    return (
      <div
        aria-hidden="true"
        data-placeholder="hero"
        className={cn("hero-placeholder", fade, className)}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", fade, className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={variant === "desktop"}
        sizes={variant === "desktop" ? "40vw" : "100vw"}
        className="size-full object-cover"
      />
    </div>
  );
}
