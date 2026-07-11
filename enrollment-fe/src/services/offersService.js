import { request } from './client'

// ApplicationStatusPage calls decideOffer('Accepted' | 'Declined');
// DecideOfferDto's OfferAcceptanceStatus enum uses 'ACCEPTED' | 'REJECTED'.
const DECISION_MAP = { Accepted: 'ACCEPTED', Declined: 'REJECTED' }

/**
 * decideOffer — UC-04 "Chấp nhận / từ chối Offer nhập học"
 * PATCH /api/v1/offers/{offerId}/decision
 * returns: { offerId, acceptanceStatus, decisionDate } — note field name is
 * `acceptanceStatus`, not `status`, and there's no `nextStep`.
 * Business rule (only one decision allowed) is enforced server-side.
 */
export async function decideOffer(offerId, decision) {
  return request(`/offers/${offerId}/decision`, {
    method: 'PATCH',
    body: { decision: DECISION_MAP[decision] ?? decision },
  })
}
