export function Projects() {
  const projects = [
    {
      title: "FreshWall",
      subtitle: "iOS Graffiti Tracking App",
      description: "A comprehensive iPhone application for tracking and managing graffiti incidents. Features real-time reporting, team collaboration, and business management tools for graffiti removal services.",
      features: [
        "Real-time incident reporting with photo capture and GPS location",
        "Team collaboration and assignment management",
        "Business dashboard with analytics and client management",
        "Subscription-based service model with Stripe integration",
        "Firebase backend with real-time synchronization"
      ],
      technologies: ["Swift", "SwiftUI", "Firebase", "Stripe", "Core Location", "Camera API"],
      status: "In Development",
      type: "iOS App",
      highlight: true
    },
    {
      title: "Fetch Credit Card",
      subtitle: "High-Profile iOS Feature",
      description: "Led the iOS development of Fetch's Credit Card feature, one of the company's most significant product launches, serving millions of users.",
      features: [
        "Seamless credit card application flow",
        "Integration with existing Fetch rewards ecosystem",
        "Real-time approval and card management",
        "Advanced security and fraud prevention"
      ],
      technologies: ["Swift", "SwiftUI", "Modular Architecture", "SPM"],
      status: "Launched",
      type: "Feature Development"
    },
    {
      title: "Offline Sharing Feature",
      subtitle: "onXmaps Core Feature",
      description: "Designed and implemented a comprehensive offline sharing system from concept to production, enabling users to share map data without internet connectivity.",
      features: [
        "Modular design pattern with Swift Package Manager",
        "Cross-platform compatibility",
        "Technical leadership across product, design, and QA teams",
        "Comprehensive documentation and architecture decisions"
      ],
      technologies: ["Swift", "SPM", "Modular Architecture", "Cross-platform"],
      status: "Launched",
      type: "Feature Development"
    },
    {
      title: "Swift Package Manager",
      subtitle: "Open Source Contribution",
      description: "Contributed to Apple's Swift Package Manager, improving tooling for adding dependencies and enhancing the developer experience for the Swift community.",
      features: [
        "Enhanced dependency management tooling",
        "Improved developer experience",
        "Community-driven development",
        "Apple ecosystem contribution"
      ],
      technologies: ["Swift", "Package Management", "Developer Tools"],
      status: "Ongoing",
      type: "Open Source"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            A showcase of my work in iOS development, from innovative mobile apps to
            high-impact features serving millions of users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-200 ${
                project.highlight ? 'ring-2 ring-accent/20' : ''
              }`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-medium mb-2">{project.subtitle}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-muted">
                      {project.type}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === 'Launched'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : project.status === 'In Development'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-border rounded-full text-sm text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
          >
            {"Let's Connect"}
          </a>
        </div>
      </div>
    </section>
  )
}