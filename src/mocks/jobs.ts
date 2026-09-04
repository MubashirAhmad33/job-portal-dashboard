export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  applications: number;
  status: "Published" | "Draft" | "Closed";
  createdAt: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Solutions",
    location: "Islamabad",
    type: "Full Time",
    applications: 42,
    status: "Published",
    createdAt: "2026-08-20",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Lahore",
    type: "Full Time",
    applications: 28,
    status: "Published",
    createdAt: "2026-08-18",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Remote",
    type: "Contract",
    applications: 16,
    status: "Draft",
    createdAt: "2026-08-15",
  },
  {
    id: 4,
    title: "Backend Node.js Developer",
    company: "Startup Inc.",
    location: "Karachi",
    type: "Full Time",
    applications: 31,
    status: "Published",
    createdAt: "2026-08-12",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Innovation Hub",
    location: "Remote",
    type: "Part Time",
    applications: 19,
    status: "Closed",
    createdAt: "2026-08-10",
  },
];
