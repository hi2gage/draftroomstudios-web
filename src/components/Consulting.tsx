export function Consulting() {
  const services = [
    {
      title: "iOS Architecture & Design",
      description: "Design scalable iOS architectures with modern patterns, modularization strategies, and best practices for long-term maintainability.",
      features: [
        "Modular architecture design",
        "Swift Package Manager implementation",
        "MVVM and modern architectural patterns",
        "Code organization and structure",
        "Performance optimization strategies"
      ],
      icon: "🏗️",
      duration: "2-12 weeks",
      type: "Architecture"
    },
    {
      title: "Swift & SwiftUI Development",
      description: "Build modern iOS applications using the latest Swift and SwiftUI technologies, from MVPs to enterprise-scale applications.",
      features: [
        "Custom SwiftUI components and views",
        "Swift Structured Concurrency implementation",
        "Combine framework integration",
        "UIKit to SwiftUI migration",
        "iOS app development from scratch"
      ],
      icon: "📱",
      duration: "4-24 weeks",
      type: "Development"
    },
    {
      title: "Team Leadership & Mentoring",
      description: "Provide technical leadership, mentoring, and guidance to iOS development teams to improve productivity and code quality.",
      features: [
        "Technical mentoring and coaching",
        "Code review processes and best practices",
        "Team productivity optimization",
        "Developer onboarding programs",
        "Technical documentation and standards"
      ],
      icon: "👥",
      duration: "Ongoing",
      type: "Leadership"
    },
    {
      title: "AI-Assisted Development",
      description: "Implement AI-powered development workflows and tools to accelerate iOS development and improve team efficiency.",
      features: [
        "AI tool integration and workflows",
        "Claude and LLM-powered development",
        "Automated code generation",
        "Development process optimization",
        "Team training on AI tools"
      ],
      icon: "🤖",
      duration: "2-8 weeks",
      type: "Innovation"
    },
    {
      title: "Code Modernization",
      description: "Modernize legacy iOS codebases with current best practices, improve performance, and reduce technical debt.",
      features: [
        "Legacy UIKit to SwiftUI migration",
        "Codebase modularization",
        "Performance auditing and optimization",
        "Technical debt reduction",
        "Testing strategy implementation"
      ],
      icon: "🔧",
      duration: "6-16 weeks",
      type: "Modernization"
    },
    {
      title: "Technical Audits",
      description: "Comprehensive technical assessments of iOS projects, identifying areas for improvement and providing actionable recommendations.",
      features: [
        "Architecture and code quality review",
        "Performance analysis",
        "Security assessment",
        "Best practices evaluation",
        "Detailed improvement roadmap"
      ],
      icon: "🔍",
      duration: "1-3 weeks",
      type: "Assessment"
    }
  ]

  const testimonials = [
    {
      quote: "Gage's leadership and technical expertise were instrumental in our iOS modularization efforts. His ability to balance technical excellence with team productivity is exceptional.",
      author: "Former Colleague",
      role: "Senior iOS Engineer",
      company: "Tech Company"
    },
    {
      quote: "Working with Gage was transformative for our development process. His AI-assisted development approach significantly improved our team's velocity.",
      author: "Development Team Lead",
      role: "Engineering Manager",
      company: "Startup"
    }
  ]

  return (
    <section id="consulting" className="py-20 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consulting Services
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            I help companies and teams build exceptional iOS applications through architecture design,
            modern development practices, and technical leadership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border p-8 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">{service.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {service.type}
                    </span>
                  </div>
                  <div className="text-sm text-muted mb-4">
                    Duration: {service.duration}
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-muted mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Work With Me */}
        <div className="bg-background rounded-xl border border-border p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why Work With Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
              <p className="text-sm text-muted">
                #1 contributor at Fetch, led modularization of 30-engineer codebase,
                and successfully launched high-profile features.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Modern Approach</h4>
              <p className="text-sm text-muted">
                Up-to-date with latest iOS technologies, AI-assisted development,
                and modern architectural patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Team-Focused</h4>
              <p className="text-sm text-muted">
                Experience mentoring teams, leading cross-functional projects,
                and building sustainable development practices.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border p-6"
            >
              <div className="text-accent text-2xl mb-4">{'"'}</div>
              <p className="text-muted italic mb-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            {"Let's discuss your iOS development needs and how I can help your team"}
            build exceptional mobile experiences.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}