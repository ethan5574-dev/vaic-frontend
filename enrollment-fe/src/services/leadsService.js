import { request } from './client'

// LeadFormPage uses Vietnamese UI labels; CreateLeadDto expects these enum values.
const GENDER_MAP = { Nữ: 'Female', Nam: 'Male', Khác: 'Other' }
const CONTACT_CHANNEL_MAP = { Facebook: 'Facebook', 'Zalo OA': 'Zalo', Website: 'Web', Email: 'Email', 'Call Center': 'CallCenter' }

/**
 * createLead — UC-01 "Đăng ký thông tin / gửi yêu cầu tư vấn"
 * POST /api/v1/leads
 * returns: { leadId, status: 'created', scoringStatus: 'queued' }
 */
export async function createLead(payload) {
  return request('/leads', {
    method: 'POST',
    body: {
      ...payload,
      gender: GENDER_MAP[payload.gender] ?? payload.gender,
      contactChannel: CONTACT_CHANNEL_MAP[payload.contactChannel] ?? payload.contactChannel,
      birthYear: Number(payload.birthYear),
      gpa: payload.gpa === '' ? undefined : Number(payload.gpa),
      mathScore: payload.mathScore === '' ? undefined : Number(payload.mathScore),
      englishScore: payload.englishScore === '' ? undefined : Number(payload.englishScore),
      tuitionBudget: payload.tuitionBudget === '' ? undefined : Number(payload.tuitionBudget),
    },
  })
}

/**
 * getLeadStatus — UC-03 "Xem trạng thái hồ sơ"
 * GET /api/v1/leads/{leadId}/status
 * returns: { leadId, status, enrollmentStatus, score, rank, updatedAt }
 * No `timeline`/`offer` on this endpoint — LeadStatus.getStatus() doesn't
 * join Offer, and there's no per-step history table, only a status snapshot.
 */
export async function getLeadStatus(leadId) {
  return request(`/leads/${leadId}/status`)
}

/**
 * getAdvisorLeads — UC-05 "Xem danh sách Lead ưu tiên xử lý"
 * GET /api/v1/advisors/{advisorId}/leads?channel=&program=
 * returns: [{ leadId, name, score, rank, lastInteraction }] — list query only
 * selects these columns; use getLeadDetail for phone/program/channel/province.
 * `rank` has no backend query param yet, so it's filtered client-side.
 */
export async function getAdvisorLeads(advisorId, filters = {}) {
  const { rank, ...serverFilters } = filters
  const rows = await request(`/advisors/${advisorId}/leads`, { params: serverFilters, auth: 'advisor' })
  return rank ? rows.filter((r) => r.rank === rank) : rows
}

/**
 * getLeadDetail — UC-05 step 4-5 "Mở chi tiết Lead" (also logs firstViewedAt
 * server-side for Response Time tracking).
 * GET /api/v1/advisors/{advisorId}/leads/{leadId}
 * returns: full Lead row (studentName, phoneNumber, programInterest,
 * contactChannel, province, ...) + interactions[]
 */
export async function getLeadDetail(advisorId, leadId) {
  return request(`/advisors/${advisorId}/leads/${leadId}`, { auth: 'advisor' })
}

/**
 * getNextBestAction — UC-06 "Nhận gợi ý hành động tiếp theo"
 * GET /api/v1/leads/{leadId}/next-best-action
 * returns: { channel, time, content }
 */
export async function getNextBestAction(leadId) {
  return request(`/leads/${leadId}/next-best-action`, { auth: 'advisor' })
}
