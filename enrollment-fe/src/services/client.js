/**
 * services/client.js
 * -------------------------------------------------------------------------
 * Single seam between UI and data. Every *Service.js file in this folder
 * exposes async functions whose name/shape mirrors an endpoint documented
 * in the SOP's "Bảng đặc tả kỹ thuật" tables (§ Phụ lục B).
 *
 * Right now `request()` resolves mock fixtures with a fake delay so pages
 * can be built against realistic loading/empty states. When the backend is
 * ready, only THIS function needs to change to a real `fetch` call — no
 * page or component should import mock data directly.
 *
 * Example future swap:
 *   const res = await fetch(`${BASE_URL}${path}`, options)
 *   if (!res.ok) throw new ApiError(res.status, await res.text())
 *   return res.json()
 */

export const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1'

export class ApiError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

const MOCK_DELAY_MS = 450

/**
 * mockRequest — resolves `data` after a short delay to simulate latency.
 * Pass a `fail` flag (rare, random) only where you explicitly want to
 * exercise an error state; default behavior always succeeds.
 */
export function mockRequest(data, { delay = MOCK_DELAY_MS } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(typeof data === 'function' ? data() : data), delay)
  })
}

/**
 * request — placeholder for the real HTTP call. Swapping mock → real backend
 * happens by implementing this and pointing each *Service function at it
 * instead of mockRequest. Kept here so the migration touches one file.
 */
export async function request(path, { method = 'GET', body, params } = {}) {
  const url = new URL(`${BASE_URL}${path}`, window.location.origin)
  if (params) {
    Object.entries(params).forEach(([k, v]) => v !== undefined && url.searchParams.set(k, v))
  }
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    throw new ApiError(res.status, await res.text().catch(() => res.statusText))
  }
  if (res.status === 204) return null
  return res.json()
}
