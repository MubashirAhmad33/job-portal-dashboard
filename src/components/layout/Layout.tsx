import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex bg-gray-100 ml-0 lg:ml-64">
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div className="flex-1">
                <Navbar setIsOpen={setIsOpen} />

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;