import { useState } from "react";
import ApplicationFilters from "../../components/applications/ApplicationFilters";
import ApplicationStats from "../../components/applications/ApplicationStats";
import ApplicationTable from "../../components/applications/ApplicationTable";
import ViewApplication from "./ViewApplication";

const Applications = () => {
    const [modal, setModal] = useState<string | null>(null);
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Applications
                </h1>

                <p className="mt-1 text-gray-500">
                    Review, manage, and track all candidate applications.
                </p>
            </div>

            {/* Statistics */}
            <ApplicationStats />

            {/* Filters */}
            <ApplicationFilters />

            {/* Applications Table */}
            <ApplicationTable modal={modal}
                setModal={setModal} />



            {modal === "view" && (<ViewApplication onClose={() => setModal(null)} />)}
        </div>
    );
};

export default Applications;