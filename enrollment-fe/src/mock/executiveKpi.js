/** Mirrors GET /api/v1/executive/kpi?range=YTD (UC-09). */
export const MOCK_EXECUTIVE_KPI = {
  conversionRate: 0.284,
  enrollmentYTD: 1247,
  revenueYTD: 58200000000,
  cac: 4200000,
  comparedToTarget: -0.03,
}

/** Mirrors GET /api/v1/executive/funnel?range=YTD (UC-10). */
export const MOCK_FUNNEL = {
  stages: [
    { name: 'Lead', count: 5000, conversionPct: 1 },
    { name: 'Đã tư vấn', count: 3400, conversionPct: 0.68 },
    { name: 'Nộp hồ sơ', count: 2500, conversionPct: 0.735 },
    { name: 'Nhận Offer', count: 1620, conversionPct: 0.648 },
    { name: 'Nhập học', count: 1247, conversionPct: 0.77 },
  ],
}
// Flag the step whose stage-over-stage drop exceeds 30% per Business Rule in UC-10.
MOCK_FUNNEL.stages = MOCK_FUNNEL.stages.map((s) => ({
  ...s,
  dropAlert: s.conversionPct < 0.7 && s.conversionPct !== 1,
}))

export const MOCK_KPI_TREND = [
  { label: 'T1', conversionRate: 0.24 },
  { label: 'T2', conversionRate: 0.255 },
  { label: 'T3', conversionRate: 0.26 },
  { label: 'T4', conversionRate: 0.27 },
  { label: 'T5', conversionRate: 0.265 },
  { label: 'T6', conversionRate: 0.29 },
  { label: 'T7', conversionRate: 0.284 },
]
