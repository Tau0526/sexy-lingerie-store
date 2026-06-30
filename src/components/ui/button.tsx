import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium tracking-[0.08em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "silk-shimmer moonlite-button-primary",
        destructive:
          "silk-shimmer moonlite-button-primary",
        outline:
          "moonlite-button-secondary",
        secondary:
          "moonlite-button-secondary bg-moonlite-card/72",
        ghost: "text-moonlite-espresso hover:bg-moonlite-cream/70 hover:text-moonlite-bronze",
        link: "moonlite-link h-auto rounded-none px-0 py-0 text-moonlite-espresso",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4 text-xs",
        lg: "h-[52px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
