import { cn } from "./cn";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg" | "sm";

/**
 * Button styles (used on <a>/<Link> and <button>).
 * - primary: black pill, white text (lime arrow icon inside)
 * - secondary: text link with thick underline (lime on hover)
 * - outline: thin border pill (chips, tertiary actions)
 */
export function buttonClass(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-3 font-semibold transition-colors duration-200 select-none",
    variant === "primary" &&
      "rounded-pill bg-black text-white hover:bg-ink-700 [&>svg]:text-lime",
    variant === "secondary" &&
      "min-h-11 underline decoration-2 underline-offset-[7px] hover:decoration-lime",
    variant === "outline" &&
      "rounded-pill border-line-strong border bg-white hover:border-black",
    variant !== "secondary" && size === "sm" && "h-11 px-5 text-sm",
    variant !== "secondary" && size === "md" && "h-14 px-7 text-base",
    variant !== "secondary" && size === "lg" && "h-15 px-8 text-[1.0625rem]",
    variant === "secondary" && "text-base lg:text-[1.0625rem]",
    className,
  );
}
