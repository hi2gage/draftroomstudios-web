import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function Colors() {
  const colorSchemes = [
    {
      name: "Current Colors",
      scheme: {
        background: "#1a1a1a",
        cardBg: "#2a2a2a",
        border: "#666666",
        text: "#999999",
        accent: "#ca8a04"
      }
    },
    {
      name: "Option 1 - Darker Warm",
      scheme: {
        background: "#0f0f0f",
        cardBg: "#1c1c1c",
        border: "#333333",
        text: "#888888",
        accent: "#ca8a04"
      }
    },
    {
      name: "Option 2 - Charcoal",
      scheme: {
        background: "#111111",
        cardBg: "#1e1e1e",
        border: "#404040",
        text: "#999999",
        accent: "#ca8a04"
      }
    },
    {
      name: "Option 3 - Deep Professional",
      scheme: {
        background: "#0d0d0d",
        cardBg: "#1a1a1a",
        border: "#2a2a2a",
        text: "#777777",
        accent: "#ca8a04"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Color Scheme Options</h1>
            <p className="text-gray-400">Compare different dark theme palettes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {colorSchemes.map((option, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-semibold text-white">{option.name}</h2>

                {/* Preview */}
                <div
                  className="rounded-2xl p-8 min-h-96"
                  style={{ backgroundColor: option.scheme.background }}
                >
                  {/* Sample Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div
                      className="rounded-xl p-6"
                      style={{
                        backgroundColor: option.scheme.cardBg,
                        border: `1px solid ${option.scheme.border}`
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">👨‍💻</span>
                        <div>
                          <div className="font-semibold text-white">{"Hey, I'm Gage"}</div>
                          <div style={{ color: option.scheme.accent }} className="text-sm">
                            Senior iOS Engineer
                          </div>
                        </div>
                      </div>
                      <p style={{ color: option.scheme.text }} className="text-sm">
                        Building exceptional iOS experiences with Swift and SwiftUI.
                      </p>
                    </div>

                    <div
                      className="rounded-xl p-6"
                      style={{
                        backgroundColor: option.scheme.cardBg,
                        border: `1px solid ${option.scheme.border}`
                      }}
                    >
                      <div style={{ color: option.scheme.accent }} className="text-xs font-medium mb-2 tracking-wider">
                        FEATURED PROJECT
                      </div>
                      <h3 className="font-semibold text-white mb-2">FreshWall</h3>
                      <p style={{ color: option.scheme.text }} className="text-sm mb-4">
                        iOS graffiti tracking app with real-time reporting.
                      </p>
                      <div className="flex gap-2">
                        <span
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            backgroundColor: option.scheme.border,
                            color: option.scheme.text
                          }}
                        >
                          Swift
                        </span>
                        <span
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            backgroundColor: option.scheme.border,
                            color: option.scheme.text
                          }}
                        >
                          SwiftUI
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Preview */}
                  <div
                    className="rounded-lg p-4 flex items-center justify-between"
                    style={{ border: `1px solid ${option.scheme.border}` }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: option.scheme.cardBg,
                          border: `1px solid ${option.scheme.border}`
                        }}
                      >
                        <span className="text-sm">👨‍💻</span>
                      </div>
                      <nav className="flex gap-4 text-sm">
                        <span style={{ color: option.scheme.accent }}>Home</span>
                        <span style={{ color: option.scheme.text }}>About</span>
                        <span style={{ color: option.scheme.text }}>Work</span>
                      </nav>
                    </div>
                    <button
                      className="px-3 py-1 bg-white text-gray-900 rounded-full text-sm"
                    >
                      Get in touch 👋
                    </button>
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="grid grid-cols-5 gap-2">
                  <div className="text-center">
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: option.scheme.background }}
                    />
                    <div className="text-xs text-gray-400">Background</div>
                    <div className="text-xs text-gray-500 font-mono">{option.scheme.background}</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: option.scheme.cardBg }}
                    />
                    <div className="text-xs text-gray-400">Cards</div>
                    <div className="text-xs text-gray-500 font-mono">{option.scheme.cardBg}</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: option.scheme.border }}
                    />
                    <div className="text-xs text-gray-400">Borders</div>
                    <div className="text-xs text-gray-500 font-mono">{option.scheme.border}</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: option.scheme.text }}
                    />
                    <div className="text-xs text-gray-400">Text</div>
                    <div className="text-xs text-gray-500 font-mono">{option.scheme.text}</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: option.scheme.accent }}
                    />
                    <div className="text-xs text-gray-400">Accent</div>
                    <div className="text-xs text-gray-500 font-mono">{option.scheme.accent}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}