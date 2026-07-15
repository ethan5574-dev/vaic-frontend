import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody } from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'
import { LayoutDashboard } from 'lucide-react'

/** ExampleDashboardPage — behind RequireAuth domain="example". */
export default function ExampleDashboardPage() {
  return (
    <div>
      <PageHeader title="Bảng điều khiển" description="Route được bảo vệ — chỉ vào được sau khi đăng nhập." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={LayoutDashboard} label="Ví dụ chỉ số" value="42" />
      </div>
      <Card className="mt-4">
        <CardBody>
          <p className="text-sm text-surface-mute">
            Thay nội dung ở đây bằng dashboard thật. Layout, auth guard và design system đã sẵn sàng.
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
