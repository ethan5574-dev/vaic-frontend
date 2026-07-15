import { useEffect, useState } from 'react'
import PageHeader from '../../../components/layout/PageHeader'
import Card, { CardBody } from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import Skeleton from '../../../components/ui/Skeleton'
import { getExampleItems } from '../../../services/exampleService'

/** ExamplePage — public page wired end-to-end: PageHeader + Card + a service call. */
export default function ExamplePage() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    getExampleItems().then(setItems)
  }, [])

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="Trang mẫu" description="Public route, không cần đăng nhập." />
      <Card>
        <CardBody className="space-y-3">
          {!items && <Skeleton className="h-16 w-full" />}
          {items?.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-control bg-surface-bgAlt/60 px-3 py-2">
              <span className="text-sm font-semibold text-surface-ink">{item.title}</span>
              <Badge tone={item.status === 'active' ? 'success' : 'neutral'}>{item.status}</Badge>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  )
}
