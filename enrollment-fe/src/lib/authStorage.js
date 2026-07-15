/**
 * lib/authStorage.js
 * -------------------------------------------------------------------------
 * Each dashboard is its own JWT domain on the backend (distinct Passport
 * strategy, distinct secret) — sessions are kept in separate localStorage
 * keys so logging into one never touches another. Add a key here per new
 * domain.
 */

const STORAGE_KEY = {
  example: 'app_example_session',
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
