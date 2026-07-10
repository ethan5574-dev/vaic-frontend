/**
 * Mirrors POST /api/v1/chat/message (UC-02) response: { reply, suggestedPrograms[], handoffToAdvisor }
 * MOCK_CHAT_RULES is a tiny canned-response engine keyed by keyword, used only until
 * the RAG/LLM backend is available — see services/chatService.js.
 */
export const MOCK_CHAT_GREETING = {
  reply:
    'Chào bạn 👋 Mình là Trợ lý tuyển sinh AI. Bạn quan tâm ngành học nào, hoặc muốn hỏi về học phí, học bổng, hay điều kiện xét tuyển?',
  suggestedPrograms: ['Công nghệ Thông tin', 'Quản trị Kinh doanh', 'Thiết kế Đồ họa'],
  handoffToAdvisor: false,
}

export const MOCK_CHAT_RULES = [
  {
    keywords: ['học phí', 'hoc phi', 'tuition'],
    reply:
      'Học phí ngành Công nghệ Thông tin hiện khoảng 32 triệu/năm, có thể giảm đến 25% nếu đủ điều kiện học bổng đầu vào. Bạn có muốn mình kiểm tra điều kiện học bổng cho bạn không?',
    suggestedPrograms: ['Công nghệ Thông tin'],
    handoffToAdvisor: false,
  },
  {
    keywords: ['học bổng', 'hoc bong', 'scholarship'],
    reply:
      'Trường có 3 mức học bổng đầu vào: 25% (GPA ≥ 8.5), 15% (GPA ≥ 8.0) và 10% (GPA ≥ 7.5). Bạn cho mình biết điểm GPA lớp 12 để mình ước tính mức học bổng phù hợp nhé.',
    suggestedPrograms: [],
    handoffToAdvisor: false,
  },
  {
    keywords: ['tư vấn viên', 'nhân viên', 'người thật', 'gọi điện'],
    reply:
      'Mình sẽ kết nối bạn với tư vấn viên phụ trách khu vực để hỗ trợ chi tiết hơn. Bạn vui lòng để lại số điện thoại nhé.',
    suggestedPrograms: [],
    handoffToAdvisor: true,
  },
]

export const MOCK_CHAT_FALLBACK = {
  reply:
    'Mình chưa có thông tin chắc chắn về nội dung này trong hệ thống tri thức hiện tại. Để đảm bảo chính xác, mình sẽ kết nối bạn với tư vấn viên nhé.',
  suggestedPrograms: [],
  handoffToAdvisor: true,
}
