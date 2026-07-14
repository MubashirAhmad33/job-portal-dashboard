import type { Dispatch, SetStateAction } from "react";
import {
    LayoutDashboard,
    BriefcaseBusiness,
    FileText,
    Users,
    Building2,
    User,
    Settings,
    X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const menuItems = [
    {
        title: "MAIN",
        items: [
            {
                name: "Dashboard",
                path: "/",
                icon: LayoutDashboard,
            },
        ],
    },
    {
        title: "RECRUITMENT",
        items: [
            {
                name: "Jobs",
                path: "/jobs",
                icon: BriefcaseBusiness,
            },
            {
                name: "Applications",
                path: "/applications",
                icon: FileText,
            },
            {
                name: "Candidates",
                path: "/candidates",
                icon: Users,
            },
            {
                name: "Companies",
                path: "/companies",
                icon: Building2,
            },
        ],
    },
    {
        title: "ACCOUNT",
        items: [
            {
                name: "Profile",
                path: "/profile",
                icon: User,
            },
            {
                name: "Settings",
                path: "/settings",
                icon: Settings,
            },
        ],
    },
];

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            <aside
                className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          overflow-y-auto
          border-r border-gray-200
          bg-white
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
            >
                {/* Logo */}
                <div className="flex h-16 items-center justify-between border-b px-5">
                    <h2 className="text-xl font-bold text-blue-600">
                        Job Portal
                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Menu */}
                <div className="px-3 py-4">
                    {menuItems.map((section) => (
                        <div key={section.title} className="mb-6">
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                {section.title}
                            </p>

                            <ul className="space-y-1">
                                {section.items.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <li key={item.path}>
                                            <NavLink
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all
                          ${isActive
                                                        ? "bg-blue-50 text-blue-600 font-semibold"
                                                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                                                    }`
                                                }
                                            >
                                                <Icon size={20} />
                                                <span>{item.name}</span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;