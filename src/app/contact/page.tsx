import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl md:text-8xl font-bold text-gray-700 mb-8">
              contact.
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {"Whether you're looking for iOS development consulting, technical leadership, or just want to discuss mobile app architecture, I'd love to hear from you."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-700">
                      <span className="text-xl">🕐</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Timezone</div>
                      <div className="text-white font-medium">Mountain Standard Time</div>
                      <div className="text-sm text-gray-400 mt-1">
                        Available for remote work worldwide
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Find Me Online</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hi2gage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors"
                  >
                    <span>🔗</span>
                    <span className="text-sm font-medium text-white">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gage-halverson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors"
                  >
                    <span>💼</span>
                    <span className="text-sm font-medium text-white">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl border border-yellow-500/20 p-6">
                <h4 className="font-semibold text-white mb-4">Current Availability</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-300">Available for new consulting projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm text-gray-300">Open to technical advisory roles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="consulting">iOS Development Consulting</option>
                    <option value="architecture">Architecture Review</option>
                    <option value="mentoring">Team Mentoring</option>
                    <option value="modernization">Code Modernization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="text-center mt-16">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <span className="text-sm">👨‍💻</span>
              </div>
            </div>
            <nav className="flex justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
              <Link href="/contact" className="text-yellow-500">Contact</Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}