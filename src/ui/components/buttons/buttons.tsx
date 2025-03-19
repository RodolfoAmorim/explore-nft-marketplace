import { cn } from '@/app/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  'flex items-center justify-center gap-4 rounded px-4 py-3 text-base font-semibold leading-relaxed tracking-wide ',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient shadow-button hover:opacity-90 hover:shadow-none transition-all',
        secondary:
          'relative bg-gray-900 transition-colors hover:bg-gray-800 after:absolute after:-inset-px after:-z-10 after:rounded after:bg-gradient',
        white:
          'bg-gray-100 text-blue-500 transition-colors hover:bg-blue-300 hover:text-white',
      },
      size: {
        sm: 'h-8',
        md: 'h-12',
        lg: 'h-12 xl:h-16 xl:text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Buttons = React.forwardRef<HTMLButtonElement, ButtonsProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Buttons.displayName = 'Buttons'
