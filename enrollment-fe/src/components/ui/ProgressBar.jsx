import { cn } from '../../lib/utils'

const BAR_TONES = {
  primary: 'bg-primary-500',
  teal: 'bg-teal-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
}

/** ProgressBar — thin bar used for funnel steps, confidence, capacity. */
export function ProgressBar({ value, tone = 'primary', className, trackClassName }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-pill bg-surface-bgAlt', trackClassName, className)}>
      <div
        className={cn('h-full rounded-pill transition-[width] duration-500', BAR_TONES[tone])}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

/** Avatar — initials-based avatar, no external image dependency needed. */
export function Avatar({ name, size = 'md', className }) {
  const initials = (name || '?')
    .split(' ')
    .map((p) => p[0])
    .slice(-2)
    .join('')
    .toUpperCase()
  const sizes = { sm: 'size-7 text-[10px]', md: 'size-9 text-xs', lg: 'size-12 text-sm' }
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 font-bold text-white',
        sizes[size],
        className,
      )}
    >
      {initials}
    </span>
  )
}
