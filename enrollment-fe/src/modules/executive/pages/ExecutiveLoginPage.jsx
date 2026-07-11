import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogIn, LineChart, BarChart3, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react'
import AuthSplitLayout from '../../../components/auth/AuthSplitLayout'
import Card, { CardBody } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import { Field, Input } from '../../../components/ui/Input'
import { loginExecutive } from '../../../services/authService'
import { ApiError } from '../../../services/client'

const FEATURES = [
  { icon: BarChart3, text: 'KPI & phễu tuyển sinh cập nhật theo thời gian thực' },
  { icon: Sparkles, text: 'Dự báo nhập học & doanh thu bằng AI' },
  { icon: TrendingUp, text: 'Cảnh báo & khuyến nghị ưu tiên xử lý' },
  { icon: ShieldCheck, text: 'Ghi log truy cập cho dữ liệu tài chính nhạy cảm' },
]

export default function ExecutiveLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname ?? '/executive/tong-quan'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await loginExecutive({ email, password })
      navigate(from, { replace: true })
    } catch (err) {
      setError(
        err instanceof ApiError && err.status === 401
          ? 'Email hoặc mật khẩu không đúng.'
          : 'Đăng nhập thất bại. Vui lòng thử lại.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthSplitLayout
      accentClassName="bg-gradient-to-br from-primary-900 via-primary-700 to-aqua-500"
      eyebrow="Executive Dashboard"
      headline="Nhìn toàn cảnh tuyển sinh. Quyết định bằng dữ liệu."
      subheadline="Theo dõi KPI, phễu chuyển đổi, dự báo doanh thu & nhập học, cùng cảnh báo AI theo thời gian thực."
      features={FEATURES}
      footnote="Dữ liệu mang tính tổng hợp hỗ trợ ra quyết định, không thay thế thẩm định tài chính chính thức."
    >
      <Card className="w-full">
        <CardBody className="pt-8">
          <div className="text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <LineChart className="size-6" />
            </span>
            <h1 className="mt-3 text-lg font-extrabold text-surface-ink">Đăng nhập Ban Giám đốc</h1>
            <p className="mt-1 text-sm text-surface-mute">Dùng tài khoản do quản trị hệ thống cấp.</p>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Field label="Email" required>
              <Input
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="executive@vaic.edu.vn"
                required
              />
            </Field>
            <Field label="Mật khẩu" required>
              <Input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Field>
            {error && <p className="text-xs font-semibold text-danger-600">{error}</p>}
            <Button type="submit" variant="primary" className="w-full" icon={LogIn} loading={submitting}>
              Đăng nhập
            </Button>
          </form>
          <p className="mt-5 text-center text-xs text-surface-faint">
            Chưa có tài khoản? Liên hệ quản trị hệ thống để được cấp.
          </p>
        </CardBody>
      </Card>
    </AuthSplitLayout>
  )
}
