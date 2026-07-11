import { useState } from 'react'
import { Check, Clock, Circle, Search, GraduationCap, CalendarClock, PercentCircle, Wallet } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody, CardHeader, CardTitle, CardSubtitle } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import Badge from '../../../components/ui/Badge'
import { Field, Input } from '../../../components/ui/Input'
import { getLeadStatus } from '../../../services/leadsService'
import { decideOffer } from '../../../services/offersService'
import { formatDate, formatNumber } from '../../../lib/utils'
import { ApiError } from '../../../services/client'

const STATUS_TONE = { Accepted: 'teal', Declined: 'danger', Pending: 'warning' }

// LeadStatus enum order (mirrors backend funnel.service.ts STAGE_ORDER/LABELS).
// getLeadStatus only returns a status snapshot, not a per-step history, so
// the timeline below is derived client-side from that single status value.
const STAGE_ORDER = ['NEW', 'APPLICATION_SUBMITTED', 'INTERVIEW', 'OFFERED', 'ENROLLED']
const STAGE_LABELS = {
  NEW: 'Lead',
  APPLICATION_SUBMITTED: 'Nộp hồ sơ',
  INTERVIEW: 'Phỏng vấn',
  OFFERED: 'Offer',
  ENROLLED: 'Nhập học',
}

function buildTimeline(status) {
  if (status === 'REJECTED') {
    return [
      { step: 'Lead', status: 'done' },
      { step: 'Không trúng tuyển', status: 'current' },
    ]
  }
  const currentIndex = STAGE_ORDER.indexOf(status)
  return STAGE_ORDER.map((stage, i) => ({
    step: STAGE_LABELS[stage],
    status: i < currentIndex ? 'done' : i === currentIndex ? 'current' : 'upcoming',
  }))
}

export default function ApplicationStatusPage() {
  const [leadIdInput, setLeadIdInput] = useState('')
  const [leadId, setLeadId] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [offer, setOffer] = useState(null)
  const [deciding, setDeciding] = useState(false)

  // No Offer lookup endpoint exists yet (getLeadStatus doesn't join Offer) —
  // this stays null until that gap is closed, so the card below never renders.
  const currentOffer = offer ?? data?.offer

  async function handleLookup(e) {
    e.preventDefault()
    const id = leadIdInput.trim()
    if (!id) return
    setLeadId(id)
    setLoading(true)
    setError(null)
    setData(null)
    setOffer(null)
    try {
      setData(await getLeadStatus(id))
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  async function handleDecision(decision) {
    if (!currentOffer || currentOffer.acceptanceStatus !== 'Pending') return
    setDeciding(true)
    try {
      const res = await decideOffer(currentOffer.offerId, decision)
      setOffer({ ...currentOffer, acceptanceStatus: res.acceptanceStatus, decisionDate: res.decisionDate })
    } finally {
      setDeciding(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        ucRef="UC-03 / UC-04"
        title="Hồ sơ & Offer nhập học"
        description="Nhập mã hồ sơ bạn nhận được khi đăng ký để theo dõi tiến trình xử lý và phản hồi Offer nhập học."
      />

      <Card>
        <CardBody className="pt-6">
          <form className="flex items-end gap-3" onSubmit={handleLookup}>
            <Field label="Mã hồ sơ" className="flex-1">
              <Input
                value={leadIdInput}
                onChange={(e) => setLeadIdInput(e.target.value)}
                placeholder="Mã hồ sơ nhận được sau khi đăng ký"
              />
            </Field>
            <Button type="submit" icon={Search} loading={loading}>
              Tra cứu
            </Button>
          </form>
        </CardBody>
      </Card>

      {error && (
        <Card className="mt-5">
          <CardBody className="pt-6 text-sm text-danger-600">
            {error instanceof ApiError && error.status === 404
              ? `Không tìm thấy hồ sơ với mã "${leadId}". Vui lòng kiểm tra lại mã hồ sơ.`
              : 'Có lỗi khi tra cứu hồ sơ. Vui lòng thử lại.'}
          </CardBody>
        </Card>
      )}

      {data && (
        <Card className="mt-5">
          <CardHeader>
            <div>
              <CardTitle>Tiến trình hồ sơ</CardTitle>
              <CardSubtitle>
                Mã hồ sơ {data.leadId} · Cập nhật lần cuối {formatDate(data.updatedAt)}
              </CardSubtitle>
            </div>
            <Badge tone="primary">{data.status}</Badge>
          </CardHeader>
          <CardBody>
            <ol className="relative ml-3.5 border-l-2 border-surface-line pl-6">
              {buildTimeline(data.status).map((item, i, arr) => (
                <li key={item.step} className={i === arr.length - 1 ? '' : 'pb-7'}>
                  <TimelineDot status={item.status} />
                  <p
                    className={`text-sm font-semibold ${
                      item.status === 'upcoming' ? 'text-surface-faint' : 'text-surface-ink'
                    }`}
                  >
                    {item.step}
                  </p>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>
      )}

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
                Bạn đã phản hồi Offer này vào {formatDate(currentOffer.decisionDate)}.
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
