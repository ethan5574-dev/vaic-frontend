import { Outlet, useLocation } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import Sidebar from './Sidebar'
import { findModuleByPath } from '../../config/navigation'

/** AppShell — top-level layout: sticky glass navbar + module sidebar + routed page content. */
export default function AppShell() {
  const { pathname } = useLocation()
  const activeModule = findModuleByPath(pathname)

  return (
    <div className="min-h-screen">
      <TopNavbar activeModuleId={activeModule.id} />
      <div className="mx-auto flex w-full max-w-[1440px]">
        <Sidebar module={activeModule} />
        <main className="min-w-0 flex-1 px-4 pb-16 pt-6 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
