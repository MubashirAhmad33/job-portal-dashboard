import { X } from "lucide-react";
import CandidateApplicationDetails from "../../components/applications/CandidateApplicationDetails";

interface ViewApplicationProps {
    onClose: () => void;
}

const ApplicationDetails = ({ onClose }: ViewApplicationProps) => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/40 backdrop-blur-md">
            <div className="flex min-h-screen items-center justify-center p-6">
                <div className="relative flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

                    {/* Decorative Top Border */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

                    {/* Header */}
                    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
                        <div className="flex items-start justify-between px-8 py-6">

                            <div>
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                                        Candidate
                                    </span>

                                    <span className="text-sm text-slate-400">
                                        •
                                    </span>

                                    <span className="text-sm text-slate-500">
                                        Application Review
                                    </span>
                                </div>

                                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                                    Application Details
                                </h1>

                                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                                    Review candidate information, resume,
                                    experience, interview progress, and hiring
                                    status before taking further action.
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </header>

                    {/* Scrollable Content */}
                    <main className="flex-1 overflow-y-auto bg-slate-50 px-8 py-8">
                        <CandidateApplicationDetails />
                    </main>

                    {/* Footer */}
                    <footer className="sticky bottom-0 flex items-center justify-between border-t border-slate-200 bg-white px-8 py-5">

                        <div className="text-sm text-slate-500">
                            Last updated 2 hours ago
                        </div>

                        <div className="flex gap-3">

                            <button
                                onClick={onClose}
                                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                                Cancel
                            </button>

                            <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black">
                                Download Resume
                            </button>

                            <button className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
                                Update Status
                            </button>

                        </div>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default ApplicationDetails;