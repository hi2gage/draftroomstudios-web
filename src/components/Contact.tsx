export function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "gage.m.halverson@gmail.com",
      href: "mailto:gage.m.halverson@gmail.com",
      description: "Best for project inquiries and consulting discussions"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Bozeman, MT",
      href: null,
      description: "Mountain West timezone, available for remote work"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "406-404-5491",
      href: "tel:+14064045491",
      description: "Available for calls during business hours"
    }
  ]

  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/gagehalverson",
      icon: "🔗"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/gagehalverson",
      icon: "💼"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {"Let's Connect"}
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {"Whether you're looking for iOS development consulting, technical leadership, or just want to discuss mobile app architecture, I'd love to hear from you."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{method.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">
                          {method.value}
                        </div>
                      )}
                      <div className="text-sm text-muted mt-1">
                        {method.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Find Me Online
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-border hover:border-accent transition-colors duration-200"
                  >
                    <span>{social.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {social.platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
              <h4 className="font-semibold text-foreground mb-3">
                Current Availability
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-foreground">
                    Available for new consulting projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm text-foreground">
                    Open to technical advisory roles
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-sm text-foreground">
                    Accepting speaking opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50/50 dark:bg-gray-950/50 rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
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
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div
                  className="absolute w-6 h-4 bg-gray-200 border border-gray-900"
                  style={{
                    top: '6px',
                    left: '2px',
                    transform: 'perspective(50px) rotateX(20deg)'
                  }}
                />
                <div
                  className="absolute w-4 h-0.5 bg-accent"
                  style={{ top: '8px', left: '3px' }}
                />
                <div
                  className="absolute w-3 h-2 bg-white border border-gray-400"
                  style={{ top: '7px', left: '3.5px' }}
                />
                <div className="absolute w-0.5 h-2 bg-muted" style={{ bottom: '0px', left: '3.5px' }} />
                <div className="absolute w-0.5 h-2 bg-muted" style={{ bottom: '0px', right: '3.5px' }} />
              </div>
              <div>
                <span className="font-black text-foreground">Draft</span>
                <span className="font-light text-foreground">Room</span>
                <span className="font-semibold text-foreground ml-1">Studios</span>
                <span className="text-sm font-light text-muted ml-2">LLC</span>
              </div>
            </div>
          </div>
          <p className="text-muted text-sm">
            © 2025 DraftRoom Studios LLC. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}