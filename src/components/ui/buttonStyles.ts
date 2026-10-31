import { cn } from "./cn";

type Variant = "accent" | "outline";

/** Class names for link-buttons. Final visual design is part of Stage 2. */
export function buttonStyles(variant: Variant = "accent", className?: string) {
  return cn(
    "rounded-pill inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-colors",
    variant === "accent" && "bg-accent text-on-accent hover:bg-white",
    variant === "outline" &&
      "border-line text-content hover:border-accent hover:text-accent border",
    className,
  );
}
