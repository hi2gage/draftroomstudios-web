import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function Consulting() {
  const services = [
    {
      title: "iOS Architecture",
      description: "Design scalable iOS architectures with modern patterns and modularization strategies.",
      icon: "🏗️",
      price: "Custom pricing"
    },
    {
      title: "Swift Development",
      description: "Build modern iOS applications using the latest Swift and SwiftUI technologies.",
      icon: "📱",
      price: "Project-based pricing"
    },
    {
      title: "Code Modernization",
      description: "Modernize legacy iOS codebases with current best practices, improve performance, and reduce technical debt.",
      icon: "🔧",
      price: "Let's discuss scope"
    },
    {
      title: "AI-Assisted Development",
      description: "Implement AI-powered workflows to accelerate development and improve efficiency.",
      icon: "🤖",
      price: "Custom consultation"
    }
  ]

  const testimonials = [
    {
      quote: "Gage's leadership and technical expertise were instrumental in our iOS modularization efforts.",
      author: "Senior iOS Engineer",
      company: "Tech Company"
    },
    {
      quote: "His AI-assisted development approach significantly improved our team's velocity.",
      author: "Engineering Manager",
      company: "Startup"
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
              consulting.
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I help companies build exceptional iOS applications through architecture design,
              modern development practices, and technical leadership.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 p-8 hover:border-yellow-500/50 transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-yellow-500 font-medium">
                    {service.price}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Work With Me */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              Why Work With Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  #1 contributor at Fetch, led modularization of 30-engineer codebase,
                  and successfully launched high-profile features.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Modern Approach</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Up-to-date with latest iOS technologies, AI-assisted development,
                  and modern architectural patterns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Team-Focused</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Experience mentoring teams, leading cross-functional projects,
                  and building sustainable development practices.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
                <div className="text-yellow-500 text-3xl mb-4">{'"'}</div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-yellow-500 font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-2xl border border-yellow-500/20 p-8 mb-16">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Current Availability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-300 text-sm">
                  Available for new projects
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-gray-300 text-sm">
                  Open to advisory roles
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {"Let's discuss your iOS development needs and how I can help your team build exceptional mobile experiences."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Start a Conversation
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
              <Link href="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
              <Link href="/consulting" className="text-yellow-500">Consulting</Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}