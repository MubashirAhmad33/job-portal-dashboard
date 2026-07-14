import JobForm from "../../components/jobs/JobForm";

const EditJob = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Edit Job
                </h1>

                <p className="mt-1 text-gray-500">
                    Update the details of an existing job posting.
                </p>
            </div>

            <JobForm />
        </div>
    );
};

export default EditJob;