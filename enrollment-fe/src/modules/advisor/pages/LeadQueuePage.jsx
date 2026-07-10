import { useEffect, useState } from 'react'
import { Phone, MapPin, Lightbulb, CheckCircle2 } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import Badge, { rankTone } from '../../../components/ui/Badge'
import DataTable from '../../../components/ui/DataTable'
import Drawer from '../../../components/ui/Drawer'
import Skeleton from '../../../components/ui/Skeleton'
import { Field, Input, Select, Textarea } from '../../../components/ui/Input'
import { useAsync } from '../../../hooks/useAsync'
import { getAdvisorLeads, getNextBestAction } from '../../../services/leadsService'
import { logInteraction } from '../../../services/interactionsService'
import { INTERACTION_CHANNELS, INTERACTION_TYPES } from '../../../mock/interactions'
import { formatDate } from '../../../lib/utils'

/** No auth flow in this handoff yet — demo advisor id stands in for the logged-in advisor. */
const DEMO_ADVISOR_ID = 'ADV001'

const COLUMNS = [
  {
    key: 'name',
    header: 'Lead',
    render: (row) => (
      <div>
        <p className="font-semibold text-surface-ink">{row.name}</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-surface-mute">
          <MapPin className="size-3" /> {row.province}
        </p>
      </div>
    ),
  },
  { key: 'program', header: 'Ngành quan tâm' },
  { key: 'channel', header: 'Kênh' },
  {
    key: 'rank',
    header: 'Xếp hạng',
    render: (row) => (
      <Badge tone={rankTone(row.rank)} pulse={row.rank === 'Hot'}>
        {row.rank}
      </Badge>
    ),
  },
  { key: 'score', header: 'Điểm', align: 'right', render: (row) => <span className="font-bold">{row.score}</span> },
  {
    key: 'lastInteraction',
    header: 'Tương tác gần nhất',
    align: 'right',
    render: (row) => formatDate(row.lastInteraction),
  },
]

const INITIAL_INTERACTION = { channel: INTERACTION_CHANNELS[0], type: INTERACTION_TYPES[0], duration: '', notes: '', followupDate: '' }

export default function LeadQueuePage() {
  const { data: leads, loading } = useAsync(() => getAdvisorLeads(DEMO_ADVISOR_ID), [])
  const [selectedLead, setSelectedLead] = useState(null)
  const [nba, setNba] = useState(null)
  const [nbaLoading, setNbaLoading] = useState(false)
  const [form, setForm] = useState(INITIAL_INTERACTION)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!selectedLead) return
    setNba(null)
    setNbaLoading(true)
    getNextBestAction(selectedLead.leadId).then((res) => {
      setNba(res)
      setNbaLoading(false)
    })
  }, [selectedLead])

  function openLead(row) {
    setSelectedLead(row)
    setForm(INITIAL_INTERACTION)
    setSaved(false)
  }

  function closeDrawer() {
    setSelectedLead(null)
  }

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSaveInteraction() {
    setSaving(true)
    try {
      await logInteraction({ leadId: selectedLead.leadId, ...form })
      setSaved(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <PageHeader
        ucRef="UC-05 / UC-06 / UC-07"
        title="Hàng đợi Lead & Next Best Action"
        description="Danh sách Lead ưu tiên xử lý theo điểm AI chấm, kèm gợi ý hành động tiếp theo và form ghi nhận tương tác."
      />

      <Card>
        <CardBody className="pt-5">
          <DataTable
            columns={COLUMNS}
            rows={leads ?? []}
            loading={loading}
            onRowClick={openLead}
            rowKey="leadId"
            emptyTitle="Không có Lead nào"
            emptyDescription="Danh sách Lead ưu tiên xử lý sẽ hiển thị ở đây."
          />
        </CardBody>
      </Card>

      <Drawer
        open={!!selectedLead}
        onClose={closeDrawer}
        title={selectedLead?.name}
        subtitle={selectedLead ? `${selectedLead.leadId} · ${selectedLead.program}` : ''}
        footer={
          !saved && (
            <Button className="w-full" onClick={handleSaveInteraction} loading={saving} icon={CheckCircle2}>
              Lưu tương tác
            </Button>
          )
        }
      >
        {selectedLead && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Badge tone={rankTone(selectedLead.rank)} pulse={selectedLead.rank === 'Hot'}>
                {selectedLead.rank}
              </Badge>
              <span className="text-xs text-surface-mute">Điểm AI: {selectedLead.score}</span>
              <a
                href={`tel:${selectedLead.phone}`}
                className="ml-auto flex items-center gap-1 text-xs font-semibold text-primary-600 hover:underline"
              >
                <Phone className="size-3.5" /> {selectedLead.phone}
              </a>
            </div>

            <div className="rounded-control border border-primary-200 bg-primary-50/60 px-4 py-3.5">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary-600">
                <Lightbulb className="size-3.5" /> Next Best Action
              </p>
              {nbaLoading ? (
                <Skeleton className="mt-2 h-10 w-full" />
              ) : (
                nba && (
                  <div className="mt-2 text-sm text-surface-ink">
                    <p>
                      <span className="font-semibold">{nba.channel}</span> · {nba.time}
                    </p>
                    <p className="mt-1 text-surface-mute">{nba.content}</p>
                  </div>
                )
              )}
            </div>

            {saved ? (
              <div className="rounded-control bg-teal-50 px-4 py-3 text-sm font-medium text-teal-700">
                Đã lưu tương tác thành công.
              </div>
            ) : (
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-surface-faint">
                  Ghi nhận tương tác
                </p>
                <div className="grid grid-cols-2 gap-3.5">
                  <Field label="Kênh">
                    <Select value={form.channel} onChange={(e) => update('channel', e.target.value)}>
                      {INTERACTION_CHANNELS.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Loại tương tác">
                    <Select value={form.type} onChange={(e) => update('type', e.target.value)}>
                      {INTERACTION_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Thời lượng (phút)" hint="Nếu là cuộc gọi">
                    <Input
                      type="number"
                      value={form.duration}
                      onChange={(e) => update('duration', e.target.value)}
                      placeholder="8"
                    />
                  </Field>
                  <Field label="Ngày hẹn tiếp theo">
                    <Input
                      type="date"
                      value={form.followupDate}
                      onChange={(e) => update('followupDate', e.target.value)}
                    />
                  </Field>
                  <Field label="Ghi chú" className="col-span-2">
                    <Textarea
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="Nội dung trao đổi, phản hồi của Lead..."
                    />
                  </Field>
                </div>
              </div>
            )}
          </div>
        )}
      </Drawer>
    </div>
  )
}
