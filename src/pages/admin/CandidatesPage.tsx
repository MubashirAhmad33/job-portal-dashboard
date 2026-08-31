import { Eye, Mail, Phone, Download, MoreHorizontal } from 'lucide-react'
import { PageHeader } from '../../components/common/PageHeader'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'

interface Candidate {
    id: string
    name: string
    email: string
    phone: string
    position: string
    status: 'active' | 'inactive' | 'pending' | 'rejected'
    experience: string
    appliedDate: string
}

const candidates: Candidate[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 123-4567',
        position: 'Senior Frontend Developer',
        status: 'active',
        experience: '5+ years',
        appliedDate: '2024-08-28',
    },
    {
        id: '2',
        name: 'Michael Chen',
        email: 'michael.chen@email.com',
        phone: '+1 (555) 234-5678',
        position: 'Full Stack Engineer',
        status: 'pending',
        experience: '3+ years',
        appliedDate: '2024-08-29',
    },
    {
        id: '3',
        name: 'Emma Williams',
        email: 'emma.williams@email.com',
        phone: '+1 (555) 345-6789',
        position: 'UI/UX Designer',
        status: 'active',
        experience: '4+ years',
        appliedDate: '2024-08-27',
    },
    {
        id: '4',
        name: 'David Martinez',
        email: 'david.martinez@email.com',
        phone: '+1 (555) 456-7890',
        position: 'DevOps Engineer',
        status: 'inactive',
        experience: '6+ years',
        appliedDate: '2024-08-25',
    },
    {
        id: '5',
        name: 'Jessica Lee',
        email: 'jessica.lee@email.com',
        phone: '+1 (555) 567-8901',
        position: 'Product Manager',
        status: 'active',
        experience: '7+ years',
        appliedDate: '2024-08-26',
    },
    {
        id: '6',
        name: 'Robert Taylor',
        email: 'robert.taylor@email.com',
        phone: '+1 (555) 678-9012',
        position: 'Backend Developer',
        status: 'pending',
        experience: '4+ years',
        appliedDate: '2024-08-30',
    },
]

const getStatusColor = (status: Candidate['status']) => {
    const colors: Record<Candidate['status'], string> = {
        active: 'bg-emerald-100 text-emerald-700',
        inactive: 'bg-slate-100 text-slate-700',
        pending: 'bg-amber-100 text-amber-700',
        rejected: 'bg-red-100 text-red-700',
    }
    return colors[status]
}

export function CandidatesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Management"
                title="Candidates"
                action={<Button>Add Candidate</Button>}
            />

            <div className="grid gap-6 md:grid-cols-3 mb-6">
                <Card className="p-4">
                    <p className="text-sm font-medium text-slate-500">Total Candidates</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">{candidates.length}</p>
                </Card>
                <Card className="p-4">
                    <p className="text-sm font-medium text-slate-500">Active</p>
                    <p className="mt-3 text-3xl font-semibold text-emerald-600">
                        {candidates.filter(c => c.status === 'active').length}
                    </p>
                </Card>
                <Card className="p-4">
                    <p className="text-sm font-medium text-slate-500">Pending Review</p>
                    <p className="mt-3 text-3xl font-semibold text-amber-600">
                        {candidates.filter(c => c.status === 'pending').length}
                    </p>
                </Card>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Contact</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Position</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Experience</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Applied</th>
                                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map((candidate) => (
                                <tr
                                    key={candidate.id}
                                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-violet-200 flex items-center justify-center">
                                                <span className="text-sm font-medium text-violet-700">
                                                    {candidate.name
                                                        .split(' ')
                                                        .map((n) => n[0])
                                                        .join('')}
                                                </span>
                                            </div>
                                            <span className="ml-3 font-medium text-slate-900">{candidate.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Mail size={14} />
                                                {candidate.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Phone size={14} />
                                                {candidate.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{candidate.position}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{candidate.experience}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                                                candidate.status,
                                            )}`}
                                        >
                                            {candidate.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{candidate.appliedDate}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition-colors">
                                                <Eye size={16} className="text-slate-600" />
                                            </button>
                                            <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition-colors">
                                                <Download size={16} className="text-slate-600" />
                                            </button>
                                            <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition-colors">
                                                <MoreHorizontal size={16} className="text-slate-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </>
    )
}
