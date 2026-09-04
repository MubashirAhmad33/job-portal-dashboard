import {
  BriefcaseBusiness,
  Users,
  Building2,
  FileText,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Jobs",
    value: "1,248",
    change: "+12.5%",
    icon: BriefcaseBusiness,
  },
  {
    title: "Candidates",
    value: "24,892",
    change: "+8.2%",
    icon: Users,
  },
  {
    title: "Employers",
    value: "1,842",
    change: "+5.4%",
    icon: Building2,
  },
  {
    title: "Applications",
    value: "18,420",
    change: "+15.8%",
    icon: FileText,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back. Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  <Icon size={22} />
                </div>

                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                  <TrendingUp size={14} />
                  {stat.change}
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-500">{stat.title}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900">Applications Overview</h2>

          <div className="mt-8 flex h-64 items-end justify-between gap-2">
            {[40, 65, 10, 80, 60, 90, 72, 85, 55, 75, 95, 82].map(
              (height, index) => (
                <div
                  key={index}
                  className="animate-grow-up w-full rounded-t bg-blue-500 transition-colors duration-500 ease-out hover:bg-blue-600"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 50}ms`,
                  }}
                />
              )
            )}
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900">Recent Activity</h2>

          <div className="mt-6 space-y-5">
            {[
              "New job posted by Tech Solutions",
              "15 new applications received",
              "New employer registered",
              "Senior React Developer position approved",
            ].map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <div>
                  <p className="text-sm text-gray-700">{activity}</p>
                  <p className="mt-1 text-xs text-gray-400">
                    {index + 1} hour ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
