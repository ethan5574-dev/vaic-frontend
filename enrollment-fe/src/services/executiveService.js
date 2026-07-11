import { request } from './client'

// ForecastInsightsPage calls updateInsightStatus(id, 'resolved');
// InsightStatus enum on the backend is 'Open' | 'Resolved'.
const INSIGHT_STATUS_MAP = { resolved: 'Resolved', open: 'Open' }

/**
 * getExecutiveKpi — UC-09 "Xem KPI tổng quan tuyển sinh"
 * GET /api/v1/executive/kpi?range=YTD
 * returns: { conversionRate, enrollmentYTD, revenueYTD: null, cac: null,
 *   comparedToTarget: { conversionRate: { target, delta } } }
 * revenueYTD/cac are always null — no TuitionFee/MarketingSpend entity exists.
 */
export async function getExecutiveKpi(range = 'YTD') {
  return request('/executive/kpi', { params: { range }, auth: 'executive' })
}

/**
 * getFunnel — UC-10 "Xem phễu tuyển sinh & phân tích drop-off"
 * GET /api/v1/executive/funnel?range=YTD&program=&region=
 * returns: { stages: [{ name, count, conversionPct, needsAttention }] }
 * conversionPct is already 0-100. needsAttention flags drop-off > 30%.
 */
export async function getFunnel(range = 'YTD', filters = {}) {
  return request('/executive/funnel', { params: { range, ...filters }, auth: 'executive' })
}

/**
 * getForecast — UC-11 "Xem dự báo doanh thu & nhập học"
 * GET /api/v1/executive/forecast?months=12
 * returns: { forecast: [{ month, enrollment, revenue: null, lowerBound, upperBound }], confidence, preliminary }
 * Stub model (see BACKEND_PLAN.md Phase 4) — confidence is always 0.5, so
 * preliminary is always true.
 */
export async function getForecast(months = 12) {
  return request('/executive/forecast', { params: { months }, auth: 'executive' })
}

/**
 * getInsights — UC-12 "Xem cảnh báo & khuyến nghị AI"
 * GET /api/v1/executive/insights?priority=
 * returns: [{ id, title, explanation, priority, status, category }]
 */
export async function getInsights(priority) {
  return request('/executive/insights', { params: { priority }, auth: 'executive' })
}

/**
 * updateInsightStatus — UC-12 mark-as-handled action
 * PATCH /api/v1/executive/insights/{id}
 */
export async function updateInsightStatus(insightId, status) {
  return request(`/executive/insights/${insightId}`, {
    method: 'PATCH',
    auth: 'executive',
    body: { status: INSIGHT_STATUS_MAP[status] ?? status },
  })
}
