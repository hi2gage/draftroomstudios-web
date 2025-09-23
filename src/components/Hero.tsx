export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-50/50 dark:to-gray-950/50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* DraftRoom Studios Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16">
                <div
                  className="absolute w-12 h-8 bg-gray-200 border-2 border-gray-900"
                  style={{
                    top: '8px',
                    left: '4px',
                    transform: 'perspective(120px) rotateX(20deg)'
                  }}
                />
                <div
                  className="absolute w-10 h-1.5 bg-accent"
                  style={{ top: '14px', left: '5px' }}
                />
                <div
                  className="absolute w-8 h-5 bg-white border border-gray-400"
                  style={{ top: '12px', left: '6px' }}
                />
                <div className="absolute w-1.5 h-6 bg-muted" style={{ bottom: '0px', left: '6px' }} />
                <div className="absolute w-1.5 h-6 bg-muted" style={{ bottom: '0px', right: '6px' }} />
              </div>
              <div>
                <div className="text-3xl text-foreground">
                  <span className="font-black">Draft</span>
                  <span className="font-light">Room</span>
                  <span className="font-semibold ml-1">Studios</span>
                </div>
                <div className="text-sm font-light text-muted tracking-widest">
                  LLC
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Gage Halverson
            </h1>
            <h2 className="text-xl md:text-2xl text-accent font-medium">
              Senior iOS Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Building exceptional iOS experiences with Swift and SwiftUI.
              Currently leading modularization efforts at Fetch and developing FreshWall,
              an innovative graffiti tracking iOS app.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>#1 iOS Contributor at Fetch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>iOS Modularization Lead</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Swift Package Manager Contributor</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-border text-foreground hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}