import { TrendingUp, GraduationCap, Wallet, Target } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody, CardHeader, CardTitle, CardSubtitle } from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'
import Skeleton from '../../../components/ui/Skeleton'
import FunnelSteps from '../../../components/charts/FunnelSteps'
import { useAsync } from '../../../hooks/useAsync'
import { getExecutiveKpi, getFunnel } from '../../../services/executiveService'
import { formatVndCompact, formatPercent, formatNumber } from '../../../lib/utils'

export default function OverviewPage() {
  const { data: kpi, loading: kpiLoading } = useAsync(() => getExecutiveKpi('YTD'), [])
  const { data: funnel, loading: funnelLoading } = useAsync(() => getFunnel('YTD'), [])

  const conversionDelta = kpi?.comparedToTarget?.conversionRate?.delta ?? 0
  const targetTrend = conversionDelta < 0 ? 'down' : 'up'

  return (
    <div>
      <PageHeader
        ucRef="UC-09 / UC-10"
        title="Tổng quan KPI & Phễu tuyển sinh"
        description="Bức tranh tổng quan tuyển sinh từ đầu năm và phễu chuyển đổi theo từng bước."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiLoading ? (
          Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-[118px] rounded-panel" />)
        ) : (
          <>
            <StatCard
              label="Tỉ lệ chuyển đổi"
              value={formatPercent(kpi.conversionRate)}
              icon={TrendingUp}
              accent="primary"
              delta={formatPercent(Math.abs(conversionDelta))}
              trend={targetTrend}
              hint="So với mục tiêu"
            />
            <StatCard
              label="Nhập học lũy kế"
              value={formatNumber(kpi.enrollmentYTD)}
              icon={GraduationCap}
              accent="teal"
              hint="Từ đầu năm (YTD)"
            />
            <StatCard
              label="Doanh thu lũy kế"
              value={formatVndCompact(kpi.revenueYTD)}
              icon={Wallet}
              accent="aqua"
              hint="Từ đầu năm (YTD)"
            />
            <StatCard
              label="Chi phí trên mỗi Lead (CAC)"
              value={kpi.cac === null ? '—' : `${formatNumber(kpi.cac)} đ`}
              icon={Target}
              accent="warning"
            />
          </>
        )}
      </div>

      <Card className="mt-5">
        <CardHeader>
          <div>
            <CardTitle>Phễu tuyển sinh</CardTitle>
            <CardSubtitle>Từ Lead đến Nhập học — các bước có drop-off cao được tự động gắn cờ</CardSubtitle>
          </div>
        </CardHeader>
        <CardBody>
          {funnelLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-full" />
              ))}
            </div>
          ) : (
            <FunnelSteps stages={funnel.stages} />
          )}
        </CardBody>
      </Card>
    </div>
  )
}
