import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getSession } from '../../lib/authStorage'

/** RequireAuth — route guard for a JWT domain ('advisor' | 'executive'). */
export default function RequireAuth({ domain, loginPath }) {
  const location = useLocation()
  const session = getSession(domain)

  if (!session?.token) {
    return <Navigate to={loginPath} state={{ from: location }} replace />
  }
  return <Outlet />
}
