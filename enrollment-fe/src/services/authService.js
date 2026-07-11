import { request } from './client'
import { setSession, clearSession } from '../lib/authStorage'

/**
 * loginAdvisor — POST /api/v1/auth/advisor/login
 * body: { email, password }
 * returns: { accessToken, advisorId, role }
 */
export async function loginAdvisor({ email, password }) {
  const res = await request('/auth/advisor/login', { method: 'POST', body: { email, password } })
  setSession('advisor', { token: res.accessToken, id: res.advisorId, role: res.role, email })
  return res
}

/**
 * loginExecutive — POST /api/v1/auth/executive/login
 * body: { email, password }
 * returns: { accessToken, executiveId, role }
 */
export async function loginExecutive({ email, password }) {
  const res = await request('/auth/executive/login', { method: 'POST', body: { email, password } })
  setSession('executive', { token: res.accessToken, id: res.executiveId, role: res.role, email })
  return res
}

export function logout(domain) {
  clearSession(domain)
}
