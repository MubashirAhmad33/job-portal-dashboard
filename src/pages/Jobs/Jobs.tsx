import JobFilters from "../../components/jobs/JobFilters";
import JobStats from "../../components/jobs/JobStats";
import JobTable from "../../components/jobs/JobTable";

const Jobs = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Jobs</h1>
                <p className="mt-1 text-gray-500">
                    Manage all job postings from one place.
                </p>
            </div>

            {/* Statistics */}
            <JobStats />

            {/* Filters */}
            <JobFilters />

            {/* Jobs Table */}
            <JobTable />
        </div>
    );
};

export default Jobs;