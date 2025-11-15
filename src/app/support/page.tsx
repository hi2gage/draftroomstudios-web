import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl md:text-8xl font-bold text-gray-700 mb-8">
              support.
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get help with DraftRoom Studios apps and services
            </p>
          </div>

          {/* Apps Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notes to Reminders */}
              <Link
                href="/support/notes-to-reminders"
                className="bg-gray-800 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <span className="text-3xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Notes to Reminders</h3>
                    <p className="text-sm text-gray-400">iOS App</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Import Apple Notes checklists to Reminders instantly
                </p>
                <div className="flex items-center gap-2 text-yellow-500 text-sm">
                  <span>View FAQs & Support</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* More apps coming soon */}
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 opacity-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gray-700 flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">More Apps</h3>
                    <p className="text-sm text-gray-400">Coming Soon</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  We're working on more great apps. Stay tuned!
                </p>
              </div>
            </div>
          </div>

          {/* General Support */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">General Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
                <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                  EMAIL SUPPORT
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions or need help? We're here to assist you.
                </p>
                <a
                  href="mailto:support@draftroomstudios.com"
                  className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors"
                >
                  support@draftroomstudios.com
                </a>
              </div>

              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
                <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
                  PRIVACY
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">Your Data is Safe</h3>
                <p className="text-gray-300 text-sm mb-4">
                  All our apps prioritize your privacy with on-device processing and zero data collection.
                </p>
                <div className="text-gray-400 text-sm">
                  No tracking • No analytics • No cloud storage
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <span className="text-sm">👨‍💻</span>
              </div>
            </div>
            <nav className="flex justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/support" className="text-yellow-500">Support</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}
