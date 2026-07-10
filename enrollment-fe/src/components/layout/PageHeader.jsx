import Badge from '../ui/Badge'
import { cn } from '../../lib/utils'

/** PageHeader — title + description + UC reference badge + right-aligned actions slot. */
export default function PageHeader({ title, description, ucRef, actions, className }) {
  return (
    <div className={cn('mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div>
        {ucRef && (
          <Badge tone="primary" className="mb-2">
            {ucRef}
          </Badge>
        )}
        <h1 className="text-2xl font-extrabold tracking-tight text-surface-ink">{title}</h1>
        {description && <p className="mt-1 max-w-2xl text-sm text-surface-mute">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  )
}
