import { Hammer } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

/**
 * ComingSoonPage — placeholder for pages not yet built in this handoff.
 * Keeps routing/navigation fully wired so the app runs end-to-end today;
 * see HANDOFF.md for the TIP-style spec of what each page still needs.
 */
export default function ComingSoonPage({ title, ucRef, description, todo = [] }) {
  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader ucRef={ucRef} title={title} description={description} />
      <Card className="p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-500">
          <Hammer className="size-5" />
        </span>
        <p className="mt-3 text-sm font-bold text-surface-ink">Trang này chưa được dựng trong bản bàn giao này</p>
        <p className="mt-1 text-xs text-surface-mute">
          Layout, design system, service layer &amp; mock data đã sẵn sàng — chỉ cần build UI theo spec bên
          dưới, tương tự cách <code className="rounded bg-surface-bgAlt px-1 py-0.5">LeadFormPage.jsx</code> đã
          làm.
        </p>
        {todo.length > 0 && (
          <ul className="mt-5 space-y-1.5 text-left">
            {todo.map((t) => (
              <li key={t} className="flex items-start gap-2 rounded-control bg-surface-bgAlt/60 px-3 py-2 text-xs text-surface-mute">
                <Badge tone="neutral" className="mt-0">TODO</Badge>
                {t}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
