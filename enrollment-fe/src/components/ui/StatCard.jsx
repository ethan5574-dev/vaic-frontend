import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Card from './Card'
import { cn } from '../../lib/utils'

const ACCENTS = {
  primary: 'text-primary-500 bg-primary-50',
  teal: 'text-teal-600 bg-teal-50',
  aqua: 'text-primary-600 bg-aqua-100',
  warning: 'text-warning-700 bg-warning-50',
  danger: 'text-danger-600 bg-danger-50',
}

/**
 * StatCard — single KPI tile: label, big value, delta vs. previous period, small icon.
 * trend: 'up' | 'down' | undefined — controls arrow + color of the delta chip.
 */
export default function StatCard({
  label,
  value,
  delta,
  trend,
  icon: Icon,
  accent = 'primary',
  hint,
  className,
}) {
  const trendPositive = trend === 'up'
  const trendNegative = trend === 'down'
  return (
    <Card flat className={cn('p-5', className)}>
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold text-surface-mute">{label}</span>
        {Icon && (
          <span className={cn('flex size-8 items-center justify-center rounded-[10px]', ACCENTS[accent])}>
            <Icon className="size-4" strokeWidth={2.25} />
          </span>
        )}
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <span className="text-[26px] font-extrabold leading-none tracking-tight text-surface-ink">
          {value}
        </span>
        {delta !== undefined && delta !== null && (
          <span
            className={cn(
              'mb-0.5 inline-flex items-center gap-0.5 rounded-pill px-1.5 py-0.5 text-[11px] font-bold',
              trendPositive && 'bg-teal-50 text-teal-700',
              trendNegative && 'bg-danger-50 text-danger-600',
              !trendPositive && !trendNegative && 'bg-surface-bgAlt text-surface-mute',
            )}
          >
            {trendPositive && <ArrowUpRight className="size-3" />}
            {trendNegative && <ArrowDownRight className="size-3" />}
            {delta}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-[11px] text-surface-faint">{hint}</p>}
    </Card>
  )
}
