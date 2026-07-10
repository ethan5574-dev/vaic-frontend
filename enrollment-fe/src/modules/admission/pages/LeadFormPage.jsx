import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Send, ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody } from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import Badge from '../../../components/ui/Badge'
import { Field, Input, Select } from '../../../components/ui/Input'
import FormStepper from '../components/FormStepper'
import { createLead } from '../../../services/leadsService'

const PROGRAMS = [
  'Công nghệ Thông tin',
  'Quản trị Kinh doanh',
  'Kỹ thuật Phần mềm',
  'Thiết kế Đồ họa',
  'Marketing',
  'Kế toán',
  'Xây dựng',
]
const CONTACT_CHANNELS = ['Facebook', 'Zalo OA', 'Website', 'Email', 'Call Center']
const STEPS = ['Thông tin học sinh', 'Kết quả học tập', 'Liên hệ & Nguyện vọng']

const INITIAL_FORM = {
  studentName: '',
  gender: 'Nữ',
  birthYear: '',
  province: '',
  highSchool: '',
  gpa: '',
  mathScore: '',
  englishScore: '',
  programInterest: PROGRAMS[0],
  tuitionBudget: '',
  parentOccupation: '',
  contactChannel: CONTACT_CHANNELS[0],
  referralSource: '',
  hasScholarshipInterest: false,
}

/** Validation mirrors the SOP's Validation column for UC-01. */
function validateStep(step, form) {
  const errors = {}
  if (step === 0) {
    if (!form.studentName.trim()) errors.studentName = 'Vui lòng nhập họ tên học sinh.'
    const year = Number(form.birthYear)
    const age = 2026 - year
    if (!form.birthYear) errors.birthYear = 'Vui lòng nhập năm sinh.'
    else if (age < 15 || age > 35) errors.birthYear = 'Năm sinh phải tương ứng độ tuổi 15–35.'
    if (!form.province.trim()) errors.province = 'Vui lòng nhập tỉnh/thành phố.'
  }
  if (step === 1) {
    ;['gpa', 'mathScore', 'englishScore'].forEach((key) => {
      if (form[key] === '') return
      const v = Number(form[key])
      if (Number.isNaN(v) || v < 0 || v > 10) errors[key] = 'Giá trị phải trong khoảng 0–10.'
    })
  }
  if (step === 2) {
    if (!form.programInterest) errors.programInterest = 'Vui lòng chọn ngành quan tâm.'
    if (!form.contactChannel) errors.contactChannel = 'Vui lòng chọn kênh liên hệ.'
  }
  return errors
}

