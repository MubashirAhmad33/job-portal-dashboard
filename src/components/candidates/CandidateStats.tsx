import { Users, UserCheck, BadgeCheck, UserRoundX } from "lucide-react";
import StatCard from "../dashboard/StatCard";

const CandidateStats = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
                title="Total Candidates"
                value={245}
                icon={<Users size={28} />}
                color="bg-blue-100 text-blue-600"
            />

            <StatCard
                title="Active"
                value={180}
                icon={<UserCheck size={28} />}
                color="bg-green-100 text-green-600"
            />

            <StatCard
                title="Shortlisted"
                value={42}
                icon={<BadgeCheck size={28} />}
                color="bg-yellow-100 text-yellow-600"
            />

            <StatCard
                title="Rejected"
                value={23}
                icon={<UserRoundX size={28} />}
                color="bg-red-100 text-red-600"
            />
        </div>
    );
};

export default CandidateStats;