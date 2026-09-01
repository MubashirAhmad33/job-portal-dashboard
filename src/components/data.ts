export const dashboardData = {
  header: {
    title: "Job Portal Admin Dashboard",
    subtitle:
      "Monitor jobs, candidates, employers, and recruitment activity from one place.",
    actions: [
      {
        label: "Post a Job",
        href: "/jobs/create",
      },
      {
        label: "View Reports",
        href: "/reports",
      },
    ],
  },

  stats: [
    {
      title: "Total Jobs",
      value: "1,248",
      change: "+12.5%",
      trend: "up",
      description: "vs. last month",
      icon: "briefcase",
    },
    {
      title: "Active Jobs",
      value: "856",
      change: "+8.2%",
      trend: "up",
      description: "currently accepting applications",
      icon: "clipboard-check",
    },
    {
      title: "Total Candidates",
      value: "24,680",
      change: "+15.8%",
      trend: "up",
      description: "registered candidates",
      icon: "users",
    },
    {
      title: "Applications",
      value: "8,426",
      change: "+10.4%",
      trend: "up",
      description: "this month",
      icon: "file-text",
    },
  ],

  recruitmentOverview: {
    title: "Recruitment Overview",
    period: "Last 6 months",
    data: [
      { month: "Apr", applications: 820, hired: 126 },
      { month: "May", applications: 1040, hired: 158 },
      { month: "Jun", applications: 1180, hired: 174 },
      { month: "Jul", applications: 1320, hired: 192 },
      { month: "Aug", applications: 1460, hired: 218 },
      { month: "Sep", applications: 1606, hired: 246 },
    ],
  },

  recentJobs: [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechNova Solutions",
      location: "Remote",
      type: "Full Time",
      applications: 128,
      status: "Active",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Labs",
      location: "Islamabad",
      type: "Full Time",
      applications: 86,
      status: "Active",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "GrowthHub",
      location: "Lahore",
      type: "Full Time",
      applications: 64,
      status: "Active",
      posted: "5 days ago",
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "CloudWorks",
      location: "Karachi",
      type: "Full Time",
      applications: 92,
      status: "Pending",
      posted: "1 week ago",
    },
    {
      id: 5,
      title: "Junior Data Analyst",
      company: "DataSphere",
      location: "Remote",
      type: "Part Time",
      applications: 51,
      status: "Closed",
      posted: "2 weeks ago",
    },
  ],

  recentApplications: [
    {
      id: 1,
      candidate: "Ali Hassan",
      position: "Senior React Developer",
      company: "TechNova Solutions",
      status: "Shortlisted",
      applied: "1 hour ago",
    },
    {
      id: 2,
      candidate: "Ayesha Khan",
      position: "UI/UX Designer",
      company: "Creative Labs",
      status: "Under Review",
      applied: "3 hours ago",
    },
    {
      id: 3,
      candidate: "Hamza Ahmed",
      position: "Backend Engineer",
      company: "CloudWorks",
      status: "Interview",
      applied: "5 hours ago",
    },
    {
      id: 4,
      candidate: "Sara Malik",
      position: "Marketing Manager",
      company: "GrowthHub",
      status: "Rejected",
      applied: "Yesterday",
    },
  ],

  topCompanies: [
    {
      name: "TechNova Solutions",
      jobs: 42,
      applications: 1248,
      hires: 86,
    },
    {
      name: "Creative Labs",
      jobs: 28,
      applications: 864,
      hires: 54,
    },
    {
      name: "CloudWorks",
      jobs: 24,
      applications: 732,
      hires: 48,
    },
    {
      name: "GrowthHub",
      jobs: 19,
      applications: 586,
      hires: 37,
    },
  ],

  jobCategories: [
    { name: "Software Development", jobs: 324, percentage: 26 },
    { name: "Design & Creative", jobs: 186, percentage: 15 },
    { name: "Marketing", jobs: 142, percentage: 11 },
    { name: "Sales", jobs: 128, percentage: 10 },
    { name: "Finance & Accounting", jobs: 96, percentage: 8 },
    { name: "Customer Support", jobs: 82, percentage: 7 },
    { name: "Other", jobs: 290, percentage: 23 },
  ],

  quickActions: [
    {
      title: "Post New Job",
      description: "Create and publish a new job vacancy.",
      icon: "plus-circle",
      href: "/jobs/create",
    },
    {
      title: "Manage Jobs",
      description: "Review, edit, approve, or close jobs.",
      icon: "briefcase",
      href: "/jobs",
    },
    {
      title: "Review Applications",
      description: "View and manage candidate applications.",
      icon: "file-check",
      href: "/applications",
    },
    {
      title: "Manage Companies",
      description: "Manage employers and company profiles.",
      icon: "building",
      href: "/companies",
    },
  ],

  notifications: [
    {
      id: 1,
      title: "New job awaiting approval",
      description: "Senior Product Manager at InnovateX",
      time: "10 minutes ago",
      type: "job",
    },
    {
      id: 2,
      title: "New company registration",
      description: "NextGen Technologies submitted a registration request.",
      time: "1 hour ago",
      type: "company",
    },
    {
      id: 3,
      title: "Application milestone reached",
      description: "Your portal received 1,000 applications this week.",
      time: "3 hours ago",
      type: "application",
    },
  ],
};