export default function LeadFormPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function goNext() {
    const stepErrors = validateStep(step, form)
    setErrors(stepErrors)
    if (Object.keys(stepErrors).length > 0) return
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  async function handleSubmit() {
    const stepErrors = validateStep(2, form)
    setErrors(stepErrors)
    if (Object.keys(stepErrors).length > 0) return
    setSubmitting(true)
    try {
      const res = await createLead(form)
      setResult(res)
    } finally {
      setSubmitting(false)
    }
  }

  if (result) {
    return (
      <div className="mx-auto max-w-xl">
        <Card className="p-8 text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <CheckCircle2 className="size-7" />
          </span>
          <h2 className="mt-4 text-xl font-extrabold text-surface-ink">Đăng ký thành công!</h2>
          <p className="mt-2 text-sm text-surface-mute">
            Mã hồ sơ của bạn là <span className="font-bold text-primary-600">{result.leadId}</span>. Hệ
            thống AI đang chấm điểm & phân loại mức độ ưu tiên — tư vấn viên sẽ liên hệ bạn sớm.
          </p>
          <div className="mx-auto mt-4 inline-flex">
            <Badge tone="warning" dot>
              Trạng thái chấm điểm: {result.scoringStatus === 'queued' ? 'Đang xử lý' : result.scoringStatus}
            </Badge>
          </div>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button as={Link} to="/admission/ho-so" variant="primary">
              Theo dõi hồ sơ
            </Button>
            <Button as={Link} to="/admission/tu-van-ai" variant="outline">
              Chat với Tư vấn AI
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        ucRef="UC-01"
        title="Đăng ký thông tin / gửi yêu cầu tư vấn"
        description="Điền thông tin để nhận tư vấn ngành học phù hợp — AI sẽ chấm điểm và ưu tiên xử lý hồ sơ của bạn."
      />

      <Card>
        <CardBody className="pt-6">
          <FormStepper steps={STEPS} current={step} />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {step === 0 && (
              <>
                <Field label="Họ và tên học sinh" required error={errors.studentName} className="sm:col-span-2">
                  <Input
                    value={form.studentName}
                    onChange={(e) => update('studentName', e.target.value)}
                    placeholder="Nguyễn Văn An"
                  />
                </Field>
                <Field label="Giới tính">
                  <Select value={form.gender} onChange={(e) => update('gender', e.target.value)}>
                    <option>Nữ</option>
                    <option>Nam</option>
                    <option>Khác</option>
                  </Select>
                </Field>
                <Field label="Năm sinh" required error={errors.birthYear}>
                  <Input
                    type="number"
                    value={form.birthYear}
                    onChange={(e) => update('birthYear', e.target.value)}
                    placeholder="2008"
                  />
                </Field>
                <Field label="Tỉnh / Thành phố" required error={errors.province}>
                  <Input
                    value={form.province}
                    onChange={(e) => update('province', e.target.value)}
                    placeholder="TP.HCM"
                  />
                </Field>
                <Field label="Trường THPT">
                  <Input
                    value={form.highSchool}
                    onChange={(e) => update('highSchool', e.target.value)}
                    placeholder="THPT Nguyễn Thị Minh Khai"
                  />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="GPA (thang 10)" hint="0 – 10" error={errors.gpa}>
                  <Input
                    type="number"
                    step="0.1"
                    value={form.gpa}
                    onChange={(e) => update('gpa', e.target.value)}
                    placeholder="8.2"
                  />
                </Field>
                <Field label="Điểm Toán" hint="0 – 10" error={errors.mathScore}>
                  <Input
                    type="number"
                    step="0.1"
                    value={form.mathScore}
                    onChange={(e) => update('mathScore', e.target.value)}
                    placeholder="8.5"
                  />
                </Field>
                <Field label="Điểm Tiếng Anh" hint="0 – 10" error={errors.englishScore}>
                  <Input
                    type="number"
                    step="0.1"
                    value={form.englishScore}
                    onChange={(e) => update('englishScore', e.target.value)}
                    placeholder="7.8"
                  />
                </Field>
                <Field label="Ngân sách học phí dự kiến" hint="triệu đồng / năm">
                  <Input
                    type="number"
                    value={form.tuitionBudget}
                    onChange={(e) => update('tuitionBudget', e.target.value)}
                    placeholder="30"
                  />
                </Field>
                <Field label="Nghề nghiệp phụ huynh" className="sm:col-span-2">
                  <Input
                    value={form.parentOccupation}
                    onChange={(e) => update('parentOccupation', e.target.value)}
                    placeholder="Kinh doanh tự do"
                  />
                </Field>
              </>
            )}

            {step === 2 && (
              <>
                <Field label="Ngành quan tâm" required error={errors.programInterest}>
                  <Select
                    value={form.programInterest}
                    onChange={(e) => update('programInterest', e.target.value)}
                  >
                    {PROGRAMS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Kênh liên hệ mong muốn" required error={errors.contactChannel}>
                  <Select
                    value={form.contactChannel}
                    onChange={(e) => update('contactChannel', e.target.value)}
                  >
                    {CONTACT_CHANNELS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Bạn biết đến trường qua đâu?" className="sm:col-span-2">
                  <Input
                    value={form.referralSource}
                    onChange={(e) => update('referralSource', e.target.value)}
                    placeholder="Bạn bè giới thiệu, sự kiện tư vấn tuyển sinh..."
                  />
                </Field>
                <label className="flex items-center gap-2.5 rounded-control border border-surface-line bg-white/70 px-3.5 py-3 text-sm font-medium text-surface-ink sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={form.hasScholarshipInterest}
                    onChange={(e) => update('hasScholarshipInterest', e.target.checked)}
                    className="size-4 rounded border-surface-line text-primary-500 focus:ring-primary-400"
                  />
                  Tôi quan tâm đến chương trình học bổng
                </label>
              </>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-surface-line/70 pt-5">
            <Button
              variant="ghost"
              icon={ArrowLeft}
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(s - 1, 0))}
            >
              Quay lại
            </Button>
            {step < STEPS.length - 1 ? (
              <Button variant="primary" icon={ArrowRight} iconPosition="right" onClick={goNext}>
                Tiếp tục
              </Button>
            ) : (
              <Button variant="primary" icon={Send} loading={submitting} onClick={handleSubmit}>
                Gửi đăng ký
              </Button>
            )}
          </div>
        </CardBody>
      </Card>

      <div className="mt-4 flex items-center gap-2 px-1 text-xs text-surface-faint">
        <GraduationCap className="size-3.5" />
        Thông tin của bạn được bảo mật và chỉ dùng để tư vấn tuyển sinh.
      </div>
    </div>
  )
}
