import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogIn, ShieldCheck, LayoutDashboard, KeyRound } from 'lucide-react'
import AuthSplitLayout from '../../../components/auth/AuthSplitLayout'
import Card, { CardBody } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import { Field, Input } from '../../../components/ui/Input'
import { loginExample } from '../../../services/authService'
import { ApiError } from '../../../services/client'

const FEATURES = [
  { icon: LayoutDashboard, text: 'Bảng điều khiển mẫu sau khi đăng nhập' },
  { icon: KeyRound, text: 'Phiên đăng nhập lưu theo domain (xem lib/authStorage.js)' },
  { icon: ShieldCheck, text: 'Route được bảo vệ bởi RequireAuth' },
]

/** ExampleLoginPage — copy this file + the domain string to add a new JWT-protected actor. */
export default function ExampleLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname ?? '/example/dashboard'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await loginExample({ email, password })
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
      eyebrow="Example Workspace"
      headline="Đây là màn hình đăng nhập mẫu."
      subheadline="Copy module này khi cần thêm một actor/dashboard mới có JWT riêng."
      features={FEATURES}
      footnote="Template — thay nội dung này bằng nghiệp vụ thật."
    >
      <Card className="w-full">
        <CardBody className="pt-8">
          <div className="text-center">
            <h1 className="mt-3 text-lg font-extrabold text-surface-ink">Đăng nhập</h1>
            <p className="mt-1 text-sm text-surface-mute">Dùng tài khoản do quản trị hệ thống cấp.</p>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Field label="Email" required>
              <Input
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
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
        </CardBody>
      </Card>
    </AuthSplitLayout>
  )
}
