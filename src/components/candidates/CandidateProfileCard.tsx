import {
    Mail,
    Phone,
    MapPin,
    BriefcaseBusiness,
    GraduationCap,
} from "lucide-react";

const CandidateProfileCard = () => {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
                <img
                    src="https://i.pravatar.cc/120"
                    alt="Candidate"
                    className="h-24 w-24 rounded-full"
                />

                <h2 className="mt-4 text-2xl font-semibold">
                    John Doe
                </h2>

                <p className="text-gray-500">
                    Frontend React Developer
                </p>
            </div>

            <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                    <Mail size={18} />
                    john@example.com
                </div>

                <div className="flex items-center gap-3">
                    <Phone size={18} />
                    +92 300 1234567
                </div>

                <div className="flex items-center gap-3">
                    <MapPin size={18} />
                    Lahore, Pakistan
                </div>

                <div className="flex items-center gap-3">
                    <BriefcaseBusiness size={18} />
                    3 Years Experience
                </div>

                <div className="flex items-center gap-3">
                    <GraduationCap size={18} />
                    BS Software Engineering
                </div>
            </div>

            <button className="mt-8 w-full rounded-lg bg-blue-600 py-2.5 text-white">
                Download Resume
            </button>
        </div>
    );
};

export default CandidateProfileCard;