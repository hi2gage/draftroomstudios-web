export function Experience() {
  const experiences = [
    {
      company: "Fetch",
      role: "Senior iOS Software Engineer",
      period: "April 2025 - Present",
      location: "Remote",
      highlights: [
        "Launched the Fetch Credit Card on iOS, one of the company's highest-profile product initiatives",
        "Appointed iOS Modularization Lead, driving the mission to modularize the 30-engineer iOS codebase (currently 60% modularized)",
        "Selected to the iOS Leads Team (4 engineers), guiding architecture and shaping long-term technical strategy",
        "Recognized as the #1 contributor to the iOS codebase over the last 4 months",
        "Presented brown bag sessions on AI-assisted development, enabling faster delivery across the iOS team"
      ],
      technologies: ["Swift", "SwiftUI", "SPM", "iOS Architecture", "Team Leadership"]
    },
    {
      company: "onXmaps",
      role: "iOS Software Development Engineer III",
      period: "September 2024 - April 2025",
      location: "Remote",
      highlights: [
        "Led the technical architecture and implementation of multiple high visibility user features",
        "Consistently ranked #3 among 35 iOS engineers in code contributions",
        "Drove architectural improvements in modularization and package interface design",
        "Provided technical guidance and thorough code reviews, fostering collaboration across the team"
      ],
      technologies: ["Swift", "SwiftUI", "UIKit", "Swift Structured Concurrency", "Apollo GraphQL"]
    },
    {
      company: "onXmaps",
      role: "iOS Software Development Engineer II",
      period: "September 2023 - September 2024",
      location: "Remote",
      highlights: [
        "Mentored iOS summer intern for 8 weeks, coaching with summer project and teaching Swift",
        "Implemented Offline Sharing feature from idea to finalized feature using modular design pattern (SPM)",
        "Worked as technical lead for the Offline Sharing project, interfacing with product managers and designers",
        "Collaborated with other teams and led architectural discussions and documentation"
      ],
      technologies: ["Swift", "SwiftUI", "SPM", "Modular Architecture", "Cross-functional Leadership"]
    },
    {
      company: "onXmaps",
      role: "iOS Software Development Engineer I",
      period: "August 2022 - September 2023",
      location: "Remote",
      highlights: [
        "Refactored substantial section of customer facing feature from UIKit to SwiftUI using modern practices",
        "Utilized Combine and Swift Structured Concurrency for reactive programming",
        "Contributed implementation efforts for a new User Generated Content feature for crowdsourced trail status"
      ],
      technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "Swift Structured Concurrency"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            My journey as an iOS engineer, from individual contributor to technical leader,
            driving architecture decisions and mentoring teams.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50/50 dark:bg-gray-950/50 rounded-xl border border-border p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted">
                    <span className="font-semibold text-accent">{exp.company}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-3 text-muted">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}