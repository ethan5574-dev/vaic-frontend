import clsx from 'clsx'

/** Tiny classnames helper — wraps clsx so components can compose Tailwind classes safely. */
export function cn(...args) {
  return clsx(...args)
}

/** Format a VND-ish compact currency string, e.g. 58200000000 -> "58.2 tỷ" */
export function formatVndCompact(value) {
  if (value === null || value === undefined) return '—'
  const n = Number(value)
  if (Number.isNaN(n)) return String(value)
  if (Math.abs(n) >= 1e9) return `${(n / 1e9).toFixed(1)} tỷ`
  if (Math.abs(n) >= 1e6) return `${(n / 1e6).toFixed(1)} tr`
  return n.toLocaleString('vi-VN')
}

/** Format a plain number with Vietnamese thousands separators. */
export function formatNumber(value) {
  if (value === null || value === undefined) return '—'
  return Number(value).toLocaleString('vi-VN')
}

/** Format a 0..1 ratio as a percentage string, e.g. 0.284 -> "28.4%" */
export function formatPercent(value, digits = 1) {
  if (value === null || value === undefined) return '—'
  return `${(Number(value) * 100).toFixed(digits)}%`
}

/** Format an ISO date string as dd/mm/yyyy (vi-VN). */
export function formatDate(value) {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return d.toLocaleDateString('vi-VN')
}
