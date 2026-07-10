import { useState } from 'react'
import { Check, Clock, Circle, GraduationCap, CalendarClock, PercentCircle, Wallet } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody, CardHeader, CardTitle, CardSubtitle } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import Badge from '../../../components/ui/Badge'
import Skeleton from '../../../components/ui/Skeleton'
import { useAsync } from '../../../hooks/useAsync'
import { getLeadStatus } from '../../../services/leadsService'
import { decideOffer } from '../../../services/offersService'
import { formatDate, formatNumber } from '../../../lib/utils'

/** No auth/session flow in this handoff yet — demo lead id stands in for the logged-in student's lead. */
const DEMO_LEAD_ID = 'L20260041'

const STATUS_TONE = { Accepted: 'teal', Declined: 'danger', Pending: 'warning' }

export default function ApplicationStatusPage() {
  const { data, loading } = useAsync(() => getLeadStatus(DEMO_LEAD_ID), [])
  const [offer, setOffer] = useState(null)
  const [deciding, setDeciding] = useState(false)

  const currentOffer = offer ?? data?.offer

  async function handleDecision(decision) {
    if (!currentOffer || currentOffer.acceptanceStatus !== 'Pending') return
    setDeciding(true)
    try {
      const res = await decideOffer(currentOffer.offerId, decision)
      setOffer({ ...currentOffer, acceptanceStatus: res.status, decisionDate: res.decisionDate, nextStep: res.nextStep })
    } finally {
      setDeciding(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        ucRef="UC-03 / UC-04"
        title="Hồ sơ & Offer nhập học"
        description="Theo dõi tiến trình xử lý hồ sơ và phản hồi Offer nhập học của bạn."
      />

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Tiến trình hồ sơ</CardTitle>
            <CardSubtitle>Mã hồ sơ {DEMO_LEAD_ID}</CardSubtitle>
          </div>
          {data && <Badge tone="primary">{data.status}</Badge>}
        </CardHeader>
        <CardBody>
          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : (
            <ol className="relative ml-3.5 border-l-2 border-surface-line pl-6">
              {data.timeline.map((item, i) => (
                <li key={item.step} className={i === data.timeline.length - 1 ? '' : 'pb-7'}>
                  <TimelineDot status={item.status} />
                  <p
                    className={`text-sm font-semibold ${
                      item.status === 'upcoming' ? 'text-surface-faint' : 'text-surface-ink'
                    }`}
                  >
                    {item.step}
                  </p>
                  <p className="mt-0.5 text-xs text-surface-mute">
                    {item.date ? formatDate(item.date) : 'Chưa xác định'}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </CardBody>
      </Card>

      {currentOffer && (
        <Card className="mt-5">
          <CardHeader>
            <div>
              <CardTitle>Offer nhập học</CardTitle>
              <CardSubtitle>Mã offer {currentOffer.offerId}</CardSubtitle>
            </div>
            <Badge tone={STATUS_TONE[currentOffer.acceptanceStatus] ?? 'neutral'} dot>
              {currentOffer.acceptanceStatus === 'Pending'
                ? 'Chờ phản hồi'
                : currentOffer.acceptanceStatus === 'Accepted'
                  ? 'Đã chấp nhận'
                  : 'Đã từ chối'}
            </Badge>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <OfferStat icon={GraduationCap} label="Ngành trúng tuyển" value={currentOffer.program} />
              <OfferStat
                icon={PercentCircle}
                label="Học bổng"
                value={`${currentOffer.scholarshipPct}%`}
              />
              <OfferStat
                icon={Wallet}
                label="Học phí / năm"
                value={`${formatNumber(currentOffer.tuitionPerYear)} đ`}
              />
              <OfferStat
                icon={CalendarClock}
                label="Hạn phản hồi"
                value={formatDate(currentOffer.expiryDate)}
              />
            </div>

            {currentOffer.acceptanceStatus === 'Pending' ? (
              <div className="mt-6 flex flex-col gap-2.5 border-t border-surface-line/70 pt-5 sm:flex-row">
                <Button
                  variant="primary"
                  icon={Check}
                  loading={deciding}
                  onClick={() => handleDecision('Accepted')}
                  className="sm:flex-1"
                >
                  Chấp nhận Offer
                </Button>
                <Button
                  variant="outline"
                  loading={deciding}
                  onClick={() => handleDecision('Declined')}
                  className="sm:flex-1"
                >
                  Từ chối
                </Button>
              </div>
            ) : (
              <div className="mt-6 rounded-control bg-surface-bgAlt/70 px-4 py-3 text-sm text-surface-mute">
                Bạn đã phản hồi Offer này vào {formatDate(currentOffer.decisionDate)}.{' '}
                {currentOffer.nextStep && <span className="font-medium text-surface-ink">{currentOffer.nextStep}</span>}
              </div>
            )}
            <p className="mt-3 text-[11px] text-surface-faint">
              Mỗi Offer chỉ được phản hồi một lần và phải trước hạn phản hồi ở trên.
            </p>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

function TimelineDot({ status }) {
  const base = 'absolute -left-[calc(1.5rem+9px)] flex size-[18px] items-center justify-center rounded-full'
  if (status === 'done')
    return (
      <span className={`${base} bg-teal-500 text-white`}>
        <Check className="size-3" strokeWidth={3} />
      </span>
    )
  if (status === 'current')
    return (
      <span className={`${base} bg-primary-500 text-white shadow-glass-sm`}>
        <Clock className="size-3" strokeWidth={3} />
      </span>
    )
  return (
    <span className={`${base} bg-surface-bgAlt text-surface-faint`}>
      <Circle className="size-2 fill-current" />
    </span>
  )
}

function OfferStat({ icon: Icon, label, value }) {
  return (
    <div>
      <span className="flex size-8 items-center justify-center rounded-[10px] bg-primary-50 text-primary-500">
        <Icon className="size-4" strokeWidth={2.25} />
      </span>
      <p className="mt-2 text-xs font-semibold text-surface-mute">{label}</p>
      <p className="mt-0.5 text-sm font-bold text-surface-ink">{value}</p>
    </div>
  )
}
