import { cn } from '../../lib/utils'
import EmptyState from './EmptyState'
import Skeleton from './Skeleton'

/**
 * DataTable — column-driven table used by Lead queue, interaction log, etc.
 * columns: [{ key, header, render?(row), width?, align? }]
 */
export default function DataTable({
  columns,
  rows,
  loading = false,
  emptyTitle = 'Chưa có dữ liệu',
  emptyDescription = 'Danh sách sẽ hiển thị ở đây khi có dữ liệu.',
  onRowClick,
  rowKey = 'id',
  className,
}) {
  return (
    <div className={cn('overflow-x-auto scrollbar-thin', className)}>
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-surface-line/80">
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className={cn(
                  'px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-surface-faint',
                  col.align === 'right' && 'text-right',
                  col.align === 'center' && 'text-center',
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading &&
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="border-b border-surface-line/50">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3.5">
                    <Skeleton className="h-4 w-full max-w-[160px]" />
                  </td>
                ))}
              </tr>
            ))}

          {!loading && rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="py-10">
                <EmptyState title={emptyTitle} description={emptyDescription} />
              </td>
            </tr>
          )}

          {!loading &&
            rows.map((row) => (
              <tr
                key={row[rowKey]}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                className={cn(
                  'border-b border-surface-line/50 transition-colors last:border-0',
                  onRowClick && 'cursor-pointer hover:bg-primary-50/40',
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      'px-4 py-3.5 align-middle text-surface-ink',
                      col.align === 'right' && 'text-right',
                      col.align === 'center' && 'text-center',
                    )}
                  >
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
