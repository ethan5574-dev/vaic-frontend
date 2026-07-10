import { NavLink } from 'react-router-dom'
import { BrainCircuit, Search, Bell, ChevronDown } from 'lucide-react'
import { MODULES } from '../../config/navigation'
import { Avatar } from '../ui/ProgressBar'
import { cn } from '../../lib/utils'

const ACCENT_ACTIVE = {
  primary: 'bg-primary-500 text-white shadow-glass-sm',
  teal: 'bg-teal-500 text-white shadow-glass-sm',
  aqua: 'bg-primary-500 text-white shadow-glass-sm',
}

/**
 * TopNavbar — sticky glass bar: brand, module switcher (3 module tabs), AI status
 * badge, search, notifications, and user profile.
 */
export default function TopNavbar({ activeModuleId }) {
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

        {/* Module switcher */}
        <nav className="flex flex-1 items-center gap-1 overflow-x-auto scrollbar-thin">
          {MODULES.map((mod) => (
            <NavLink
              key={mod.id}
              to={mod.pages[0].path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 whitespace-nowrap rounded-control px-3.5 py-2 text-xs font-bold transition-colors',
                  isActive || activeModuleId === mod.id
                    ? ACCENT_ACTIVE[mod.accent]
                    : 'text-surface-mute hover:bg-surface-bgAlt hover:text-surface-ink',
                )
              }
            >
              <mod.icon className="size-4" strokeWidth={2.25} />
              {mod.shortLabel}
            </NavLink>
          ))}
        </nav>

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
          <button className="ml-1 flex items-center gap-2 rounded-control py-1.5 pl-1.5 pr-2 hover:bg-surface-bgAlt">
            <Avatar name="Minh Anh Trần" size="sm" />
            <span className="hidden text-left leading-tight lg:block">
              <span className="block text-xs font-bold text-surface-ink">Minh Anh Trần</span>
              <span className="block text-[10px] text-surface-faint">Trưởng phòng Tuyển sinh</span>
            </span>
            <ChevronDown className="hidden size-3.5 text-surface-faint lg:block" />
          </button>
        </div>
      </div>
    </header>
  )
}
