import {
    BriefcaseBusiness,
    Download,
    Mail,
    MapPin,
    Phone,
    User,
} from "lucide-react";

const CandidateApplicationDetails = () => {
    return (
        <div className="space-y-6">
            {/* Candidate Information */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                        <User size={22} />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-800">
                        Candidate Information
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <h3 className="font-medium text-gray-800">John Doe</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>

                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-400" />
                            <span>john@example.com</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Phone</p>

                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-gray-400" />
                            <span>+92 300 1234567</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Location</p>

                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-400" />
                            <span>Lahore, Pakistan</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Information */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-green-100 p-2 text-green-600">
                        <BriefcaseBusiness size={22} />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-800">
                        Applied Job
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-gray-500">Position</p>
                        <h3 className="font-medium">React Frontend Developer</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Experience</p>
                        <h3 className="font-medium">3 Years</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Applied Date</p>
                        <h3 className="font-medium">14 July 2026</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Status</p>

                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                            Pending
                        </span>
                    </div>
                </div>
            </div>

            {/* Resume & Cover Letter */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-semibold text-gray-800">
                    Resume & Cover Letter
                </h2>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-medium text-gray-800">Resume.pdf</p>
                        <p className="text-sm text-gray-500">
                            Uploaded by the candidate
                        </p>
                    </div>

                    <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700">
                        <Download size={18} />
                        Download Resume
                    </button>
                </div>

                <div className="mt-8">
                    <h3 className="mb-3 font-semibold text-gray-800">
                        Cover Letter
                    </h3>

                    <p className="leading-7 text-gray-600">
                        I am passionate about building modern React applications and have
                        over three years of experience working with React.js, Next.js, and
                        TypeScript. I am excited about the opportunity to contribute to your
                        team and help build high-quality products.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CandidateApplicationDetails;