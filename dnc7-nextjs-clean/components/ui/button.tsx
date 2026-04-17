import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base: projenin tasarım tokenlarıyla uyumlu
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Proje ana CTA — .cta-main karşılığı
        default:
          "bg-[var(--accent)] text-white hover:bg-[var(--accentd)] hover:-translate-y-0.5 shadow-sm hover:shadow-lg",
        // İkincil ghost — .cta-sec / .btn-ghost karşılığı
        outline:
          "border-2 border-[var(--border)] text-[var(--text)] hover:border-black/30 hover:bg-black/5",
        // Destructive
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Ghost — nav linkleri vb.
        ghost:
          "hover:bg-black/6 text-[var(--text2)]",
        // Link
        link: "text-[var(--accent)] underline-offset-4 hover:underline",
        // Dark footer
        secondary:
          "bg-white/10 border border-white/20 text-white hover:bg-white/20",
      },
      size: {
        default: "h-14 min-h-[56px] px-8 py-4 text-base",
        sm:      "h-11 min-h-[44px] px-5 py-2.5 text-sm",
        lg:      "h-16 min-h-[64px] px-10 py-5 text-lg",
        icon:    "h-11 w-11 min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
