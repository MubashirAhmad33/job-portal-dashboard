import { useState } from 'react'
import { AdminLayout } from './components/layout/AdminLayout'
import { DashboardPage } from './pages/admin/DashboardPage'
import { CandidatesPage } from './pages/admin/CandidatesPage'

type PageType = 'dashboard' | 'candidates' | 'employers' | 'jobs' | 'applications' | 'reports' | 'locations' | 'settings'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />
      case 'candidates':
        return <CandidatesPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  )
}

export default App