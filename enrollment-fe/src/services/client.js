/**
 * services/client.js
 * -------------------------------------------------------------------------
 * Single seam between UI and data. Every *Service.js file in this folder
 * exposes async functions whose name/shape mirrors an endpoint documented
 * in the SOP's "Bảng đặc tả kỹ thuật" tables (§ Phụ lục B).
 *
 * `getInteractionsByLead` (interactionsService.js) still uses `mockRequest`
 * because that endpoint doesn't exist on the backend yet.
 */

import { getSession, clearSession } from '../lib/authStorage'

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
 * request — the real HTTP call every *Service.js function goes through.
 * Pass `auth: 'advisor' | 'executive'` for routes behind that domain's JWT
 * guard — the matching token (see lib/authStorage.js) is attached as a
 * Bearer header, and a 401 response clears that domain's session so the
 * next render of RequireAuth redirects back to its login page.
 */
export async function request(path, { method = 'GET', body, params, auth } = {}) {
  const url = new URL(`${BASE_URL}${path}`, window.location.origin)
  if (params) {
    Object.entries(params).forEach(([k, v]) => v !== undefined && url.searchParams.set(k, v))
  }
  const headers = { 'Content-Type': 'application/json' }
  if (auth) {
    const session = getSession(auth)
    if (session?.token) headers.Authorization = `Bearer ${session.token}`
  }
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (res.status === 401 && auth) {
    clearSession(auth)
  }
  if (!res.ok) {
    throw new ApiError(res.status, await res.text().catch(() => res.statusText))
  }
  if (res.status === 204) return null
  return res.json()
}
