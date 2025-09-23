export function Skills() {
  const skillCategories = [
    {
      title: "iOS Development",
      icon: "📱",
      skills: [
        { name: "Swift", level: 95 },
        { name: "SwiftUI", level: 90 },
        { name: "UIKit", level: 85 },
        { name: "Swift Structured Concurrency", level: 88 },
        { name: "Combine", level: 82 },
        { name: "Core Data", level: 78 }
      ]
    },
    {
      title: "Architecture & Tools",
      icon: "🏗️",
      skills: [
        { name: "Modularization", level: 95 },
        { name: "Swift Package Manager", level: 92 },
        { name: "Package Interface Design", level: 90 },
        { name: "TDD", level: 85 },
        { name: "Apollo GraphQL", level: 80 },
        { name: "Git", level: 88 }
      ]
    },
    {
      title: "Testing & Quality",
      icon: "🧪",
      skills: [
        { name: "XCTest", level: 85 },
        { name: "XCUITest", level: 82 },
        { name: "Unit Testing", level: 88 },
        { name: "Integration Testing", level: 85 },
        { name: "Code Review", level: 92 },
        { name: "CI/CD", level: 80 }
      ]
    },
    {
      title: "Leadership & Collaboration",
      icon: "👥",
      skills: [
        { name: "Technical Mentoring", level: 90 },
        { name: "Architecture Design", level: 92 },
        { name: "Team Leadership", level: 88 },
        { name: "Cross-functional Collaboration", level: 90 },
        { name: "Documentation", level: 85 },
        { name: "AI-Assisted Development", level: 88 }
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Swift", level: 95 },
        { name: "Python", level: 75 },
        { name: "Go", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "JavaScript", level: 65 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Xcode", level: 95 },
        { name: "Claude & AI Tools", level: 90 },
        { name: "Firebase", level: 80 },
        { name: "App Store Connect", level: 85 },
        { name: "TestFlight", level: 88 },
        { name: "Fastlane", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            My technical skillset spans modern iOS development, software architecture,
            and team leadership, built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50/50 dark:bg-gray-950/50 rounded-xl border border-border p-6 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-accent rounded-full h-2 transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notable Achievements */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-8 border border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Notable Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">SPM</div>
              <div className="font-medium text-foreground mb-2">Open Source Contributor</div>
              <div className="text-sm text-muted">Contributing to Swift Package Manager</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">AI</div>
              <div className="font-medium text-foreground mb-2">AI-Assisted Development</div>
              <div className="text-sm text-muted">Leading brown bag sessions and workflow automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">60%</div>
              <div className="font-medium text-foreground mb-2">Modularization Progress</div>
              <div className="text-sm text-muted">Leading modularization of 30-engineer iOS codebase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}