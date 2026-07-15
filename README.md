# React Frontend Template

Base project cho các frontend React + Vite mới. Đã có sẵn design system, layout đa-actor (nhiều dashboard, mỗi actor 1 AppShell riêng), auth guard theo JWT domain, và pipeline CI/CD — chỉ cần thêm module nghiệp vụ thật.

## Tổng quan

Kèm sẵn 1 module mẫu (`example`) minh hoạ đầy đủ luồng: trang public, trang login, trang được bảo vệ bởi `RequireAuth`. Copy module này khi thêm actor/dashboard mới.

## Công nghệ sử dụng

- **React 18** + **Vite** — SPA, dev server nhanh
- **React Router v6** — routing
- **Tailwind CSS** — design system riêng (design tokens, glass-panel UI)
- **Recharts** — biểu đồ
- **lucide-react** — icon set

## Cấu trúc thư mục

```
src/
├── components/
│   ├── ui/          # Design system: Button, Card, Badge, DataTable, Drawer, StatCard...
│   ├── layout/       # AppShell, TopNavbar, Sidebar, PageHeader
│   └── auth/         # AuthSplitLayout, RequireAuth
├── modules/
│   └── example/      # Module mẫu — copy khi thêm actor/dashboard mới
├── services/         # 1 hàm / 1 API endpoint, JSDoc mô tả contract (Method, Endpoint, Request/Response)
├── hooks/            # useAsync — chuẩn hoá loading/error/data cho các trang
├── config/           # Cấu hình navigation (module/route)
└── lib/              # Helper dùng chung (authStorage, format số, ngày, class names...)
```

## Cài đặt & chạy

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # build production vào dist/
npm run preview    # xem thử bản build production
```

## Kết nối API thật

`src/services/client.js` có sẵn `mockRequest()` (giả lập độ trễ, trả mock data) và `request()` (gọi `fetch` thật). Khi backend sẵn sàng:
1. Khai báo `VITE_API_BASE_URL` trong `.env`.
2. Trong từng file `src/services/*Service.js`, đổi `mockRequest(mockData)` → `request(path, { method, body, params })`.

Không cần sửa page/component nào — service layer là seam duy nhất giữa UI và dữ liệu.

## Thêm actor/dashboard mới

1. Thêm 1 entry vào `STORAGE_KEY` trong `src/lib/authStorage.js`.
2. Copy `src/services/authService.js` → thêm hàm `login<Actor>` tương tự `loginExample`.
3. Copy `src/modules/example/` sang module mới, thêm module vào `src/config/navigation.js`.
4. Wire route trong `src/App.jsx` (public route + `/login` + `RequireAuth` group), theo đúng pattern của module `example`.

## Ghi chú

Đây là template — Dockerfile, docker-compose.yml, nginx.conf và `.github/workflows/deploy.yml` giữ nguyên so với project gốc để deploy/CI-CD không cần setup lại khi force-push nhánh này vào `main`.

<!-- deploy-check -->
<!-- deploy-check-2 -->
