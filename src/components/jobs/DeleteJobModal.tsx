
import { TriangleAlert } from "lucide-react";

interface DeleteJobModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteJobModal = ({
    isOpen,
    onClose,
    onDelete,
}: DeleteJobModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <TriangleAlert size={28} className="text-red-600" />
                </div>
                {/* Header */}
                <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Delete Job
                    </h2>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                    <p className="text-gray-600">
                        Are you sure you want to delete this job posting?
                    </p>

                    <p className="mt-2 text-sm text-red-500">
                        This action cannot be undone.
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onDelete}
                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteJobModal;