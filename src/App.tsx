import { AdminLayout } from './components/layout/AdminLayout'
import { DashboardShell } from './features/dashboard/components/DashboardShell'

function App() {
  return (
    <AdminLayout>
      <DashboardShell />
    </AdminLayout>
  )
}

export default App