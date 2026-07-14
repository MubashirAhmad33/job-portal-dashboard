import { Menu } from "lucide-react";

interface NavbarProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsOpen }: NavbarProps) => {
    return (
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden"
            >
                <Menu size={28} />
            </button>

            <h2 className="text-xl font-semibold">
                Job Portal Dashboard
            </h2>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                M
            </div>
        </header>
    );
};

export default Navbar;