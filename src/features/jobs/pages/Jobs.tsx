import { Plus, Search, MoreVertical } from "lucide-react";
import Button from "../../../components/ui/Button";
import DataTable, { type Column } from "../../../components/common/DataTable";
import { jobs, type Job } from "../../../mocks/jobs";
const columns: Column<Job>[] = [
    {
        key: "title",
        label: "Job",
        render: (job) => (
            <div>
                <p className="font-medium text-gray-900">{job.title}</p>
                <p className="text-xs text-gray-500">{job.company}</p>
            </div>
        ),
    },
    {
        key: "location",
        label: "Location",
    },
    {
        key: "type",
        label: "Type",
    },
    {
        key: "applications",
        label: "Applications",
    },
    {
        key: "status",
        label: "Status",
        render: (job) => (
            <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${job.status === "Published"
                    ? "bg-green-50 text-green-700"
                    : job.status === "Draft"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-yellow-50 text-yellow-700"
                    }`}
            >
                {job.status}
            </span>
        ),
    },
    {
        key: "actions",
        label: "",
        render: () => (
            <button className="rounded-lg p-2 hover:bg-gray-100">
                <MoreVertical size={18} />
            </button>
        ),
    },
];

export default function Jobs() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage all job postings.
                    </p>
                </div>

                <Button>
                    <Plus size={18} className="mr-2" />
                    Add Job
                </Button>
            </div>

            <div className="rounded-xl border bg-white shadow-sm">
                <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 sm:w-72"
                        />
                    </div>

                    <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none">
                        <option>All Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                        <option>Closed</option>
                    </select>
                </div>

                <DataTable columns={columns} data={jobs} />
            </div>
        </div>
    );
}
