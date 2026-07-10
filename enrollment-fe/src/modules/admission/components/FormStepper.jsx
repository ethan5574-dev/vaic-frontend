import { Check } from 'lucide-react'
import { cn } from '../../../lib/utils'

/** FormStepper — horizontal progress indicator for the 3-section Lead form. */
export default function FormStepper({ steps, current }) {
  return (
    <div className="flex items-center">
      {steps.map((step, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={cn(
                  'flex size-8 items-center justify-center rounded-full text-xs font-bold transition-colors',
                  done && 'bg-primary-500 text-white',
                  active && !done && 'bg-primary-500 text-white shadow-glass-sm',
                  !active && !done && 'bg-surface-bgAlt text-surface-faint',
                )}
              >
                {done ? <Check className="size-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  'hidden text-[11px] font-semibold sm:block',
                  active || done ? 'text-surface-ink' : 'text-surface-faint',
                )}
              >
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn('mx-2 h-[2px] flex-1 rounded-full', done ? 'bg-primary-500' : 'bg-surface-line')} />
            )}
          </div>
        )
      })}
    </div>
  )
}
