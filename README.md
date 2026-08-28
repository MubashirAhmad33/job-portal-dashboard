# Job Portal Admin Dashboard

A modern admin dashboard for managing a job portal platform, including candidates, employers, job listings, applications, reports, notifications, and system settings.

## Overview

This project provides a clean, responsive, and scalable admin interface for recruitment and hiring operations. It enables administrators to monitor platform activity, review job posts, manage employer and candidate records, approve or reject applications, and control core platform configuration.

## Features

### Dashboard

- Platform overview and KPI cards
- Candidate, employer, job, and application statistics
- Recent activity feed
- Recruitment and growth analytics
- Interactive charts for trend analysis

### Candidate Management

- Search and filter candidates
- View full profiles and resumes
- Track education, experience, and skills
- Activate, deactivate, or delete accounts
- Manage candidate applications

### Employer Management

- Review company profiles and verification status
- Approve, reject, suspend, or delete employers
- Manage company data and account status
- Monitor employer activity

### Job Management

- Create, edit, approve, publish, reject, and delete jobs
- Filter by status, category, and location
- Search jobs by title or employer
- Manage featured and expired listings

### Application Management

- Review applicant records and job matches
- Update application statuses
- View candidate and employer details
- Filter applications by stage or status

### Reports & Analytics

- Candidate registrations over time
- Employer registrations
- Job posting trends
- Applications by status
- Jobs by category and location
- Export-ready data views

### Admin Controls

- Admin login and protected routes
- Role-based access control
- Notification center
- Profile management
- System settings configuration

## Tech Stack

- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS
- Routing: React Router
- Data Fetching: TanStack Query
- Form Validation: React Hook Form + Zod
- Charts: Recharts
- State Management: Redux Toolkit
- Icons: Lucide React and React Icons
- Backend (planned): Node.js + Express + TypeScript
- Database (planned): PostgreSQL + Prisma
- Authentication (planned): JWT + bcrypt

## Project Structure

```text
job-portal-admin-dashboard/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── store/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── index.html
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
git clone <repository-url>
cd job-portal-admin-dashboard
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file in the project root if needed for API config and secrets.

Example:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Job Portal Admin Dashboard
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Admin Login Flow

The admin experience is built around protected routes and role-based access. After authentication, administrators are redirected to the dashboard and gain access to management modules based on their permission level.

## Responsive Design

The interface is designed to work across desktop, tablet, and mobile devices with flexible layouts, collapsible navigation, and adaptive data tables.

## Security Considerations

- Protected admin routes
- Secure authentication patterns
- Role-based authorization
- Validation for user input
- Environment-based configuration
- Safe handling of sensitive details

## Roadmap

- Complete dashboard UI and analytics
- Add admin authentication and protected routing
- Add backend API and database integration
- Implement CRUD operations for candidates, employers, jobs, and applications
- Add reports, notifications, and administrative settings
- Add tests and documentation

## License

This project is licensed under the MIT License.

## Author

Job Portal Admin Dashboard Project
