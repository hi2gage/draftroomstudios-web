'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <span className="text-lg">👨‍💻</span>
            </div>
          </Link>

          {/* Centered Navigation */}
          <nav className="flex gap-8 text-sm">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === '/' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                pathname === '/about' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/work"
              className={`font-medium transition-colors ${
                pathname === '/work' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Work
            </Link>
            <Link
              href="/consulting"
              className={`font-medium transition-colors ${
                pathname === '/consulting' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Consulting
            </Link>
            <Link
              href="/support"
              className={`font-medium transition-colors ${
                pathname.startsWith('/support') ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Support
            </Link>
          </nav>

          {/* Get In Touch Button */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Get in touch 👋
          </Link>
        </div>
      </div>
    </nav>
  )
}