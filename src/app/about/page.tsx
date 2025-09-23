import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl md:text-8xl font-bold text-gray-700 mb-8">
              about.
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Profile Image Placeholder */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <div className="text-gray-400 text-sm">Photo placeholder</div>
              </div>
            </div>

            {/* About Text */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">😎</span>
                <h2 className="text-2xl font-semibold text-white">{"Hey, I'm Gage"}</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {"I'm a Senior iOS Software Engineer with a passion for building exceptional mobile experiences. Currently leading modularization efforts at Fetch and serving on the iOS Leads Team."}
                </p>
                <p>
                  {"My expertise spans modern iOS development with Swift and SwiftUI, architectural design patterns, and team leadership. I love turning complex ideas into simple, elegant user experiences."}
                </p>
                <p>
                  {"When I'm not architecting iOS apps, I'm developing FreshWall - an innovative iPhone app for graffiti tracking - and contributing to open source projects like Swift Package Manager."}
                </p>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                CURRENT ROLE
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Senior iOS Engineer
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Leading iOS architecture and modularization at Fetch. #1 contributor among 30 engineers.
              </p>
              <div className="text-yellow-500 text-sm">Fetch • 2025 - Present</div>
            </div>

            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                SIDE PROJECT
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                FreshWall iOS App
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Building an innovative iPhone app for graffiti tracking and removal services.
              </p>
              <div className="text-yellow-500 text-sm">In Development</div>
            </div>

            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                EDUCATION
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Masters in Engineering
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Industrial & Management Systems Engineering with focus on Data Analytics.
              </p>
              <div className="text-yellow-500 text-sm">Montana State University</div>
            </div>

            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                OPEN SOURCE
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Swift Package Manager
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {"Contributing to Apple's package manager, improving developer experience."}
              </p>
              <div className="text-yellow-500 text-sm">Ongoing Contributor</div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Link
              href="/work"
              className="bg-gray-800 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 transition-colors"
            >
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                {"WHAT I'VE BUILT"}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">My work.</h3>
              <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <a
              href="https://github.com/gagehalverson"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 transition-colors"
            >
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                MY CODE
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">GitHub.</h3>
              <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <Link
              href="/consulting"
              className="bg-gray-800 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 transition-colors"
            >
              <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                WORK WITH ME
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Consulting.</h3>
              <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
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
              <Link href="/about" className="text-yellow-500">About</Link>
              <Link href="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}