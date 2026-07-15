import { mockRequest } from './client'

/**
 * getExampleItems — GET /api/v1/example
 * Swap `mockRequest` for the real `request(...)` call once the backend
 * endpoint exists.
 */
export async function getExampleItems() {
  return mockRequest([
    { id: 1, title: 'Item mẫu #1', status: 'active' },
    { id: 2, title: 'Item mẫu #2', status: 'pending' },
  ])
}
