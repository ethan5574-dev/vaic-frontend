import {
  UserRoundPlus,
  MessagesSquare,
  FileClock,
  ListFilter,
  Gauge,
  BarChart3,
  Compass,
  Sparkles,
  GraduationCap,
  Headset,
  LineChart,
} from 'lucide-react'

/**
 * Single source of truth for the 3-module IA of the platform.
 * Mirrors §6.2 / §7 of the SOP: Admission Portal, Advisor Dashboard, Executive Dashboard.
 * Each module groups the UC pages that belong to it, so Sidebar + Router + Breadcrumbs
 * stay in sync without duplicating route strings.
 */
export const MODULES = [
  {
    id: 'admission',
    label: 'Admission Portal',
    shortLabel: 'Admission',
    description: 'Học sinh & Phụ huynh',
    icon: GraduationCap,
    accent: 'primary',
    basePath: '/admission',
    pages: [
      {
        path: '/admission/dang-ky',
        label: 'Đăng ký tư vấn',
        ucRef: 'UC-01',
        icon: UserRoundPlus,
      },
      {
        path: '/admission/tu-van-ai',
        label: 'Tư vấn AI',
        ucRef: 'UC-02',
        icon: MessagesSquare,
      },
      {
        path: '/admission/ho-so',
        label: 'Hồ sơ & Offer',
        ucRef: 'UC-03 / UC-04',
        icon: FileClock,
      },
    ],
  },
  {
    id: 'advisor',
    label: 'Advisor Dashboard',
    shortLabel: 'Advisor',
    description: 'Tư vấn viên tuyển sinh',
    icon: Headset,
    accent: 'teal',
    basePath: '/advisor',
    pages: [
      {
        path: '/advisor/leads',
        label: 'Hàng đợi Lead',
        ucRef: 'UC-05 / UC-06 / UC-07',
        icon: ListFilter,
      },
      {
        path: '/advisor/hieu-suat',
        label: 'Hiệu suất cá nhân',
        ucRef: 'UC-08',
        icon: Gauge,
      },
    ],
  },
  {
    id: 'executive',
    label: 'Executive Dashboard',
    shortLabel: 'Executive',
    description: 'Ban Giám đốc',
    icon: LineChart,
    accent: 'aqua',
    basePath: '/executive',
    pages: [
      {
        path: '/executive/tong-quan',
        label: 'Tổng quan KPI',
        ucRef: 'UC-09 / UC-10',
        icon: BarChart3,
      },
      {
        path: '/executive/du-bao',
        label: 'Dự báo & AI Insight',
        ucRef: 'UC-11 / UC-12',
        icon: Sparkles,
      },
    ],
  },
]

export const DEFAULT_PATH = MODULES[0].pages[0].path

export function findModuleByPath(pathname) {
  return MODULES.find((m) => pathname.startsWith(m.basePath)) ?? MODULES[0]
}

export function findPageByPath(pathname) {
  for (const mod of MODULES) {
    const page = mod.pages.find((p) => p.path === pathname)
    if (page) return { module: mod, page }
  }
  return { module: MODULES[0], page: MODULES[0].pages[0] }
}

export const COMPASS_ICON = Compass
