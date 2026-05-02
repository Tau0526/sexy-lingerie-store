import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium tracking-[0.02em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EADC] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "silk-shimmer border border-[#2A1820] bg-[#2A1820] text-[#F2EADC] hover:border-[#9C7548]/65 hover:bg-[#3D2E26]",
        destructive:
          "silk-shimmer border border-[#2A1820] bg-[#2A1820] text-[#F2EADC] hover:border-[#9C7548]/65 hover:bg-[#3D2E26]",
        outline:
          "border border-[#9C7548]/35 bg-transparent text-[#3D2E26] hover:border-[#9C7548] hover:bg-[#E8DECD]/48 hover:text-[#9C7548]",
        secondary:
          "border border-[#9C7548]/28 bg-[#F2EADC]/70 text-[#3D2E26] hover:border-[#9C7548] hover:bg-[#E8DECD]/58 hover:text-[#9C7548]",
        ghost: "text-[#3D2E26] hover:bg-[#E8DECD]/60 hover:text-[#9C7548]",
        link: "moonlite-link h-auto rounded-none px-0 py-0 text-[#3D2E26]",
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
