import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * Drawer — right-side slide-over glass panel for detail/quick-action views
 * (e.g. ghi nhận tương tác Lead, chi tiết insight).
 */
export default function Drawer({ open, onClose, title, subtitle, children, footer, className }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Đóng"
        onClick={onClose}
        className="absolute inset-0 bg-primary-900/20 backdrop-blur-[2px]"
      />
      <div
        className={cn(
          'relative flex h-full w-full max-w-md flex-col border-l border-white/70 bg-white/90 shadow-glass-lift backdrop-blur-xl',
          'animate-[slide-in_0.2s_ease-out]',
          className,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-surface-line/70 px-6 py-5">
          <div>
            <h2 className="text-base font-bold text-surface-ink">{title}</h2>
            {subtitle && <p className="mt-0.5 text-xs text-surface-mute">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-control text-surface-mute hover:bg-surface-bgAlt hover:text-surface-ink"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-5">{children}</div>
        {footer && <div className="border-t border-surface-line/70 px-6 py-4">{footer}</div>}
      </div>
    </div>
  )
}
