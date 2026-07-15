import { Sparkles, LayoutDashboard } from 'lucide-react'

/**
 * Single source of truth for the app's IA. Sidebar + Router stay in sync
 * without duplicating route strings — add a module here, then wire its
 * routes in App.jsx. Each module is rendered by its own AppShell instance
 * (see App.jsx), never a shared switcher.
 */
export const MODULES = [
  {
    id: 'example',
    label: 'Example Module',
    shortLabel: 'Example',
    description: 'Module mẫu',
    icon: Sparkles,
    accent: 'primary',
    basePath: '/example',
    pages: [
      {
        path: '/example',
        label: 'Trang mẫu',
        icon: Sparkles,
      },
      {
        path: '/example/dashboard',
        label: 'Bảng điều khiển',
        icon: LayoutDashboard,
      },
    ],
  },
]

export const [EXAMPLE_MODULE] = MODULES

export const DEFAULT_PATH = EXAMPLE_MODULE.pages[0].path
