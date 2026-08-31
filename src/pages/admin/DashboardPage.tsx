import { PageHeader } from '../../components/common/PageHeader'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

const overviewCards = [
    { title: 'Overview', value: '---', tag: 'Live' },
    { title: 'Candidates', value: '---', tag: 'Tracked' },
    { title: 'Employers', value: '---', tag: 'Verified' },
    { title: 'Jobs', value: '---', tag: 'Active' },
]

const workspacePanels = [
    { title: 'Candidates', description: 'Review profiles and applicant activity', tone: 'bg-violet-100 text-violet-700' },
    { title: 'Employers', description: 'Manage company records and approvals', tone: 'bg-sky-100 text-sky-700' },
    { title: 'Jobs', description: 'Moderate listings and posting status', tone: 'bg-emerald-100 text-emerald-700' },
    { title: 'Applications', description: 'Track applicant pipeline and decisions', tone: 'bg-amber-100 text-amber-700' },
]

const notificationItems = [
    { title: 'New employer registration', detail: 'Acme Studio submitted a company profile' },
    { title: 'Job approval queue', detail: 'Three listings require admin review' },
    { title: 'Application review', detail: 'Two candidates need final decision updates' },
]

export function DashboardPage() {
    return (
        <>
            <PageHeader
                eyebrow="Welcome back"
                title="Admin Dashboard"
                action={<Button>Quick actions</Button>}
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {overviewCards.map(({ title, value, tag }) => (
                    <Card key={title} className="p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-500">{title}</p>
                            <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                                {tag}
                            </span>
                        </div>

                        <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-end justify-between">
                                <span className="text-2xl font-semibold text-slate-900">{value}</span>
                                <span className="text-xs font-medium text-slate-400">Pending</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
                <Card>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-900">Workspace</h2>
                        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                            Ready
                        </span>
                    </div>

                    <div className="space-y-3">
                        {workspacePanels.map(({ title, description, tone }) => (
                            <div key={title} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold ${tone}`}>
                                        {title.slice(0, 1)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-800">{title}</p>
                                        <p className="text-sm text-slate-500">{description}</p>
                                    </div>
                                </div>

                                <Button variant="secondary" size="sm">
                                    Open
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
                        <button type="button" className="text-sm font-medium text-violet-600">
                            Mark all read
                        </button>
                    </div>

                    <div className="space-y-3">
                        {notificationItems.map(({ title, detail }) => (
                            <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <p className="font-medium text-slate-800">{title}</p>
                                <p className="mt-1 text-sm text-slate-500">{detail}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    )
}
