import { Link } from 'react-router-dom'
import { ArrowLeft, BrainCircuit } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * AuthSplitLayout — shared shell for the standalone login screens (Advisor,
 * Executive). Split panel: brand/marketing on the left, the actual login
 * form (passed as children) centered on the right. Rendered outside
 * AppShell — logins are their own screen, not nested in any actor's dashboard.
 */
export default function AuthSplitLayout({ accentClassName, eyebrow, headline, subheadline, features, footnote, children }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface-bg lg:flex-row">
      {/* Marketing panel */}
      <div className={cn('relative hidden flex-col justify-between overflow-hidden p-10 text-white lg:flex lg:w-[44%]', accentClassName)}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        />

        <div className="relative flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-control bg-white/15 backdrop-blur-sm">
            <BrainCircuit className="size-5" strokeWidth={2.25} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold">Enrollment Intelligence</p>
            <p className="text-[11px] text-white/70">{eyebrow}</p>
          </div>
        </div>

        <div className="relative">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{headline}</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">{subheadline}</p>

          <div className="mt-8 space-y-3">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-control bg-white/15">
                  <f.icon className="size-4" strokeWidth={2.25} />
                </span>
                <span className="text-sm font-medium text-white/90">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-[11px] leading-relaxed text-white/60">{footnote}</p>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 flex-col">
        <div className="px-6 pt-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-surface-mute hover:text-surface-ink"
          >
            <ArrowLeft className="size-3.5" /> Về trang chủ
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
