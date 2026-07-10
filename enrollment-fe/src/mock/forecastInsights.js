/** Mirrors GET /api/v1/executive/forecast?months=12 (UC-11), backed by UC-15 pre-compute. */
export const MOCK_FORECAST = {
  modelConfidence: 0.82,
  forecast: [
    { month: '2026-08', enrollment: 110, revenue: 4200000000, lowerBound: 96, upperBound: 124 },
    { month: '2026-09', enrollment: 165, revenue: 6300000000, lowerBound: 142, upperBound: 188 },
    { month: '2026-10', enrollment: 98, revenue: 3700000000, lowerBound: 80, upperBound: 116 },
    { month: '2026-11', enrollment: 87, revenue: 3300000000, lowerBound: 70, upperBound: 104 },
    { month: '2026-12', enrollment: 132, revenue: 5000000000, lowerBound: 110, upperBound: 154 },
    { month: '2027-01', enrollment: 178, revenue: 6800000000, lowerBound: 150, upperBound: 206 },
  ],
}

/** Mirrors GET /api/v1/executive/insights (UC-12), backed by UC-15 Churn model. */
export const MOCK_INSIGHTS = [
  {
    insightId: 'IN001',
    title: 'Rủi ro bỏ học tăng cao ở Khoa Xây dựng',
    priority: 'Critical',
    explanation:
      'Risk Score trung bình của sinh viên năm 2 Khoa Xây dựng tăng 24 điểm so với kỳ trước, vượt ngưỡng cảnh báo tự động (>20 điểm).',
    status: 'open',
    program: 'Xây dựng',
    detectedAt: '2026-07-08',
  },
  {
    insightId: 'IN002',
    title: 'Dự báo nhập học Quý 4 thấp hơn mục tiêu 15%',
    priority: 'Critical',
    explanation:
      'Forecast Enrollment tháng 10–11 lệch so với target ngân sách hơn 15%, chủ yếu do drop-off cao ở bước Nộp hồ sơ.',
    status: 'open',
    program: 'Toàn trường',
    detectedAt: '2026-07-07',
  },
  {
    insightId: 'IN003',
    title: 'Conversion Rate kênh Facebook giảm nhẹ',
    priority: 'Warning',
    explanation: 'Tỉ lệ chuyển đổi Lead từ Facebook giảm 5% so với tuần trước, cần theo dõi thêm 1 tuần.',
    status: 'open',
    program: 'Toàn trường',
    detectedAt: '2026-07-06',
  },
  {
    insightId: 'IN004',
    title: 'Ngành Công nghệ Thông tin vượt chỉ tiêu tuyển sinh',
    priority: 'Info',
    explanation: 'Enrollment ngành CNTT đã đạt 108% chỉ tiêu năm, có thể cân nhắc mở thêm lớp.',
    status: 'resolved',
    program: 'Công nghệ Thông tin',
    detectedAt: '2026-07-02',
  },
]
