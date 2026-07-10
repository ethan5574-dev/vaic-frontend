import { mockRequest } from './client'
import { MOCK_INTERACTIONS } from '../mock/interactions'

/**
 * logInteraction — UC-07 "Ghi nhận tương tác với Lead"
 * POST /api/v1/interactions
 * body: { leadId, channel, interactionType, duration?, notes, followupDate? }
 * returns: { interactionId, status: 'saved' }
 */
export async function logInteraction(payload) {
  return mockRequest({
    interactionId: `INT${Math.floor(10000 + Math.random() * 90000)}`,
    status: 'saved',
    _submitted: payload,
  })
}

/**
 * getInteractionsByLead — supporting read used by the Lead detail drawer.
 * NOTE: not yet in the SOP's endpoint table — proposed contract, confirm
 * with BE before implementation: GET /api/v1/leads/{leadId}/interactions
 */
export async function getInteractionsByLead(leadId) {
  return mockRequest(MOCK_INTERACTIONS[leadId] ?? [])
}
