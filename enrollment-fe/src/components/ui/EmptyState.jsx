import { Inbox } from 'lucide-react'
import { cn } from '../../lib/utils'

/** EmptyState — invitation-to-act placeholder for empty tables/lists/panels. */
export default function EmptyState({ icon: Icon = Inbox, title, description, action, className }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 px-6 py-8 text-center', className)}>
      <span className="flex size-11 items-center justify-center rounded-full bg-surface-bgAlt text-surface-faint">
        <Icon className="size-5" />
      </span>
      <p className="text-sm font-semibold text-surface-ink">{title}</p>
      {description && <p className="max-w-xs text-xs text-surface-mute">{description}</p>}
      {action}
    </div>
  )
}
