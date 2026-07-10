import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/utils'

const VARIANTS = {
  primary:
    'bg-primary-500 text-white shadow-glass-sm hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200',
  secondary:
    'bg-teal-500 text-white shadow-glass-sm hover:bg-teal-600 active:bg-teal-700 disabled:bg-teal-100',
  outline:
    'bg-white/70 text-primary-600 border border-surface-line hover:bg-white hover:border-primary-200 disabled:text-surface-faint',
  ghost:
    'bg-transparent text-surface-mute hover:bg-white/70 hover:text-surface-ink disabled:text-surface-faint',
  danger:
    'bg-danger-500 text-white shadow-glass-sm hover:bg-danger-600 active:bg-danger-700 disabled:bg-danger-100',
}

const SIZES = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-[15px] gap-2',
}

/**
 * Button — the single button primitive for the whole app.
 * Usage: <Button variant="primary" size="md" icon={Plus} loading={isSaving}>Lưu</Button>
 */
const Button = forwardRef(function Button(
  {
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <Component
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-control transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:shadow-none',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="size-4" strokeWidth={2.25} />
      )}
      {children && <span>{children}</span>}
      {!loading && Icon && iconPosition === 'right' && <Icon className="size-4" strokeWidth={2.25} />}
    </Component>
  )
})

export default Button
