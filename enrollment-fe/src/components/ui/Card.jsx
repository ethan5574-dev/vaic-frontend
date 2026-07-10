import { cn } from '../../lib/utils'

/**
 * Card — glass panel primitive. Compose with Card.Header / Card.Title / Card.Body / Card.Footer.
 */
export default function Card({ className, flat = false, children, ...props }) {
  return (
    <div
      className={cn(flat ? 'glass-panel-flat' : 'glass-panel', 'relative', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 px-6 pt-5 pb-3', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn('text-[15px] font-semibold text-surface-ink tracking-tight', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardSubtitle({ className, children, ...props }) {
  return (
    <p className={cn('text-xs text-surface-mute mt-0.5', className)} {...props}>
      {children}
    </p>
  )
}

export function CardBody({ className, children, ...props }) {
  return (
    <div className={cn('px-6 pb-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('px-6 py-4 border-t border-surface-line/70 flex items-center justify-between', className)} {...props}>
      {children}
    </div>
  )
}
