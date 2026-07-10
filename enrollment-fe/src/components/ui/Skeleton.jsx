import { cn } from '../../lib/utils'

/** Skeleton — pulsing placeholder block for loading states. */
export default function Skeleton({ className }) {
  return <div className={cn('animate-pulse rounded-md bg-surface-line/70', className)} />
}
