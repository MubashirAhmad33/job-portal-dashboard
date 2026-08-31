import type { ReactNode } from 'react'

interface PageHeaderProps {
    eyebrow?: string
    title: string
    action?: ReactNode
}

export function PageHeader({ eyebrow, title, action }: PageHeaderProps) {
    return (
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
                {eyebrow && <p className="text-sm font-medium text-violet-600">{eyebrow}</p>}
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {title}
                </h1>
            </div>

            {action}
        </div>
    )
}
