/**
 * Mirrors GET /api/v1/leads/{leadId}/status (UC-03) response shape:
 * { status, timeline: [{ step, status, date }], offer: object|null }
 */
export const MOCK_APPLICATION_STATUS = {
  status: 'Offer',
  timeline: [
    { step: 'Đăng ký / gửi yêu cầu tư vấn', status: 'done', date: '2026-06-02' },
    { step: 'Tư vấn & xác minh hồ sơ', status: 'done', date: '2026-06-10' },
    { step: 'Xét duyệt học bổng', status: 'done', date: '2026-06-22' },
    { step: 'Nhận Offer nhập học', status: 'current', date: '2026-07-02' },
    { step: 'Hoàn tất nhập học', status: 'upcoming', date: null },
  ],
  offer: {
    offerId: 'OF20260041',
    program: 'Công nghệ Thông tin',
    scholarshipPct: 25,
    tuitionPerYear: 32000000,
    expiryDate: '2026-07-20',
    acceptanceStatus: 'Pending',
  },
}
