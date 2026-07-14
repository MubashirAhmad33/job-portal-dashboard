import type { ReactNode } from "react";
interface StatCardProps {
    title: string;
    value: number | string;
    icon: ReactNode;
    color?: string;
}




const StatCard = ({
    title,
    value,
    icon,
    color = "bg-blue-100 text-blue-600",
}: StatCardProps) => {
    return (
        <div className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <h2 className="mt-2 text-3xl font-bold">{value}</h2>
            </div>

            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${color}`}>
                {icon}
            </div>
        </div>
    );
};

export default StatCard;