import JobForm from "../../components/jobs/JobForm";

const AddJob = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Add New Job
                </h1>

                <p className="mt-1 text-gray-500">
                    Create a new job posting for your company.
                </p>
            </div>

            <JobForm />
        </div>
    );
};

export default AddJob;