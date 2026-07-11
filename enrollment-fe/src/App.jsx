import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import RequireAuth from './components/auth/RequireAuth'
import { ADMISSION_MODULE, ADVISOR_MODULE, EXECUTIVE_MODULE, DEFAULT_PATH } from './config/navigation'

import LeadFormPage from './modules/admission/pages/LeadFormPage'
import ChatConsultantPage from './modules/admission/pages/ChatConsultantPage'
import ApplicationStatusPage from './modules/admission/pages/ApplicationStatusPage'
import LeadQueuePage from './modules/advisor/pages/LeadQueuePage'
import PerformancePage from './modules/advisor/pages/PerformancePage'
import AdvisorLoginPage from './modules/advisor/pages/AdvisorLoginPage'
import OverviewPage from './modules/executive/pages/OverviewPage'
import ForecastInsightsPage from './modules/executive/pages/ForecastInsightsPage'
import ExecutiveLoginPage from './modules/executive/pages/ExecutiveLoginPage'

/**
 * Each actor — public visitor (Admission Portal), Advisor, Executive — gets
 * its own <AppShell> instance and its own login screen. They never share a
 * layout: no cross-actor switcher, no leaking one actor's nav into another.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={DEFAULT_PATH} replace />} />

      {/* --- Admission Portal (Học sinh / Phụ huynh) — public, no auth --- */}
      <Route element={<AppShell module={ADMISSION_MODULE} />}>
        <Route path="/admission/dang-ky" element={<LeadFormPage />} />
        <Route path="/admission/tu-van-ai" element={<ChatConsultantPage />} />
        <Route path="/admission/ho-so" element={<ApplicationStatusPage />} />
      </Route>

      {/* --- Advisor Dashboard (Tư vấn viên) --- */}
      <Route path="/advisor/login" element={<AdvisorLoginPage />} />
      <Route element={<RequireAuth domain="advisor" loginPath="/advisor/login" />}>
        <Route element={<AppShell module={ADVISOR_MODULE} authDomain="advisor" />}>
          <Route path="/advisor/leads" element={<LeadQueuePage />} />
          <Route path="/advisor/hieu-suat" element={<PerformancePage />} />
        </Route>
      </Route>

      {/* --- Executive Dashboard (Ban Giám đốc) --- */}
      <Route path="/executive/login" element={<ExecutiveLoginPage />} />
      <Route element={<RequireAuth domain="executive" loginPath="/executive/login" />}>
        <Route element={<AppShell module={EXECUTIVE_MODULE} authDomain="executive" />}>
          <Route path="/executive/tong-quan" element={<OverviewPage />} />
          <Route path="/executive/du-bao" element={<ForecastInsightsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={DEFAULT_PATH} replace />} />
    </Routes>
  )
}
