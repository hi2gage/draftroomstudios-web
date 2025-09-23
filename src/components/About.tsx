export function About() {
  const achievements = [
    {
      metric: "#1",
      label: "iOS Contributor at Fetch",
      description: "Top performer among 30 iOS engineers over the last 4 months"
    },
    {
      metric: "60%",
      label: "Codebase Modularized",
      description: "Leading the modularization of Fetch's iOS codebase as Modularization Lead"
    },
    {
      metric: "4",
      label: "iOS Leads Team",
      description: "Selected to guide architecture and mentor peers in 30-person iOS organization"
    },
    {
      metric: "8",
      label: "Weeks Mentoring",
      description: "Successfully mentored iOS summer intern, teaching Swift and project development"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  {"I'm a Senior iOS Software Engineer with a passion for building exceptional mobile experiences and scalable architectures. Currently at Fetch, I lead modularization efforts for a 30-engineer iOS team and serve on the iOS Leads Team, shaping technical strategy and mentoring peers."}
                </p>
                <p>
                  {"My expertise spans modern iOS development with Swift and SwiftUI, architectural design patterns, and team leadership. I'm particularly passionate about modularization, developer velocity, and AI-assisted development workflows."}
                </p>
                <p>
                  {"When I'm not architecting iOS apps, I'm developing FreshWall - an innovative iPhone app for graffiti tracking and removal services, and contributing to open source projects like Swift Package Manager."}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-foreground">Master of Science - Industrial & Management Systems Engineering</div>
                  <div className="text-muted">Montana State University • Focus: Data Analytics • GPA: 3.66</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Bachelor of Science - Industrial & Management Systems Engineering</div>
                  <div className="text-muted">Montana State University • Minor: Computer Science • GPA: 3.61</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {achievement.metric}
                </div>
                <div className="font-semibold text-foreground mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}