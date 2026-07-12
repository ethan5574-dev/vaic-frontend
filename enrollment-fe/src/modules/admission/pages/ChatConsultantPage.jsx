import { useEffect, useRef, useState } from 'react'
import { Send, Sparkles, Headset } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import { Textarea } from '../../../components/ui/Input'
import { Avatar } from '../../../components/ui/ProgressBar'
import { sendChatMessage } from '../../../services/chatService'

const CHANNEL = 'Web'
const MAX_LENGTH = 1000

const GREETING = {
  role: 'assistant',
  text: 'Chào bạn 👋 Mình là Trợ lý tuyển sinh AI. Bạn quan tâm ngành học nào, hoặc muốn hỏi về học phí, học bổng, hay điều kiện xét tuyển?',
  suggestedPrograms: ['Công nghệ Thông tin', 'Quản trị Kinh doanh', 'Thiết kế Đồ họa'],
}

function makeSessionId() {
  return typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `sess-${Date.now()}-${Math.floor(Math.random() * 1e6)}`
}

export default function ChatConsultantPage() {
  const [sessionId] = useState(makeSessionId)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [handoff, setHandoff] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  async function submitMessage(text) {
    const trimmed = text.trim()
    if (!trimmed || sending) return
    setMessages((m) => [...m, { role: 'user', text: trimmed }])
    setInput('')
    setSending(true)
    try {
      const res = await sendChatMessage({ sessionId, message: trimmed, channel: CHANNEL })
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: res.answer, suggestedPrograms: res.suggestedPrograms },
      ])
      if (res.handoff) setHandoff(true)
    } finally {
      setSending(false)
    }
  }

  function handleSend() {
    submitMessage(input)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col">
      <PageHeader
        ucRef="UC-02"
        title="Chat với AI Virtual Consultant"
        description="Trợ lý AI trả lời câu hỏi về ngành học, học phí, học bổng — và kết nối tư vấn viên khi cần."
      />

      {handoff && (
        <div className="mb-4 flex items-center gap-3 rounded-control border border-warning-200 bg-warning-50 px-4 py-3 text-sm text-warning-700">
          <Headset className="size-4 shrink-0" />
          <span className="font-medium">
            Đang kết nối tư vấn viên phụ trách khu vực của bạn — vui lòng để lại thông tin liên hệ, chúng
            tôi sẽ phản hồi sớm nhất.
          </span>
        </div>
      )}

      <Card className="flex h-[68vh] flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto scrollbar-thin px-5 py-5">
          {messages.map((msg, i) => (
            <ChatBubble key={i} msg={msg} onPickProgram={(p) => submitMessage(`Tôi quan tâm ngành ${p}`)} />
          ))}
          {sending && (
            <div className="flex items-start gap-2.5">
              <Avatar name="AI" size="sm" className="bg-teal-500" />
              <div className="flex items-center gap-1 rounded-control rounded-tl-sm bg-surface-bgAlt px-4 py-3">
                <span className="size-1.5 animate-bounce rounded-full bg-surface-faint [animation-delay:-0.2s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-surface-faint [animation-delay:-0.1s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-surface-faint" />
              </div>
            </div>
          )}
        </div>

        <CardBody className="border-t border-surface-line/70 pb-4 pt-4">
          <div className="flex items-end gap-2.5">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_LENGTH))}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi của bạn... (Enter để gửi)"
              className="min-h-[44px] flex-1 resize-none py-2.5"
              rows={1}
            />
            <Button icon={Send} onClick={handleSend} disabled={!input.trim()} loading={sending}>
              Gửi
            </Button>
          </div>
          <div className="mt-1.5 flex justify-end px-1 text-[11px] text-surface-faint">
            {input.length}/{MAX_LENGTH}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

function ChatBubble({ msg, onPickProgram }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}>
      <Avatar
        name={isUser ? 'Bạn' : 'AI'}
        size="sm"
        className={isUser ? '' : 'bg-teal-500'}
      />
      <div className={`flex max-w-[80%] flex-col gap-2 ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-control px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? 'rounded-tr-sm bg-primary-500 text-white'
              : 'rounded-tl-sm bg-surface-bgAlt text-surface-ink'
          }`}
        >
          {msg.text}
        </div>
        {!isUser && msg.suggestedPrograms?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {msg.suggestedPrograms.map((p) => (
              <button
                key={p}
                onClick={() => onPickProgram(p)}
                className="inline-flex items-center gap-1 rounded-pill border border-primary-200 bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary-600 transition-colors hover:bg-primary-100"
              >
                <Sparkles className="size-3" />
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
