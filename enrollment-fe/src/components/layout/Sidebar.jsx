import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils'

const ACCENT_TEXT = {
  primary: 'text-primary-600',
  teal: 'text-teal-600',
  aqua: 'text-primary-600',
}
const ACCENT_BG = {
  primary: 'bg-primary-50',
  teal: 'bg-teal-50',
  aqua: 'bg-aqua-100',
}
const ACCENT_BAR = {
  primary: 'bg-primary-500',
  teal: 'bg-teal-500',
  aqua: 'bg-aqua-400',
}

/** Sidebar — page-level navigation for the currently active module. */
export default function Sidebar({ module }) {
  return (
    <aside className="sticky top-24 hidden w-60 shrink-0 self-start px-4 pb-6 lg:block">
      <div className="glass-panel-flat p-3">
        <div className="px-2.5 pb-3 pt-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-surface-faint">Module</p>
          <p className="mt-0.5 text-sm font-extrabold text-surface-ink">{module.label}</p>
          <p className="text-[11px] text-surface-mute">{module.description}</p>
        </div>
        <nav className="flex flex-col gap-1">
          {module.pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                cn(
                  'group relative flex items-center gap-2.5 rounded-control px-2.5 py-2.5 text-sm font-semibold transition-colors',
                  isActive
                    ? cn(ACCENT_TEXT[module.accent], ACCENT_BG[module.accent])
                    : 'text-surface-mute hover:bg-surface-bgAlt hover:text-surface-ink',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className={cn('absolute left-0 h-5 w-[3px] rounded-full', ACCENT_BAR[module.accent])} />
                  )}
                  <page.icon className="size-4 shrink-0" strokeWidth={2.25} />
                  <span className="flex-1 truncate">{page.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="glass-panel-flat mt-3 p-4">
        <p className="text-[11px] font-bold text-surface-ink">Cần trợ giúp?</p>
        <p className="mt-1 text-[11px] leading-relaxed text-surface-mute">
          Xem lại SOP Use Case &amp; User Story để đối chiếu quy trình nghiệp vụ chuẩn.
        </p>
      </div>
    </aside>
  )
}
