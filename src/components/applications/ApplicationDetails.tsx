const ApplicationDetails = () => {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
                Candidate Details
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Phone:</strong> +92 300 1234567</p>
                <p><strong>Position:</strong> React Developer</p>
                <p><strong>Experience:</strong> 3 Years</p>
                <p><strong>Status:</strong> Pending</p>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold">Cover Letter</h3>

                <p className="mt-2 text-gray-600">
                    Passionate React developer with experience building scalable web
                    applications...
                </p>
            </div>
        </div>
    );
};

export default ApplicationDetails;