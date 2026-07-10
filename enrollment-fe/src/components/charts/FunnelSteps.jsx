import { AlertTriangle } from 'lucide-react'
import { formatNumber, formatPercent, cn } from '../../lib/utils'

/**
 * FunnelSteps — proportional-width bars representing each funnel stage.
 * stages: [{ name, count, conversionPct, dropAlert? }]
 */
export default function FunnelSteps({ stages }) {
  const max = Math.max(...stages.map((s) => s.count), 1)
  return (
    <div className="flex flex-col gap-3">
      {stages.map((stage, i) => {
        const widthPct = Math.max(12, (stage.count / max) * 100)
        return (
          <div key={stage.name}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-semibold text-surface-ink">
                {stage.name}
                {stage.dropAlert && (
                  <span className="inline-flex items-center gap-1 rounded-pill bg-danger-50 px-2 py-0.5 text-[10px] font-bold text-danger-600">
                    <AlertTriangle className="size-3" />
                    Cần chú ý
                  </span>
                )}
              </span>
              <span className="font-bold text-surface-mute">
                {formatNumber(stage.count)}
                {i > 0 && (
                  <span className="ml-1.5 text-surface-faint">
                    ({formatPercent(stage.conversionPct)})
                  </span>
                )}
              </span>
            </div>
            <div className="h-7 w-full overflow-hidden rounded-[10px] bg-surface-bgAlt">
              <div
                className={cn(
                  'flex h-full items-center rounded-[10px] transition-[width] duration-500',
                  stage.dropAlert
                    ? 'bg-gradient-to-r from-danger-500/85 to-danger-500/60'
                    : 'bg-gradient-to-r from-primary-500 to-primary-400',
                )}
                style={{ width: `${widthPct}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
