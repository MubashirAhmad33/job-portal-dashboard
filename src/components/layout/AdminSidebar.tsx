import {
    BriefcaseBusiness,
    Building2,
    FileText,
    LayoutDashboard,
    MapPin,
    MessageSquareText,
    Settings,
    ShieldCheck,
    Users,
    X,
} from 'lucide-react'
import { clsx } from 'clsx'

type PageType = 'dashboard' | 'candidates' | 'employers' | 'jobs' | 'applications' | 'reports' | 'locations' | 'settings'

interface NavigationItem {
    label: string
    icon: any
    page: PageType
}

const navigationItems: NavigationItem[] = [
    { label: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
    { label: 'Candidates', icon: Users, page: 'candidates' },
    { label: 'Employers', icon: Building2, page: 'employers' },
    { label: 'Jobs', icon: BriefcaseBusiness, page: 'jobs' },
    { label: 'Applications', icon: FileText, page: 'applications' },
    { label: 'Reports', icon: MessageSquareText, page: 'reports' },
    { label: 'Locations', icon: MapPin, page: 'locations' },
    { label: 'Settings', icon: Settings, page: 'settings' },
]

const utilityItems = [{ label: 'Security Center', icon: ShieldCheck }]

interface AdminSidebarProps {
    mobileOpen: boolean
    onClose: () => void
    currentPage: PageType
    onPageChange: (page: PageType) => void
}

export function AdminSidebar({ mobileOpen, onClose, currentPage, onPageChange }: AdminSidebarProps) {
    return (
        <>
            <aside
                className={clsx(
                    'fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-slate-950 text-slate-100 transition-transform duration-200 lg:static lg:translate-x-0',
                    mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
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
                            onClick={onClose}
                            aria-label="Close sidebar"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <nav className="mt-3 flex-1 space-y-1 px-3">
                        {navigationItems.map(({ label, icon: Icon, page }) => (
                            <button
                                key={label}
                                type="button"
                                onClick={() => onPageChange(page)}
                                className={clsx(
                                    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors',
                                    currentPage === page
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

            {mobileOpen && (
                <button
                    type="button"
                    className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
                    onClick={onClose}
                    aria-label="Close mobile overlay"
                />
            )}
        </>
    )
}
