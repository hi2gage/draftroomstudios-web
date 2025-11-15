import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export default function NotesToRemindersSupport() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Link */}
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Back to Support</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Notes to Reminders</h1>
                <p className="text-gray-400 mt-1">Support & FAQs</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Get help with importing your Apple Notes checklists to Reminders
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <a
              href="https://apps.apple.com/app/notes-to-reminders"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl border border-gray-700 p-4 hover:border-yellow-500/50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm font-medium text-white">App Store</div>
            </a>
            <a
              href="https://notes2reminders.draftroomstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl border border-gray-700 p-4 hover:border-yellow-500/50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm font-medium text-white">Website</div>
            </a>
            <a
              href="mailto:support@draftroomstudios.com"
              className="bg-gray-800 rounded-xl border border-gray-700 p-4 hover:border-yellow-500/50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-sm font-medium text-white">Email Support</div>
            </a>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How do I use Notes to Reminders?</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>1. Open the Apple Notes app and create or open a note with a checklist</p>
                  <p>2. Tap the Share button (square with arrow pointing up)</p>
                  <p>3. Select "Notes To Reminders" from the share sheet</p>
                  <p>4. Choose an existing Reminders list or create a new one</p>
                  <p>5. Tap to import - your checklist items will appear in Reminders!</p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What checklist formats are supported?</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>Notes to Reminders supports:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Apple Notes native checklists (circle bullets)</li>
                    <li>Markdown-style tasks: - [ ] and - [x]</li>
                    <li>Plain text with bullet points</li>
                  </ul>
                  <p className="mt-3">The app automatically detects completed items (checked boxes) and preserves their status when importing.</p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Does the app collect my data?</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p><strong>No.</strong> Notes to Reminders is designed with privacy first:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>All processing happens entirely on your device</li>
                    <li>No data is sent to any server</li>
                    <li>No analytics or tracking</li>
                    <li>No user accounts required</li>
                  </ul>
                  <p className="mt-3">Your notes and reminders never leave your iPhone.</p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I import multiple notes at once?</h3>
                <div className="text-gray-300 text-sm">
                  <p>Currently, you can import one note at a time. Each note creates a separate set of reminders in your chosen list. We're considering batch import for future updates!</p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">The share extension doesn't appear. What should I do?</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>If you don't see "Notes To Reminders" in the share sheet:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Open the share sheet from Apple Notes</li>
                    <li>Scroll to the right and tap "More" or "Edit Actions"</li>
                    <li>Find "Notes To Reminders" and enable it</li>
                    <li>Drag it to your preferred position</li>
                  </ol>
                  <p className="mt-3">If it still doesn't appear, try restarting your device.</p>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What iOS version do I need?</h3>
                <div className="text-gray-300 text-sm">
                  <p>Notes to Reminders requires iOS 18.6 or later. Make sure your device is up to date for the best experience.</p>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Is the app free?</h3>
                <div className="text-gray-300 text-sm">
                  <p>Yes! Notes to Reminders is completely free with no ads, no in-app purchases, and no subscriptions. We built it to solve a problem we had, and we're happy to share it with everyone.</p>
                </div>
              </div>

              {/* FAQ 8 */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I customize how reminders are created?</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>Currently, reminders are created with:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>The note title as the list name (or you can choose your own)</li>
                    <li>Each checklist item as a separate reminder</li>
                    <li>Completion status preserved</li>
                  </ul>
                  <p className="mt-3">We're considering additional customization options like due dates and priorities for future updates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Troubleshooting</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Common Issues</h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <p className="font-medium text-white mb-2">Some items didn't import</p>
                  <p>Make sure your checklist items are formatted as checkboxes in Notes. Plain text lines won't be imported.</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-2">App crashes or freezes</p>
                  <p>Try closing and reopening the app. If the issue persists, please contact support with details about what you were doing when it crashed.</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-2">Completed items show as incomplete</p>
                  <p>This might happen with certain Markdown formats. Try using Apple Notes native checklists for best results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Icons */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">App Icons & Assets</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <p className="text-gray-300 text-sm mb-6">
                Download official app icons and assets for press, reviews, or sharing on social media.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Icon 1 - Current */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-1">📝</div>
                      <div className="text-xl">➡️</div>
                      <div className="text-3xl mt-1">✅</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Current Icon</div>
                  <div className="text-xs text-yellow-500 mt-1">1024×1024</div>
                </div>

                {/* Icon 2 - Simple */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-5xl">📋</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Simple</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>

                {/* Icon 3 - Arrow */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                    <div className="text-center text-white font-bold">
                      <div className="text-2xl">Notes</div>
                      <div className="text-3xl my-1">→</div>
                      <div className="text-xl">Reminders</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Text Arrow</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>

                {/* Icon 4 - Checkmark */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-6xl">✓</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Checkmark</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>

                {/* Icon 5 - List */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                    <div className="text-left pl-6">
                      <div className="text-white text-2xl space-y-1">
                        <div>☐ □ □</div>
                        <div>☑ ■ ■</div>
                        <div>☐ □ □</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Checklist</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>

                {/* Icon 6 - Modern */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-4xl">
                      N→R
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Minimal</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>

                {/* Icon 7 - iOS Style */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
                    <div className="text-center space-y-1">
                      <div className="text-4xl">📱</div>
                      <div className="text-2xl">✓</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">iOS Style</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>

                {/* Icon 8 - Bold */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg">
                    <div className="text-white font-black text-5xl">
                      2R
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Bold Text</div>
                  <div className="text-xs text-gray-500 mt-1">Alternative</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Need a specific size or format? Contact us for custom assets.
                </p>
                <a
                  href="mailto:support@draftroomstudios.com?subject=App Icon Request"
                  className="inline-block px-6 py-2 bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
                >
                  Request Custom Assets
                </a>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-xl border border-yellow-500/20 p-8 text-center mb-12">
            <div className="text-3xl mb-4">💬</div>
            <h2 className="text-2xl font-semibold text-white mb-3">Still Need Help?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help! Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:support@draftroomstudios.com?subject=Notes to Reminders Support"
              className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Email Support
            </a>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <span className="text-sm">👨‍💻</span>
              </div>
            </div>
            <nav className="flex justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/support" className="text-yellow-500">Support</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}
