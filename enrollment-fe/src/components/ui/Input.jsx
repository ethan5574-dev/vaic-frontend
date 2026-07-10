import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const fieldBase =
  'w-full rounded-control border border-surface-line bg-white/80 px-3.5 text-sm text-surface-ink placeholder:text-surface-faint transition-colors focus:border-primary-400 focus:bg-white focus:outline-none disabled:bg-surface-bgAlt disabled:text-surface-faint'

export const Input = forwardRef(function Input({ className, error, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(fieldBase, 'h-11', error && 'border-danger-500 focus:border-danger-500', className)}
      {...props}
    />
  )
})

export const Textarea = forwardRef(function Textarea({ className, error, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(fieldBase, 'min-h-[96px] py-2.5 resize-y', error && 'border-danger-500 focus:border-danger-500', className)}
      {...props}
    />
  )
})

export const Select = forwardRef(function Select({ className, error, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(fieldBase, 'h-11 appearance-none bg-[url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%235B6B7F"><path d="M5.5 7.5l4.5 5 4.5-5z"/></svg>\')] bg-no-repeat bg-[right_0.9rem_center]', error && 'border-danger-500', className)}
      {...props}
    >
      {children}
    </select>
  )
})

/** Field — label + control + helper/error text, keeps forms visually consistent. */
export function Field({ label, hint, error, required, children, className }) {
  return (
    <label className={cn('block', className)}>
      {label && (
        <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-surface-mute">
          {label}
          {required && <span className="text-danger-500">*</span>}
        </span>
      )}
      {children}
      {error ? (
        <span className="mt-1.5 block text-xs font-medium text-danger-600">{error}</span>
      ) : hint ? (
        <span className="mt-1.5 block text-xs text-surface-faint">{hint}</span>
      ) : null}
    </label>
  )
}
