import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import RequireAuth from './components/auth/RequireAuth'
import { EXAMPLE_MODULE, DEFAULT_PATH } from './config/navigation'

import ExamplePage from './modules/example/pages/ExamplePage'
import ExampleLoginPage from './modules/example/pages/ExampleLoginPage'
import ExampleDashboardPage from './modules/example/pages/ExampleDashboardPage'

/**
 * Each actor gets its own <AppShell> instance and its own login screen —
 * they never share a layout: no cross-actor switcher, no leaking one
 * actor's nav into another. Copy the "example" block below (module in
 * navigation.js + a login page + a RequireAuth-wrapped route group) to add
 * a new actor.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={DEFAULT_PATH} replace />} />

      {/* --- Example module — public page, no auth --- */}
      <Route element={<AppShell module={EXAMPLE_MODULE} />}>
        <Route path="/example" element={<ExamplePage />} />
      </Route>

      {/* --- Example module — protected page, JWT domain "example" --- */}
      <Route path="/example/login" element={<ExampleLoginPage />} />
      <Route element={<RequireAuth domain="example" loginPath="/example/login" />}>
        <Route element={<AppShell module={EXAMPLE_MODULE} authDomain="example" />}>
          <Route path="/example/dashboard" element={<ExampleDashboardPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={DEFAULT_PATH} replace />} />
    </Routes>
  )
}
