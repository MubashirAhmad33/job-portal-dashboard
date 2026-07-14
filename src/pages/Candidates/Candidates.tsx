import CandidateStats from "../../components/candidates/CandidateStats";
import CandidateFilters from "../../components/candidates/CandidateFilters";
import CandidateTable from "../../components/candidates/CandidateTable";

const Candidates = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Candidates
                </h1>

                <p className="mt-1 text-gray-500">
                    Manage, search, and review registered candidates.
                </p>
            </div>

            {/* Statistics */}
            <CandidateStats />

            {/* Filters */}
            <CandidateFilters />

            {/* Candidates Table */}
            <CandidateTable />
        </div>
    );
};

export default Candidates;