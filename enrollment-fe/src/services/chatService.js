import { request } from './client'

/**
 * sendChatMessage — UC-02 "Chat với AI Virtual Consultant"
 * POST /api/v1/chat/message
 * body: SendMessageDto { message, channel, leadId? } — no sessionId on the
 * backend contract; sessionId stays client-side for local thread tracking.
 * returns: { answer, handoff } — ConsultantService is currently a stub that
 * always answers with a generic message and handoff:true (see BACKEND_PLAN.md
 * Phase 4 for the real RAG/LLM implementation).
 */
export async function sendChatMessage({ leadId, message, channel = 'Web' }) {
  return request('/chat/message', { method: 'POST', body: { message, channel, leadId } })
}
