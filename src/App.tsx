import React, { useState } from 'react'

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  tags: string[]
}

const FEATURED_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $150k',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Designify',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100k - $130k',
    tags: ['Figma', 'UI/UX', 'System Design'],
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'CloudData',
    location: 'San Francisco, CA',
    type: 'Contract',
    salary: '$80/hr',
    tags: ['Node.js', 'PostgreSQL', 'AWS'],
  },
]

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationTerm, setLocationTerm] = useState('')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
              J
            </div>
            <span className="text-xl font-bold text-slate-900">JobHub</span>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#jobs" className="hover:text-blue-600 transition">Find Jobs</a>
            <a href="#companies" className="hover:text-blue-600 transition">Companies</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 font-medium hover:text-slate-900 px-3 py-2">
              Log In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm">
              Post a Job
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Find Your Dream Job Today
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300">
              Discover thousands of job opportunities with top companies around the world.
            </p>

            {/* Search Bar */}
            <div className="mt-8 bg-white p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="City, state, or remote"
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section id="jobs" className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Jobs</h2>
              <p className="text-slate-600 mt-1">Explore top opportunities curated for you</p>
            </div>
            <a href="#all-jobs" className="text-blue-600 font-semibold hover:underline">
              View all jobs &rarr;
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{job.salary}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-4">{job.title}</h3>
                  <p className="text-slate-600 font-medium">{job.company}</p>
                  <p className="text-sm text-slate-400 mt-1">{job.location}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JobHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App