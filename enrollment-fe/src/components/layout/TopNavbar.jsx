import { BrainCircuit, Search, Bell, LogOut } from 'lucide-react'
import { Avatar } from '../ui/ProgressBar'
import { cn } from '../../lib/utils'

const ACCENT_BADGE = {
  primary: 'bg-primary-500 text-white shadow-glass-sm',
  teal: 'bg-teal-500 text-white shadow-glass-sm',
  aqua: 'bg-primary-500 text-white shadow-glass-sm',
}

/**
 * TopNavbar — sticky glass bar for a single actor's screen: brand, that
 * actor's module badge, AI status, and (when authenticated) the logged-in
 * user + logout. Each actor (Admission Portal / Advisor / Executive) gets
 * its own AppShell instance — there's no cross-actor switcher here.
 */
export default function TopNavbar({ module, session, onLogout }) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="glass-panel-flat flex h-16 items-center gap-4 px-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5 pr-3">
          <span className="flex size-9 items-center justify-center rounded-control bg-primary-500 text-white shadow-glass-sm">
            <BrainCircuit className="size-5" strokeWidth={2.25} />
          </span>
          <div className="hidden leading-tight sm:block">
            <p className="text-[13px] font-extrabold tracking-tight text-surface-ink">
              Enrollment Intelligence
            </p>
            <p className="text-[10px] font-medium text-surface-faint">AI-Native Multi-Agent Platform</p>
          </div>
        </div>

        <div className="h-8 w-px bg-surface-line/80" />

        {/* Current actor's module — fixed label, not a switcher */}
        <div className="flex flex-1 items-center gap-2 overflow-x-auto scrollbar-thin">
          <span
            className={cn(
              'flex items-center gap-2 whitespace-nowrap rounded-control px-3.5 py-2 text-xs font-bold',
              ACCENT_BADGE[module.accent],
            )}
          >
            <module.icon className="size-4" strokeWidth={2.25} />
            {module.label}
          </span>
        </div>

        <div className="hidden h-8 w-px bg-surface-line/80 md:block" />

        {/* Status badge */}
        <span className="hidden items-center gap-1.5 rounded-pill bg-teal-50 px-3 py-1.5 text-[11px] font-bold text-teal-700 md:inline-flex">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-500 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-teal-500" />
          </span>
          AI Engine hoạt động
        </span>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button className="flex size-9 items-center justify-center rounded-control text-surface-mute hover:bg-surface-bgAlt hover:text-surface-ink">
            <Search className="size-4" />
          </button>
          <button className="relative flex size-9 items-center justify-center rounded-control text-surface-mute hover:bg-surface-bgAlt hover:text-surface-ink">
            <Bell className="size-4" />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-danger-500" />
          </button>

          {session && (
            <>
              <div className="mx-1 h-8 w-px bg-surface-line/80" />
              <span className="hidden items-center gap-2 pl-1 lg:flex">
                <Avatar name={session.email} size="sm" />
                <span className="text-left leading-tight">
                  <span className="block max-w-[160px] truncate text-xs font-bold text-surface-ink">
                    {session.email}
                  </span>
                  <span className="block text-[10px] text-surface-faint">{session.role}</span>
                </span>
              </span>
              <button
                onClick={onLogout}
                title="Đăng xuất"
                className="flex size-9 items-center justify-center rounded-control text-surface-mute hover:bg-danger-50 hover:text-danger-600"
              >
                <LogOut className="size-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
