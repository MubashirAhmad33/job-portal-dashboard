import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Bell, ChevronDown, LogOut, Search } from 'lucide-react'
import { Button } from '../ui/Button'

export function TopNavbar() {
    return (
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="rounded-xl border border-slate-200 p-2 text-slate-600 lg:hidden"
                        aria-label="Open sidebar"
                    >
                        <Search size={18} />
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

                    <Button variant="primary" size="sm" className="hidden md:inline-flex">
                        Quick actions
                    </Button>
                </div>
            </div>
        </header>
    )
}
