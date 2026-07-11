import {
  UserRoundPlus,
  MessagesSquare,
  FileClock,
  ListFilter,
  Gauge,
  BarChart3,
  Sparkles,
  GraduationCap,
  Headset,
  LineChart,
} from 'lucide-react'

/**
 * Single source of truth for the 3-module IA of the platform.
 * Mirrors §6.2 / §7 of the SOP: Admission Portal, Advisor Dashboard, Executive Dashboard.
 * Each module groups the UC pages that belong to it, so Sidebar + Router stay in sync
 * without duplicating route strings.
 *
 * The 3 modules are separate actors (public visitor, advisor, executive) and never
 * share a screen — each is rendered by its own AppShell instance (see App.jsx), not
 * a shared switcher. Import the named module you need, not MODULES[i] by index.
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

export const [ADMISSION_MODULE, ADVISOR_MODULE, EXECUTIVE_MODULE] = MODULES

export const DEFAULT_PATH = ADMISSION_MODULE.pages[0].path
