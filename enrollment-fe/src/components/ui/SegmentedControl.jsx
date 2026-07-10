import { cn } from '../../lib/utils'

/**
 * SegmentedControl — compact single-choice toggle (e.g. week/month/quarter).
 * options: [{ value, label, icon? }]
 */
export default function SegmentedControl({ options, value, onChange, className, size = 'md' }) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex items-center rounded-control bg-surface-bgAlt/80 p-1 border border-surface-line/60',
        className,
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              'relative flex items-center gap-1.5 rounded-[9px] font-semibold transition-all duration-150',
              size === 'sm' ? 'h-7 px-2.5 text-[11px]' : 'h-8 px-3.5 text-xs',
              active
                ? 'bg-white text-primary-600 shadow-glass-sm'
                : 'text-surface-mute hover:text-surface-ink',
            )}
          >
            {opt.icon && <opt.icon className="size-3.5" />}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
