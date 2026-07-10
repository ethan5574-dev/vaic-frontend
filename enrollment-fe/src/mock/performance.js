/** Mirrors GET /api/v1/advisors/{advisorId}/performance?period=month (UC-08). */
export const MOCK_PERFORMANCE = {
  week: { conversionRate: 0.29, avgResponseTime: 11, rank: 4, teamSize: 18, leadsHandled: 22 },
  month: { conversionRate: 0.32, avgResponseTime: 9, rank: 3, teamSize: 18, leadsHandled: 96 },
  quarter: { conversionRate: 0.35, avgResponseTime: 8, rank: 2, teamSize: 18, leadsHandled: 287 },
}

export const MOCK_PERFORMANCE_TREND = [
  { label: 'T1', conversionRate: 0.24 },
  { label: 'T2', conversionRate: 0.27 },
  { label: 'T3', conversionRate: 0.26 },
  { label: 'T4', conversionRate: 0.3 },
  { label: 'T5', conversionRate: 0.29 },
  { label: 'T6', conversionRate: 0.33 },
  { label: 'T7', conversionRate: 0.32 },
]

export const MOCK_PERFORMANCE_TIPS = [
  'Phản hồi Lead Hot trong vòng 15 phút giúp tăng 18% tỉ lệ chuyển đổi.',
  'Ưu tiên kênh Zalo cho nhóm Lead quan tâm học bổng — tỉ lệ phản hồi cao hơn Email 2.4 lần.',
  'Lead chưa xử lý quá 24h có nguy cơ rớt hạng Hot xuống Warm.',
]

export const MOCK_LEADERBOARD = [
  { name: 'Đỗ Thị Quỳnh', conversionRate: 0.41, rank: 1 },
  { name: 'Hồ Gia Bảo', conversionRate: 0.37, rank: 2 },
  { name: 'Minh Anh Trần (Bạn)', conversionRate: 0.32, rank: 3, isSelf: true },
  { name: 'Lý Thành Phát', conversionRate: 0.3, rank: 4 },
  { name: 'Trịnh Bảo Ngọc', conversionRate: 0.27, rank: 5 },
]
