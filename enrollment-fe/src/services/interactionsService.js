import { mockRequest, request } from './client'
import { MOCK_INTERACTIONS } from '../mock/interactions'

// LeadQueuePage's INTERACTION_CHANNELS/INTERACTION_TYPES (mock/interactions.js)
// don't line up 1:1 with backend's InteractionChannel/InteractionType enums.
// 'CallCenter' and 'Note' below are best-effort guesses — confirm with BE/product.
const CHANNEL_MAP = { Call: 'CallCenter', 'Zalo OA': 'Zalo', Facebook: 'Facebook', Email: 'Email', Website: 'Web' }
const TYPE_MAP = { Call: 'Call', 'Chat AI': 'Chat', 'Gặp trực tiếp': 'Note', Email: 'Email' }

/**
 * logInteraction — UC-07 "Ghi nhận tương tác với Lead"
 * POST /api/v1/interactions
 * body: CreateInteractionDto { leadId, channel, interactionType, duration?, notes?, followupDate? }
 * returns: { interactionId, status: 'saved' }
 */
export async function logInteraction({ leadId, channel, type, duration, notes, followupDate }) {
  return request('/interactions', {
    method: 'POST',
    auth: 'advisor',
    body: {
      leadId,
      channel: CHANNEL_MAP[channel] ?? channel,
      interactionType: TYPE_MAP[type] ?? type,
      duration: duration === '' ? undefined : Number(duration),
      notes,
      followupDate,
    },
  })
}

/**
 * getInteractionsByLead — supporting read used by the Lead detail drawer.
 * NOT implemented on the backend yet (interactions.controller.ts only has
 * POST) — stays on mock data until that endpoint exists.
 */
export async function getInteractionsByLead(leadId) {
  return mockRequest(MOCK_INTERACTIONS[leadId] ?? [])
}
