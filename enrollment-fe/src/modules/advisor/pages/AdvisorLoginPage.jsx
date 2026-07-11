import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogIn, Headset, ListFilter, Lightbulb, Gauge, ShieldCheck } from 'lucide-react'
import AuthSplitLayout from '../../../components/auth/AuthSplitLayout'
import Card, { CardBody } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import { Field, Input } from '../../../components/ui/Input'
import { loginAdvisor } from '../../../services/authService'
import { ApiError } from '../../../services/client'

const FEATURES = [
  { icon: ListFilter, text: 'Hàng đợi Lead xếp hạng theo điểm AI chấm' },
  { icon: Lightbulb, text: 'Gợi ý hành động tiếp theo cho từng Lead' },
  { icon: Gauge, text: 'Theo dõi hiệu suất & xếp hạng cá nhân' },
  { icon: ShieldCheck, text: 'Dữ liệu Lead phân quyền theo vai trò' },
]

export default function AdvisorLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname ?? '/advisor/leads'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await loginAdvisor({ email, password })
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
      accentClassName="bg-gradient-to-br from-primary-900 via-primary-700 to-teal-600"
      eyebrow="Advisor Workspace"
      headline="Xử lý Lead nhanh hơn. Tư vấn đúng người, đúng lúc."
      subheadline="Ưu tiên Lead theo điểm AI chấm, nhận gợi ý hành động tiếp theo và theo dõi hiệu suất cá nhân theo thời gian thực."
      features={FEATURES}
      footnote="AI hỗ trợ ưu tiên xử lý Lead — quyết định tư vấn cuối cùng do tư vấn viên thực hiện."
    >
      <Card className="w-full">
        <CardBody className="pt-8">
          <div className="text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Headset className="size-6" />
            </span>
            <h1 className="mt-3 text-lg font-extrabold text-surface-ink">Đăng nhập Tư vấn viên</h1>
            <p className="mt-1 text-sm text-surface-mute">Dùng tài khoản do quản trị hệ thống cấp.</p>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Field label="Email" required>
              <Input
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="advisor@vaic.edu.vn"
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
            <Button type="submit" variant="secondary" className="w-full" icon={LogIn} loading={submitting}>
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
