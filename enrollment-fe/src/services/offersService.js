import { mockRequest } from './client'

/**
 * decideOffer — UC-04 "Chấp nhận / từ chối Offer nhập học"
 * PATCH /api/v1/offers/{offerId}/decision
 * body: { decision: 'Accepted' | 'Declined' }
 * returns: { status, decisionDate, nextStep }
 * Business rule: only one decision allowed; ignored client-side here, must be
 * enforced by backend once real API is wired up.
 */
export async function decideOffer(offerId, decision) {
  return mockRequest({
    status: decision,
    decisionDate: new Date().toISOString().slice(0, 10),
    nextStep:
      decision === 'Accepted'
        ? 'Hoàn tất hồ sơ nhập học'
        : 'Cảm ơn bạn đã phản hồi — chúc bạn tìm được lựa chọn phù hợp',
  })
}
