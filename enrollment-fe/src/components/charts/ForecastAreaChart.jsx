import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { formatVndCompact } from '../../lib/utils'

const TOKENS = {
  primary: '#0D47A1',
  primarySoft: '#A1C3ED',
  teal: '#009688',
  grid: '#DCE3EA',
  mute: '#5B6B7F',
}

function TooltipCard({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="glass-panel-flat px-3.5 py-2.5 text-xs">
      <p className="mb-1 font-bold text-surface-ink">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="text-surface-mute">
          {p.name}:{' '}
          <span className="font-semibold text-surface-ink">
            {p.dataKey === 'revenue' ? formatVndCompact(p.value) : p.value}
          </span>
        </p>
      ))}
    </div>
  )
}

/**
 * ForecastAreaChart — Enrollment forecast with lower/upper confidence band (UC-11).
 * data: [{ month, enrollment, lowerBound, upperBound }]
 */
export default function ForecastAreaChart({ data, height = 280 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="enrollmentFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={TOKENS.primary} stopOpacity={0.28} />
            <stop offset="100%" stopColor={TOKENS.primary} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={TOKENS.grid} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 11, fill: TOKENS.mute }}
          axisLine={{ stroke: TOKENS.grid }}
          tickLine={false}
        />
        <YAxis tick={{ fontSize: 11, fill: TOKENS.mute }} axisLine={false} tickLine={false} width={44} />
        <Tooltip content={<TooltipCard />} />
        <Area
          type="monotone"
          dataKey="upperBound"
          stroke="none"
          fill={TOKENS.primarySoft}
          fillOpacity={0.18}
          name="Cận trên"
        />
        <Area
          type="monotone"
          dataKey="lowerBound"
          stroke="none"
          fill="#ffffff"
          fillOpacity={1}
          name="Cận dưới"
        />
        <Area
          type="monotone"
          dataKey="enrollment"
          stroke={TOKENS.primary}
          strokeWidth={2.5}
          fill="url(#enrollmentFill)"
          name="Nhập học dự báo"
          dot={{ r: 3, fill: TOKENS.primary, strokeWidth: 0 }}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
