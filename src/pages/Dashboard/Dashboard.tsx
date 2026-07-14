import { BriefcaseBusiness, FileText, Users, Building2 } from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import JobCard from "../../components/dashboard/JobCard";
import RecentApplications from "../../components/dashboard/RecentApplications";

const Dashboard = () => {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <p className="mt-1 text-gray-500">
                    Welcome back! Here's an overview of your job portal.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Total Jobs"
                    value={48}
                    icon={<BriefcaseBusiness size={28} />}
                    color="bg-blue-100 text-blue-600"
                />

                <StatCard
                    title="Applications"
                    value={326}
                    icon={<FileText size={28} />}
                    color="bg-green-100 text-green-600"
                />

                <StatCard
                    title="Candidates"
                    value={185}
                    icon={<Users size={28} />}
                    color="bg-yellow-100 text-yellow-600"
                />

                <StatCard
                    title="Companies"
                    value={24}
                    icon={<Building2 size={28} />}
                    color="bg-purple-100 text-purple-600"
                />
            </div>

            {/* Latest Jobs */}
            <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                    Latest Jobs
                </h2>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    <JobCard
                        title="React Frontend Developer"
                        company="Google"
                        location="Lahore"
                        type="Full Time"
                        salary="PKR 180,000"
                        status="Open"
                    />

                    <JobCard
                        title="Node.js Developer"
                        company="Microsoft"
                        location="Islamabad"
                        type="Remote"
                        salary="PKR 220,000"
                        status="Open"
                    />

                    <JobCard
                        title="UI/UX Designer"
                        company="Adobe"
                        location="Karachi"
                        type="Hybrid"
                        salary="PKR 150,000"
                        status="Closed"
                    />
                </div>
            </div>

            {/* Recent Applications */}
            <RecentApplications />
        </div>
    );
};

export default Dashboard;