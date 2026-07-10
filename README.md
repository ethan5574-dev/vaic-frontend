# AI Enrollment Intelligence Platform

Frontend cho nền tảng tuyển sinh AI-Native — hỗ trợ 3 nhóm người dùng trong quy trình tuyển sinh: **học sinh/phụ huynh**, **tư vấn viên** và **ban giám đốc**, xoay quanh trợ lý AI chấm điểm Lead, gợi ý hành động và dự báo tuyển sinh.

## Tổng quan

Ứng dụng gồm 3 module, tương ứng 3 vai trò sử dụng:

| Module | Đối tượng | Trang chính |
|---|---|---|
| **Admission Portal** | Học sinh / Phụ huynh | Đăng ký tư vấn · Chat với AI Virtual Consultant · Theo dõi hồ sơ & phản hồi Offer nhập học |
| **Advisor Dashboard** | Tư vấn viên tuyển sinh | Hàng đợi Lead ưu tiên (AI chấm điểm) & Next Best Action · Hiệu suất cá nhân |
| **Executive Dashboard** | Ban Giám đốc | Tổng quan KPI & phễu tuyển sinh · Dự báo nhập học & AI Insight |

Toàn bộ nghiệp vụ, use case và contract API bám sát tài liệu SOP đi kèm (`SOP_UseCase_UserStory_AI_Enrollment.md`).

## Công nghệ sử dụng

- **React 18** + **Vite** — SPA, dev server nhanh
- **React Router v6** — routing
- **Tailwind CSS** — design system riêng (design tokens, glass-panel UI)
- **Recharts** — biểu đồ dự báo / phễu chuyển đổi
- **lucide-react** — icon set

## Cấu trúc thư mục

```
src/
├── components/
│   ├── ui/          # Design system: Button, Card, Badge, DataTable, Drawer, StatCard...
│   ├── layout/       # AppShell, TopNavbar, Sidebar, PageHeader
│   └── charts/       # ForecastAreaChart, FunnelSteps
├── modules/
│   ├── admission/    # Trang cho học sinh/phụ huynh
│   ├── advisor/      # Trang cho tư vấn viên
│   └── executive/    # Trang cho ban giám đốc
├── services/         # 1 hàm / 1 API endpoint, JSDoc mô tả contract (Method, Endpoint, Request/Response)
├── mock/             # Mock data khớp field-by-field với response mẫu của từng use case
├── hooks/            # useAsync — chuẩn hoá loading/error/data cho các trang
├── config/           # Cấu hình navigation (module/route)
└── lib/              # Helper dùng chung (format số, ngày, class names...)
```

## Cài đặt & chạy

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # build production vào dist/
npm run preview    # xem thử bản build production
```

## Kết nối API thật

Hiện tại toàn bộ dữ liệu là **mock data tĩnh** (`src/mock/`), được trả về qua `mockRequest()` trong `src/services/client.js` để giả lập độ trễ mạng — chưa gọi API thật.

Khi backend sẵn sàng, chỉ cần:
1. Khai báo `VITE_API_BASE_URL` trong `.env`.
2. Trong từng file `src/services/*Service.js`, đổi `mockRequest(mockData)` → `request(path, { method, body, params })` (hàm `request()` dùng `fetch` thật đã có sẵn trong `client.js`).

Không cần sửa bất kỳ page/component nào — service layer là seam duy nhất giữa UI và dữ liệu.

## Ghi chú

Dự án chưa có luồng xác thực (auth) — mọi route hiện đang public, thông tin người dùng ở đầu trang là placeholder tĩnh.

<!-- deploy-check -->
<!-- deploy-check-2 -->
