import type { ReactNode } from 'react'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { AdminSidebar } from './AdminSidebar'
import { TopNavbar } from './TopNavbar'

interface AdminLayoutProps {
    children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar mobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

                <div className="flex min-w-0 flex-1 flex-col">
                    <header className="border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-sm lg:hidden">
                        <button
                            type="button"
                            className="rounded-xl border border-slate-200 p-2 text-slate-600"
                            aria-label="Open sidebar"
                            onClick={() => setMobileSidebarOpen(true)}
                        >
                            <Menu size={18} />
                        </button>
                    </header>

                    <TopNavbar />

                    <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
                </div>
            </div>
        </div>
    )
}
