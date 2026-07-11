import { request } from './client'

/**
 * getAdvisorPerformance — UC-08 "Theo dõi hiệu suất cá nhân"
 * GET /api/v1/advisors/{advisorId}/performance?period=week|month|quarter
 * returns: { conversionRate, avgResponseTime, leaderboardPosition, tips }
 */
export async function getAdvisorPerformance(advisorId, period = 'month') {
  return request(`/advisors/${advisorId}/performance`, { params: { period }, auth: 'advisor' })
}
