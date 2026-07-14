import CandidateProfileCard from "../../components/candidates/CandidateProfileCard";

const CandidateProfile = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Candidate Profile
                </h1>

                <p className="mt-1 text-gray-500">
                    View the candidate's personal information, experience, skills, and resume.
                </p>
            </div>

            {/* Profile Card */}
            <CandidateProfileCard />
        </div>
    );
};

export default CandidateProfile;