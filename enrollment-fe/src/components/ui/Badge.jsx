import { cn } from '../../lib/utils'

const TONES = {
  neutral: 'bg-surface-bgAlt text-surface-mute',
  primary: 'bg-primary-50 text-primary-600',
  teal: 'bg-teal-50 text-teal-700',
  aqua: 'bg-aqua-100 text-primary-700',
  warning: 'bg-warning-50 text-warning-700',
  danger: 'bg-danger-50 text-danger-600',
  success: 'bg-teal-50 text-teal-700',
}

/**
 * Generic pill badge — used for status, rank, priority, module tags.
 * pulse: adds 2 phase-staggered expanding rings (same pill shape/color as the
 * badge itself) for "needs attention now" emphasis — e.g. a Hot-ranked lead.
 */
export default function Badge({ tone = 'neutral', className, children, dot = false, pulse = false, ...props }) {
  const pill = (
    <span
      className={cn(
        'relative inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide',
        TONES[tone],
        className,
      )}
      {...props}
    >
      {dot && <span className={cn('size-1.5 rounded-full', dotColor(tone))} />}
      {children}
    </span>
  )

  if (!pulse) return pill

  return (
    <span className="relative inline-flex">
      <span className={cn('absolute inset-0 rounded-pill animate-pulse-ring', dotColor(tone))} />
      <span className={cn('absolute inset-0 rounded-pill animate-pulse-ring [animation-delay:0.65s]', dotColor(tone))} />
      {pill}
    </span>
  )
}

function dotColor(tone) {
  switch (tone) {
    case 'primary':
      return 'bg-primary-500'
    case 'teal':
    case 'success':
      return 'bg-teal-500'
    case 'aqua':
      return 'bg-aqua-400'
    case 'warning':
      return 'bg-warning-500'
    case 'danger':
      return 'bg-danger-500'
    default:
      return 'bg-surface-faint'
  }
}

/** Maps domain rank values (Hot/Warm/Cold) to a tone, kept here so pages don't repeat the mapping. */
export function rankTone(rank) {
  switch ((rank || '').toLowerCase()) {
    case 'hot':
      return 'danger'
    case 'warm':
      return 'warning'
    case 'cold':
      return 'aqua'
    default:
      return 'neutral'
  }
}

/** Maps insight/alert priority to a tone. */
export function priorityTone(priority) {
  switch ((priority || '').toLowerCase()) {
    case 'critical':
      return 'danger'
    case 'warning':
      return 'warning'
    case 'info':
      return 'aqua'
    default:
      return 'neutral'
  }
}
