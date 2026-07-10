import { mockRequest } from './client'
import { MOCK_CHAT_RULES, MOCK_CHAT_FALLBACK } from '../mock/chat'

/**
 * sendChatMessage — UC-02 "Chat với AI Virtual Consultant"
 * POST /api/v1/chat/message
 * body: ChatRequest { sessionId(uuid), leadId?, message(<=1000 chars), channel }
 * returns: { reply, suggestedPrograms[], handoffToAdvisor }
 *
 * Mock behavior: simple keyword match against MOCK_CHAT_RULES, so the page
 * can be built/demoed end-to-end before RAG/LLM backend is wired up.
 */
export async function sendChatMessage({ sessionId, leadId, message, channel = 'Web' }) {
  const normalized = message.toLowerCase()
  const rule = MOCK_CHAT_RULES.find((r) => r.keywords.some((kw) => normalized.includes(kw)))
  return mockRequest(
    rule
      ? { reply: rule.reply, suggestedPrograms: rule.suggestedPrograms, handoffToAdvisor: rule.handoffToAdvisor }
      : MOCK_CHAT_FALLBACK,
    { delay: 700 },
  )
}
