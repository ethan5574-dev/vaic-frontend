import { useState } from 'react'
import { CheckCircle2, AlertOctagon, Gauge } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody, CardHeader, CardTitle, CardSubtitle } from '../../../components/ui/Card'
import Badge, { priorityTone } from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Skeleton from '../../../components/ui/Skeleton'
import EmptyState from '../../../components/ui/EmptyState'
import ForecastAreaChart from '../../../components/charts/ForecastAreaChart'
import { useAsync } from '../../../hooks/useAsync'
import { getForecast, getInsights, updateInsightStatus } from '../../../services/executiveService'
import { formatPercent } from '../../../lib/utils'

export default function ForecastInsightsPage() {
  const { data: forecastData, loading: forecastLoading } = useAsync(() => getForecast(12), [])
  const { data: insightsData, loading: insightsLoading } = useAsync(() => getInsights(), [])
  const [insights, setInsights] = useState(null)
  const [resolvingId, setResolvingId] = useState(null)

  const list = insights ?? insightsData

  async function handleResolve(insightId) {
    setResolvingId(insightId)
    try {
      await updateInsightStatus(insightId, 'resolved')
      setInsights((list ?? insightsData).map((i) => (i.insightId === insightId ? { ...i, status: 'resolved' } : i)))
    } finally {
      setResolvingId(null)
    }
  }

  const isPrelim = forecastData && forecastData.modelConfidence < 0.7

  return (
    <div>
      <PageHeader
        ucRef="UC-11 / UC-12"
        title="Dự báo & AI Insight"
        description="Dự báo nhập học 12 tháng tới và các cảnh báo/khuyến nghị được AI phát hiện từ dữ liệu tuyển sinh."
      />

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Dự báo nhập học</CardTitle>
            <CardSubtitle>Vùng tô nhạt thể hiện khoảng tin cậy (confidence interval)</CardSubtitle>
          </div>
          {forecastData && (
            <div className="flex items-center gap-2">
              {isPrelim && <Badge tone="warning">Dự báo sơ bộ</Badge>}
              <span className="flex items-center gap-1 text-xs font-semibold text-surface-mute">
                <Gauge className="size-3.5" /> Độ tin cậy mô hình: {formatPercent(forecastData.modelConfidence, 0)}
              </span>
            </div>
          )}
        </CardHeader>
        <CardBody>
          {forecastLoading ? (
            <Skeleton className="h-[280px] w-full" />
          ) : (
            <ForecastAreaChart data={forecastData.forecast} />
          )}
        </CardBody>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Cảnh báo & Khuyến nghị AI</CardTitle>
        </CardHeader>
        <CardBody className="space-y-3">
          {insightsLoading ? (
            Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-24 w-full" />)
          ) : list.length === 0 ? (
            <EmptyState
              icon={AlertOctagon}
              title="Không có cảnh báo nào"
              description="Hệ thống chưa phát hiện rủi ro hoặc khuyến nghị mới."
            />
          ) : (
            list.map((insight) => (
              <div key={insight.insightId} className="rounded-control border border-surface-line/80 bg-white/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <Badge tone={priorityTone(insight.priority)}>{insight.priority}</Badge>
                      <span className="text-[11px] font-medium text-surface-faint">{insight.program}</span>
                    </div>
                    <p className="text-sm font-bold text-surface-ink">{insight.title}</p>
                    <p className="mt-1 text-xs text-surface-mute">{insight.explanation}</p>
                  </div>
                  {insight.status === 'resolved' ? (
                    <Badge tone="teal" dot className="shrink-0">
                      Đã xử lý
                    </Badge>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={CheckCircle2}
                      loading={resolvingId === insight.insightId}
                      onClick={() => handleResolve(insight.insightId)}
                      className="shrink-0"
                    >
                      Đã xử lý
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </CardBody>
      </Card>
    </div>
  )
}
