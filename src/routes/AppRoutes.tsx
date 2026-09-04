import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../features/dashboard/Dashboard";
import Jobs from "../features/jobs/pages/Jobs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/candidates"
          element={<Placeholder title="Candidates" />}
        />
        <Route
          path="/employers"
          element={<Placeholder title="Employers" />}
        />
        <Route
          path="/applications"
          element={<Placeholder title="Applications" />}
        />
        <Route
          path="/reports"
          element={<Placeholder title="Reports" />}
        />
        <Route
          path="/settings"
          element={<Placeholder title="Settings" />}
        />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="rounded-xl border bg-white p-8">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-500">
        This module is ready for development.
      </p>
    </div>
  );
}
