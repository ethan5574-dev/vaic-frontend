import { mockRequest } from './client'
import { MOCK_PERFORMANCE, MOCK_PERFORMANCE_TREND, MOCK_PERFORMANCE_TIPS, MOCK_LEADERBOARD } from '../mock/performance'

/**
 * getAdvisorPerformance — UC-08 "Theo dõi hiệu suất cá nhân"
 * GET /api/v1/advisors/{advisorId}/performance?period=week|month|quarter
 * returns: { conversionRate, avgResponseTime, leaderboardPosition, tips }
 * Business rule: needs >=10 leads handled in period before ranking is meaningful
 * (surfaced in UI as a note, not enforced here).
 */
export async function getAdvisorPerformance(advisorId, period = 'month') {
  return mockRequest({
    ...MOCK_PERFORMANCE[period],
    trend: MOCK_PERFORMANCE_TREND,
    tips: MOCK_PERFORMANCE_TIPS,
    leaderboard: MOCK_LEADERBOARD,
  })
}
