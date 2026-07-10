import { cn } from '../../lib/utils'

/** Tabs — underline-style tab navigation within a page/panel. items: [{ value, label, icon? }] */
export default function Tabs({ items, value, onChange, className }) {
  return (
    <div className={cn('flex items-center gap-1 border-b border-surface-line/80', className)}>
      {items.map((item) => {
        const active = item.value === value
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              'relative flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold transition-colors',
              active ? 'text-primary-600' : 'text-surface-mute hover:text-surface-ink',
            )}
          >
            {item.icon && <item.icon className="size-3.5" />}
            {item.label}
            {active && <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-primary-500" />}
          </button>
        )
      })}
    </div>
  )
}
