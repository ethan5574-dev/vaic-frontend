import { request } from './client'

/**
 * sendChatMessage — UC-02 "Chat với AI Virtual Consultant"
 * POST /api/v1/chat/message
 * body: SendMessageDto { sessionId, message, channel, leadId? }
 * returns: { reply, suggestedPrograms, handoffToAdvisor } — backend proxies
 * this to the RAG chatbot service (vaic-ai-chatbot); falls back to a generic
 * hand-off reply if that service isn't configured/reachable.
 */
export async function sendChatMessage({ sessionId, leadId, message, channel = 'Web' }) {
  return request('/chat/message', { method: 'POST', body: { sessionId, message, channel, leadId } })
}
