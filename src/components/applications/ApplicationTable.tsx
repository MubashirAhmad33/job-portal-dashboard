import { useState, type Dispatch, type SetStateAction } from "react";


interface ApplicationTableProps {
    modal: string | null;
    setModal: Dispatch<SetStateAction<string | null>>;
}

const applications = [
    {
        id: 1,
        name: "John Doe",
        job: "React Developer",
        email: "john@example.com",
        status: "Pending",
    },
    {
        id: 2,
        name: "Sarah Khan",
        job: "Node.js Developer",
        email: "sarah@example.com",
        status: "Shortlisted",
    },
    {
        id: 3,
        name: "Ali Ahmad",
        job: "UI Designer",
        email: "ali@example.com",
        status: "Rejected",
    },
];

const ApplicationTable = ({ modal, setModal }: ApplicationTableProps) => {
    console.log("Modal is okay", modal)
    return (
        <div className="overflow-hidden rounded-xl  bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="">
                        <tr>
                            <th className="px-6 py-3 text-left">Candidate</th>
                            <th className="px-6 py-3 text-left">Applied For</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((item) => (
                            <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.job}</td>
                                <td className="px-6 py-4">{item.email}</td>
                                <td className="px-6 py-4">{item.status}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="rounded bg-blue-100 px-3 py-1 text-blue-600" onClick={() => setModal("view")}>
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationTable;