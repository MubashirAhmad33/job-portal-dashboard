import { FileText, Clock3, CircleCheckBig, CircleX } from "lucide-react";
import StatCard from "../dashboard/StatCard";

const ApplicationStats = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
                title="Total Applications"
                value={326}
                icon={<FileText size={28} />}
                color="bg-blue-100 text-blue-600"
            />

            <StatCard
                title="Pending"
                value={96}
                icon={<Clock3 size={28} />}
                color="bg-yellow-100 text-yellow-600"
            />

            <StatCard
                title="Shortlisted"
                value={182}
                icon={<CircleCheckBig size={28} />}
                color="bg-green-100 text-green-600"
            />

            <StatCard
                title="Rejected"
                value={48}
                icon={<CircleX size={28} />}
                color="bg-red-100 text-red-600"
            />
        </div>
    );
};

export default ApplicationStats;