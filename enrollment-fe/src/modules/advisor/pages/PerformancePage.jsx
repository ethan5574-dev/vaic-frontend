import { useState } from 'react'
import { TrendingUp, Timer, Trophy, Lightbulb } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody, CardHeader, CardTitle } from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'
import SegmentedControl from '../../../components/ui/SegmentedControl'
import Skeleton from '../../../components/ui/Skeleton'
import { useAsync } from '../../../hooks/useAsync'
import { getAdvisorPerformance } from '../../../services/advisorService'
import { formatPercent } from '../../../lib/utils'
import { getSession } from '../../../lib/authStorage'

const PERIODS = [
  { value: 'week', label: 'Tuần' },
  { value: 'month', label: 'Tháng' },
  { value: 'quarter', label: 'Quý' },
]

export default function PerformancePage() {
  const advisorId = getSession('advisor')?.id
  const [period, setPeriod] = useState('month')
  const { data, loading } = useAsync(() => getAdvisorPerformance(advisorId, period), [advisorId, period])

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
            />
            <StatCard
              label="Thời gian phản hồi TB"
              value={data.avgResponseTime === null ? 'Chưa có dữ liệu' : `${data.avgResponseTime} phút`}
              icon={Timer}
              accent="primary"
            />
            <StatCard
              label="Xếp hạng đội"
              value={data.leaderboardPosition === null ? 'Chưa đủ dữ liệu' : `#${data.leaderboardPosition}`}
              icon={Trophy}
              accent="warning"
              hint={data.leaderboardPosition === null ? 'Cần ≥10 Lead trong kỳ để xếp hạng' : undefined}
            />
          </>
        )}
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-1.5">
            <Lightbulb className="size-4 text-warning-500" /> Gợi ý cải thiện
          </CardTitle>
        </CardHeader>
        <CardBody>
          {loading ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            <div className="rounded-control bg-surface-bgAlt/60 px-3.5 py-2.5 text-sm text-surface-mute">
              {data.tips}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
