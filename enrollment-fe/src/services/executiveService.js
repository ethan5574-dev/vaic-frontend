import { mockRequest } from './client'
import { MOCK_EXECUTIVE_KPI, MOCK_FUNNEL, MOCK_KPI_TREND } from '../mock/executiveKpi'
import { MOCK_FORECAST, MOCK_INSIGHTS } from '../mock/forecastInsights'

/**
 * getExecutiveKpi — UC-09 "Xem KPI tổng quan tuyển sinh"
 * GET /api/v1/executive/kpi?range=YTD
 * returns: { conversionRate, enrollmentYTD, revenueYTD, cac, comparedToTarget }
 */
export async function getExecutiveKpi(range = 'YTD') {
  return mockRequest({ ...MOCK_EXECUTIVE_KPI, trend: MOCK_KPI_TREND })
}

/**
 * getFunnel — UC-10 "Xem phễu tuyển sinh & phân tích drop-off"
 * GET /api/v1/executive/funnel?range=YTD&program=&region=
 * returns: { stages: [{ name, count, conversionPct }] }
 * Business rule: drop-off > 30% at a step is auto-flagged (dropAlert) — see mock/executiveKpi.js
 */
export async function getFunnel(range = 'YTD', filters = {}) {
  return mockRequest(MOCK_FUNNEL)
}

/**
 * getForecast — UC-11 "Xem dự báo doanh thu & nhập học"
 * GET /api/v1/executive/forecast?months=12
 * returns: { forecast: [{ month, enrollment, revenue, lowerBound, upperBound }] }
 * Business rule: if model confidence < 70%, UI must label the chart "dự báo sơ bộ".
 */
export async function getForecast(months = 12) {
  return mockRequest(MOCK_FORECAST)
}

/**
 * getInsights — UC-12 "Xem cảnh báo & khuyến nghị AI"
 * GET /api/v1/executive/insights?priority=
 * returns: [{ insightId, title, priority, explanation, status }]
 */
export async function getInsights(priority) {
  return mockRequest(() =>
    priority ? MOCK_INSIGHTS.filter((i) => i.priority === priority) : MOCK_INSIGHTS,
  )
}

/**
 * updateInsightStatus — UC-12 mark-as-handled action
 * PATCH /api/v1/executive/insights/{id}
 * body: { status: 'resolved' }
 */
export async function updateInsightStatus(insightId, status) {
  return mockRequest({ insightId, status })
}
