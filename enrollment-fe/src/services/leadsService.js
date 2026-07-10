import { mockRequest } from './client'
import { MOCK_LEADS, MOCK_NEXT_BEST_ACTION } from '../mock/leads'
import { MOCK_APPLICATION_STATUS } from '../mock/applicationStatus'

/**
 * createLead — UC-01 "Đăng ký thông tin / gửi yêu cầu tư vấn"
 * POST /api/v1/leads
 * body: LeadForm { StudentName, Gender, BirthYear, Province, HighSchool, GPA,
 *   MathScore, EnglishScore, ProgramInterest, TuitionBudget, ParentOccupation,
 *   ContactChannel, ReferralSource, HasScholarshipInterest }
 * returns: { leadId, status: 'created', scoringStatus: 'queued' }
 */
export async function createLead(payload) {
  return mockRequest({
    leadId: `L2026${Math.floor(1000 + Math.random() * 9000)}`,
    status: 'created',
    scoringStatus: 'queued',
    _submitted: payload,
  })
}

/**
 * getLeadStatus — UC-03 "Xem trạng thái hồ sơ"
 * GET /api/v1/leads/{leadId}/status
 * returns: { status, timeline: [{ step, status, date }], offer: object|null }
 */
export async function getLeadStatus(leadId) {
  return mockRequest(MOCK_APPLICATION_STATUS)
}

/**
 * getAdvisorLeads — UC-05 "Xem danh sách Lead ưu tiên xử lý"
 * GET /api/v1/advisors/{advisorId}/leads?channel=&program=
 * returns: [{ leadId, name, score, rank, lastInteraction }]
 */
export async function getAdvisorLeads(advisorId, filters = {}) {
  return mockRequest(() => {
    let rows = [...MOCK_LEADS]
    if (filters.channel) rows = rows.filter((r) => r.channel === filters.channel)
    if (filters.program) rows = rows.filter((r) => r.program === filters.program)
    if (filters.rank) rows = rows.filter((r) => r.rank === filters.rank)
    return rows.sort((a, b) => b.score - a.score)
  })
}

/**
 * getNextBestAction — UC-06 "Nhận gợi ý hành động tiếp theo"
 * GET /api/v1/leads/{leadId}/next-best-action
 * returns: { channel, time, content } — or a default 24h welcome-call script
 * per the Business Rule when the lead has no interaction history yet.
 */
export async function getNextBestAction(leadId) {
  return mockRequest(
    MOCK_NEXT_BEST_ACTION[leadId] ?? {
      channel: 'Gọi điện',
      time: 'Trong 24 giờ',
      content: 'Chưa có lịch sử tương tác — thực hiện kịch bản gọi chào mừng mặc định.',
    },
  )
}
