import * as React from "react"
import { cn } from "@/lib/utils"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-xs font-semibold uppercase tracking-wide leading-none",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
