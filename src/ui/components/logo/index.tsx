import { twMerge } from 'tailwind-merge'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <strong
      className={twMerge(
        'z-10 text-2xl font-bold leading-relaxed tracking-tight text-gray-100 xl:text-4xl',
        className,
      )}
    >
      Explorer
    </strong>
  )
}
