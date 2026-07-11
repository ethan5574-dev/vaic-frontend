import { Outlet, useNavigate } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import Sidebar from './Sidebar'
import { getSession, clearSession } from '../../lib/authStorage'

/**
 * AppShell — sticky glass navbar + module sidebar + routed page content,
 * scoped to a single actor. `module` is fixed per mount (see App.jsx —
 * each actor gets its own <AppShell> instance rather than one shared shell
 * that switches between them). Pass `authDomain` for actors that log in
 * ('advisor' | 'executive'); the public Admission Portal omits it.
 */
export default function AppShell({ module, authDomain }) {
  const navigate = useNavigate()
  const session = authDomain ? getSession(authDomain) : null

  function handleLogout() {
    clearSession(authDomain)
    navigate(`/${authDomain}/login`, { replace: true })
  }

  return (
    <div className="min-h-screen">
      <TopNavbar module={module} session={session} onLogout={authDomain ? handleLogout : undefined} />
      <div className="mx-auto flex w-full max-w-[1440px]">
        <Sidebar module={module} />
        <main className="min-w-0 flex-1 px-4 pb-16 pt-6 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
