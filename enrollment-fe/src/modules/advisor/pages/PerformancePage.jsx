import { useState } from 'react'
import { TrendingUp, Timer, Trophy, Lightbulb } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody, CardHeader, CardTitle } from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'
import SegmentedControl from '../../../components/ui/SegmentedControl'
import Skeleton from '../../../components/ui/Skeleton'
import { Avatar } from '../../../components/ui/ProgressBar'
import { useAsync } from '../../../hooks/useAsync'
import { getAdvisorPerformance } from '../../../services/advisorService'
import { formatPercent } from '../../../lib/utils'

/** No auth flow in this handoff yet — demo advisor id stands in for the logged-in advisor. */
const DEMO_ADVISOR_ID = 'ADV001'

const PERIODS = [
  { value: 'week', label: 'Tuần' },
  { value: 'month', label: 'Tháng' },
  { value: 'quarter', label: 'Quý' },
]

export default function PerformancePage() {
  const [period, setPeriod] = useState('month')
  const { data, loading } = useAsync(() => getAdvisorPerformance(DEMO_ADVISOR_ID, period), [period])

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        ucRef="UC-08"
        title="Hiệu suất cá nhân"
        description="Tỉ lệ chuyển đổi, thời gian phản hồi trung bình và xếp hạng của bạn trong đội tư vấn."
        actions={<SegmentedControl options={PERIODS} value={period} onChange={setPeriod} />}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-[118px] rounded-panel" />)
        ) : (
          <>
            <StatCard
              label="Tỉ lệ chuyển đổi"
              value={formatPercent(data.conversionRate)}
              icon={TrendingUp}
              accent="teal"
              hint={`${data.leadsHandled} Lead đã xử lý`}
            />
            <StatCard
              label="Thời gian phản hồi TB"
              value={`${data.avgResponseTime} phút`}
              icon={Timer}
              accent="primary"
            />
            <StatCard
              label="Xếp hạng đội"
              value={`#${data.rank}`}
              icon={Trophy}
              accent="warning"
              hint={`Trong ${data.teamSize} tư vấn viên`}
            />
          </>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Bảng xếp hạng đội</CardTitle>
          </CardHeader>
          <CardBody className="space-y-1">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)
              : data.leaderboard.map((entry) => (
                  <div
                    key={entry.name}
                    className={`flex items-center gap-3 rounded-control px-3 py-2.5 ${
                      entry.isSelf ? 'bg-primary-50/70 ring-1 ring-primary-200' : ''
                    }`}
                  >
                    <span className="w-5 text-center text-xs font-bold text-surface-faint">#{entry.rank}</span>
                    <Avatar name={entry.name} size="sm" />
                    <span className={`flex-1 text-sm ${entry.isSelf ? 'font-bold text-primary-700' : 'font-medium text-surface-ink'}`}>
                      {entry.name}
                    </span>
                    <span className="text-sm font-bold text-surface-ink">{formatPercent(entry.conversionRate)}</span>
                  </div>
                ))}
          </CardBody>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-1.5">
              <Lightbulb className="size-4 text-warning-500" /> Mẹo cải thiện
            </CardTitle>
          </CardHeader>
          <CardBody className="space-y-2.5">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-10 w-full" />)
              : data.tips.map((tip, i) => (
                  <div key={i} className="rounded-control bg-surface-bgAlt/60 px-3.5 py-2.5 text-xs text-surface-mute">
                    {tip}
                  </div>
                ))}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
