import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        warnings:
          "border-transparent bg-amber-500 text-primary-foreground hover:bg-amber-500/80",
        info:
          "border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-500/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  capitalize?: boolean, // Add an aria-label attribute with the button's text for screen readers. Default is true.
}

function Badge({ className, capitalize = false, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), { capitalize: capitalize }, className)}{...props} />
  )
}

export { Badge, badgeVariants }
