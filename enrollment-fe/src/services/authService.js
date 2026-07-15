import { request } from './client'
import { setSession, clearSession } from '../lib/authStorage'

/**
 * loginExample — POST /api/v1/auth/example/login
 * body: { email, password }
 * returns: { accessToken, userId, role }
 *
 * Copy this shape for each new JWT domain (add a matching key to
 * lib/authStorage.js first).
 */
export async function loginExample({ email, password }) {
  const res = await request('/auth/example/login', { method: 'POST', body: { email, password } })
  setSession('example', { token: res.accessToken, id: res.userId, role: res.role, email })
  return res
}

export function logout(domain) {
  clearSession(domain)
}
