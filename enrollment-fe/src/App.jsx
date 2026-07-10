import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import { DEFAULT_PATH } from './config/navigation'

import LeadFormPage from './modules/admission/pages/LeadFormPage'
import ChatConsultantPage from './modules/admission/pages/ChatConsultantPage'
import ApplicationStatusPage from './modules/admission/pages/ApplicationStatusPage'
import LeadQueuePage from './modules/advisor/pages/LeadQueuePage'
import PerformancePage from './modules/advisor/pages/PerformancePage'
import OverviewPage from './modules/executive/pages/OverviewPage'
import ForecastInsightsPage from './modules/executive/pages/ForecastInsightsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to={DEFAULT_PATH} replace />} />

        {/* --- Admission Portal (Học sinh / Phụ huynh) --- */}
        <Route path="/admission/dang-ky" element={<LeadFormPage />} />
        <Route path="/admission/tu-van-ai" element={<ChatConsultantPage />} />
        <Route path="/admission/ho-so" element={<ApplicationStatusPage />} />

        {/* --- Advisor Dashboard (Tư vấn viên) --- */}
        <Route path="/advisor/leads" element={<LeadQueuePage />} />
        <Route path="/advisor/hieu-suat" element={<PerformancePage />} />

        {/* --- Executive Dashboard (Ban Giám đốc) --- */}
        <Route path="/executive/tong-quan" element={<OverviewPage />} />
        <Route path="/executive/du-bao" element={<ForecastInsightsPage />} />

        <Route path="*" element={<Navigate to={DEFAULT_PATH} replace />} />
      </Route>
    </Routes>
  )
}
