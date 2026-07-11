/**
 * lib/authStorage.js
 * -------------------------------------------------------------------------
 * Advisor and Executive dashboards are two separate JWT domains on the
 * backend (distinct Passport strategies, distinct secrets) — sessions are
 * kept in separate localStorage keys so logging into one never touches
 * the other.
 */

const STORAGE_KEY = {
  advisor: 'vaic_advisor_session',
  executive: 'vaic_executive_session',
}

export function getSession(domain) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY[domain])
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setSession(domain, session) {
  localStorage.setItem(STORAGE_KEY[domain], JSON.stringify(session))
}

export function clearSession(domain) {
  localStorage.removeItem(STORAGE_KEY[domain])
}
