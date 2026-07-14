import {
    BriefcaseBusiness,
    CircleCheckBig,
    CircleX,
    Clock3,
} from "lucide-react";

import StatCard from "../dashboard/StatCard";

const JobStats = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
                title="Total Jobs"
                value={120}
                icon={<BriefcaseBusiness size={28} />}
                color="bg-blue-100 text-blue-600"
            />

            <StatCard
                title="Open Jobs"
                value={85}
                icon={<CircleCheckBig size={28} />}
                color="bg-green-100 text-green-600"
            />

            <StatCard
                title="Closed Jobs"
                value={25}
                icon={<CircleX size={28} />}
                color="bg-red-100 text-red-600"
            />

            <StatCard
                title="Draft Jobs"
                value={10}
                icon={<Clock3 size={28} />}
                color="bg-yellow-100 text-yellow-600"
            />
        </div>
    );
};

export default JobStats;