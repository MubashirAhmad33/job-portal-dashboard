interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const UpdateStatusModal = ({ isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h2 className="text-xl font-semibold">
                    Update Application Status
                </h2>

                <select className="mt-5 w-full rounded-lg border p-3">
                    <option>Pending</option>
                    <option>Shortlisted</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                </select>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg border px-5 py-2"
                    >
                        Cancel
                    </button>

                    <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatusModal;