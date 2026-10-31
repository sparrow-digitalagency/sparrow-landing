import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-page px-gutter md:px-8", className)}
      {...props}
    />
  );
}
