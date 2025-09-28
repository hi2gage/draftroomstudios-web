import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function Work() {
  const featuredProjects = [
    {
      title: "FreshWall",
      subtitle: "iOS GRAFFITI TRACKING APP",
      description: "A comprehensive iPhone application for tracking and managing graffiti incidents. Features real-time reporting, team collaboration, and business management tools.",
      tech: ["Swift", "SwiftUI", "Firebase", "Stripe"],
      status: "In Development",
      link: "https://freshwall.app"
    },
    {
      title: "Fetch Credit Card",
      subtitle: "HIGH-PROFILE IOS FEATURE",
      description: "Led the iOS development of Fetch's Credit Card feature, serving millions of users with seamless integration.",
      tech: ["Swift", "SwiftUI", "Modular Architecture"],
      status: "Launched",
      link: "https://fetch.com"
    }
  ]

  const companies = [
    {
      title: "Fetch",
      subtitle: "SENIOR IOS ENGINEER",
      description: "Led iOS development initiatives for one of the fastest-growing fintech companies. Spearheaded Credit Card feature launch serving millions of users.",
      tech: ["Swift", "SwiftUI", "Modular Architecture", "Banking APIs"],
      status: "2022-2024",
      link: "https://fetch.com"
    },
    {
      title: "onXmaps",
      subtitle: "IOS ENGINEER",
      description: "Developed core mapping and offline features for outdoor navigation app. Implemented offline sharing system and cross-platform solutions.",
      tech: ["Swift", "SPM", "Cross-platform", "Mapping"],
      status: "2021-2022",
      link: "https://onxmaps.com"
    },
    {
      title: "Apple",
      subtitle: "OPEN SOURCE CONTRIBUTOR",
      description: "Contributing to Swift Package Manager, improving tooling and developer experience for the iOS development community.",
      tech: ["Swift", "Package Management", "Developer Tools"],
      status: "Ongoing",
      link: "https://github.com/swiftlang/swift-package-manager/pulls?q=is%3Apr+author%3Ahi2gage+"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl md:text-8xl font-bold text-gray-700 mb-8">
              work.
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my iOS development work, from innovative mobile apps to
              high-impact features serving millions of users.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-2xl border border-gray-700 p-8 hover:border-yellow-500/50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-yellow-500 tracking-wider">
                    {project.subtitle}
                  </span>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Launched'
                      ? 'bg-green-900/30 text-green-400'
                      : project.status === 'In Development'
                      ? 'bg-blue-900/30 text-blue-400'
                      : 'bg-yellow-900/30 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Visit site</span>
                    <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Places I've Worked */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-8">Places I&apos;ve Worked</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <a
                  key={index}
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 transition-colors group cursor-pointer"
                >
                  <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                    {company.subtitle}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {company.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {company.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 border border-gray-600 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gray-700/50 text-gray-300">
                      {company.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Visit site</span>
                      <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                        <svg className="w-2.5 h-2.5 text-gray-400 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">Core Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-white font-medium">Swift & SwiftUI</div>
                <div className="text-gray-400 text-sm">Primary expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <div className="text-white font-medium">Architecture</div>
                <div className="text-gray-400 text-sm">Modular design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📦</div>
                <div className="text-white font-medium">SPM</div>
                <div className="text-gray-400 text-sm">Package management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-white font-medium">Firebase</div>
                <div className="text-gray-400 text-sm">Backend services</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-400 mb-8">
              {"Let's discuss your iOS development needs."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              {"Get in touch"} 👋
            </Link>
          </div>

          {/* Footer Navigation */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <span className="text-sm">👨‍💻</span>
              </div>
            </div>
            <nav className="flex justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/work" className="text-yellow-500">Work</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}