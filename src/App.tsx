import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  FileText,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  MessageSquareText,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'
import { clsx } from 'clsx'

const navigationItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Candidates', icon: Users },
  { label: 'Employers', icon: Building2 },
  { label: 'Jobs', icon: BriefcaseBusiness },
  { label: 'Applications', icon: FileText },
  { label: 'Reports', icon: MessageSquareText },
  { label: 'Locations', icon: MapPin },
  { label: 'Settings', icon: Settings },
]

const utilityItems = [{ label: 'Security Center', icon: ShieldCheck }]

const workspacePanels = [
  { title: 'Candidates', description: 'Review profiles and applicant activity', tone: 'bg-violet-100 text-violet-700' },
  { title: 'Employers', description: 'Manage company records and approvals', tone: 'bg-sky-100 text-sky-700' },
  { title: 'Jobs', description: 'Moderate listings and posting status', tone: 'bg-emerald-100 text-emerald-700' },
  { title: 'Applications', description: 'Track applicant pipeline and decisions', tone: 'bg-amber-100 text-amber-700' },
]

const notificationItems = [
  { title: 'New employer registration', detail: 'Acme Studio submitted a company profile' },
  { title: 'Job approval queue', detail: 'Three listings require admin review' },
  { title: 'Application review', detail: 'Two candidates need final decision updates' },
]

function App() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex h-screen overflow-hidden">
        <aside
          className={clsx(
            'fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-slate-950 text-slate-100 transition-transform duration-200 lg:static lg:translate-x-0',
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-sm font-bold text-violet-200">
                  JP
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Job Portal</p>
                  <p className="text-xs text-slate-400">Admin Console</p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg border border-slate-700 p-2 text-slate-300 lg:hidden"
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-3 flex-1 space-y-1 px-3">
              {navigationItems.map(({ label, icon: Icon, active }) => (
                <button
                  key={label}
                  type="button"
                  className={clsx(
                    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors',
                    active
                      ? 'bg-violet-500/15 text-violet-100 ring-1 ring-violet-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                  )}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <div className="border-t border-slate-800 px-3 py-4">
              <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Tools
              </p>
              {utilityItems.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {mobileSidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close mobile overlay"
          />
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-2 text-slate-600 lg:hidden"
                  aria-label="Open sidebar"
                  onClick={() => setMobileSidebarOpen(true)}
                >
                  <Menu size={18} />
                </button>

                <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 sm:flex">
                  <Search size={16} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-40 border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="relative rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-600 transition-colors hover:bg-slate-100"
                  aria-label="Notifications"
                >
                  <Bell size={18} />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-semibold text-white">
                    4
                  </span>
                </button>

                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2 py-1.5 text-left shadow-sm transition-colors hover:bg-slate-50">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">
                        AR
                      </div>

                      <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-slate-900">Aisha Rahman</p>
                        <p className="text-xs text-slate-500">Super Admin</p>
                      </div>

                      <ChevronDown size={16} className="hidden text-slate-500 sm:block" />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      align="end"
                      sideOffset={8}
                      className="z-50 min-w-[220px] rounded-xl border border-slate-200 bg-white p-1 shadow-xl"
                    >
                      <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none hover:bg-slate-100">
                        View profile
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none hover:bg-slate-100">
                        Account settings
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="my-1 h-px bg-slate-200" />
                      <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 outline-none hover:bg-rose-50">
                        <LogOut size={16} />
                        Logout
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-4 sm:p-6">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-violet-600">Welcome back</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Admin Dashboard
                </h1>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800"
              >
                Quick actions
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {['Overview', 'Candidates', 'Employers', 'Jobs'].map((title, index) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">{title}</p>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                      {index + 1}
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4">
                    <div className="h-16 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Workspace</h2>
                  <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                    Ready
                  </span>
                </div>

                <div className="space-y-3">
                  {workspacePanels.map(({ title, description, tone }) => (
                    <div
                      key={title}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={clsx('flex h-10 w-10 items-center justify-center rounded-lg font-semibold', tone)}>
                          {title.slice(0, 1)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{title}</p>
                          <p className="text-sm text-slate-500">{description}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                      >
                        Open
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
                  <button type="button" className="text-sm font-medium text-violet-600">
                    Mark all read || mark all done
                  </button>
                </div>

                <div className="space-y-3">
                  {notificationItems.map(({ title, detail }) => (
                    <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <p className="font-medium text-slate-800">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{detail}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App