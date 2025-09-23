'use client'

import Link from 'next/link'

export function CardGrid() {
  const cards = [
    // Main intro card - larger
    {
      id: 'intro',
      title: 'DraftRoom Studios',
      subtitle: 'Created By Gage Halverson',
      description: 'Building exceptional mobile experiences with Swift & SwiftUI',
      size: 'large',
      type: 'intro',
      href: '/about'
    },

    // Main sections
    {
      id: 'about',
      title: 'About me.',
      subtitle: 'WHO I AM',
      icon: '👨‍💻',
      size: 'medium',
      type: 'section',
      href: '/about'
    },
    {
      id: 'work',
      title: 'My work.',
      subtitle: 'WHAT I\'VE BUILT',
      icon: '💻',
      size: 'medium',
      type: 'section',
      href: '/work'
    },
    {
      id: 'freshwall',
      title: 'FreshWall App',
      subtitle: 'LIVE iOS APP',
      icon: '🎨',
      size: 'medium',
      type: 'link',
      href: 'https://freshwall.app',
      external: true
    },

    // What I do section
    {
      id: 'what-i-do',
      title: 'What I do',
      subtitle: '',
      size: 'section-header',
      type: 'header',
      href: null
    },

    // Skills cards
    {
      id: 'ios',
      title: 'iOS Apps',
      icon: '📱',
      size: 'small',
      type: 'skill',
      href: '/work'
    },
    {
      id: 'architecture',
      title: 'Architecture & Design',
      icon: '🏗️',
      size: 'small',
      type: 'skill',
      href: '/consulting'
    },
    {
      id: 'consulting',
      title: 'Consulting',
      icon: '🤝',
      size: 'small',
      type: 'skill',
      href: '/consulting'
    },

    // Links
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'MY CODE',
      icon: '🔗',
      size: 'medium',
      type: 'link',
      href: 'https://github.com/hi2gage',
      external: true
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'WORK SO PROFESSIONAL',
      icon: '💼',
      size: 'medium',
      type: 'link',
      href: 'https://www.linkedin.com/in/gage-halverson/',
      external: true
    },

    // Contact
    {
      id: 'contact',
      title: 'Get in touch 👋',
      subtitle: 'Let\'s work together',
      size: 'large',
      type: 'cta',
      href: '/contact'
    }
  ]

  const getCardClasses = (card: typeof cards[0]) => {
    const baseClasses = 'rounded-2xl border border-gray-700 p-6 transition-all duration-200 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10'

    switch (card.size) {
      case 'large':
        return `${baseClasses} col-span-2 bg-gray-800 text-white`
      case 'medium':
        return `${baseClasses} bg-gray-800 text-white`
      case 'small':
        return `${baseClasses} bg-gray-800 text-white`
      case 'section-header':
        return 'col-span-3 pt-8 pb-0 mb-0'
      default:
        return `${baseClasses} bg-gray-800 text-white`
    }
  }

  const renderCard = (card: typeof cards[0]) => {
    if (card.type === 'header') {
      return (
        <div key={card.id} className={getCardClasses(card)}>
          <h2 className="text-2xl font-semibold text-white">{card.title}</h2>
        </div>
      )
    }

    const CardContent = () => (
      <div className="h-full flex flex-col">
        {card.type === 'intro' && (
          <div className="flex items-center gap-4 mb-4">
            {/* DraftRoom Studios Logo */}
            <div className="relative w-12 h-12">
              <div
                className="absolute w-10 h-6 bg-gray-200 border border-gray-900"
                style={{
                  top: '6px',
                  left: '2px',
                  transform: 'perspective(80px) rotateX(20deg)'
                }}
              />
              <div
                className="absolute w-8 h-1 bg-yellow-500"
                style={{ top: '9px', left: '3px' }}
              />
              <div
                className="absolute w-6 h-4 bg-white border border-gray-400"
                style={{ top: '8px', left: '4px' }}
              />
              <div className="absolute w-1 h-4 bg-gray-600" style={{ bottom: '0px', left: '4px' }} />
              <div className="absolute w-1 h-4 bg-gray-600" style={{ bottom: '0px', right: '4px' }} />
            </div>
          </div>
        )}

        {card.icon && card.type !== 'intro' && (
          <div className="text-3xl mb-4">{card.icon}</div>
        )}

        {card.subtitle && (
          <div className="text-xs font-medium text-yellow-500 mb-2 tracking-wider">
            {card.subtitle}
          </div>
        )}

        <h3 className={`font-semibold mb-2 ${
          card.size === 'large' ? 'text-xl' : 'text-lg'
        }`}>
          {card.title}
        </h3>

        {card.description && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {card.description}
          </p>
        )}


        {(card.type === 'link' || card.type === 'section' || card.type === 'skill' || card.type === 'cta') && (
          <div className="mt-auto pt-4">
            <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    )

    if (!card.href) {
      return (
        <div key={card.id} className={getCardClasses(card)}>
          <CardContent />
        </div>
      )
    }

    if (card.external) {
      return (
        <a
          key={card.id}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className={getCardClasses(card)}
        >
          <CardContent />
        </a>
      )
    }

    return (
      <Link key={card.id} href={card.href} className={getCardClasses(card)}>
        <CardContent />
      </Link>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 auto-rows-fr">
        {cards.filter(card => card.type !== 'header' && card.type !== 'skill').map(renderCard)}
      </div>

      {/* What I do section */}
      <div className="mt-8 mb-4">
        <h2 className="text-2xl font-semibold text-white">What I do</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.filter(card => card.type === 'skill').map(renderCard)}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-800">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <span className="text-sm">👨‍💻</span>
          </div>
        </div>
        <nav className="flex justify-center gap-6 text-sm">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
        </nav>
      </div>
    </div>
  )
}