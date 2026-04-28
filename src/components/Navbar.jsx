import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services', href: '#services',
    dropdown: ['Data Engineering', 'AI / ML', 'Digital Transformation', 'Software Dev', 'App Development'],
  },
  {
    label: 'Industries', href: '#industries',
    dropdown: ['Healthcare', 'Education', 'Finance', 'Retail', 'Real Estate', 'Sports'],
  },
  { label: 'Process', href: '#process' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const Logo = () => (
  <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
    <div className="w-9 h-9">
      <svg viewBox="0 0 32 32" fill="none">
        <polygon points="16,2 30,26 2,26" fill="url(#lg1)" opacity="0.9"/>
        <polygon points="16,8 24,26 8,26" fill="url(#lg2)" opacity="0.6"/>
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#6366f1"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <span className="font-display text-xl font-bold tracking-tight gradient-text">Futentia</span>
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-250
      ${scrolled ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-accent-primary/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : ''}`}>

      <div className="max-w-[1200px] mx-auto px-6 flex items-center h-full gap-10">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-400
                           rounded-lg transition-all duration-150 hover:text-slate-100 hover:bg-accent-primary/8
                           whitespace-nowrap"
              >
                {link.label}
                {link.dropdown && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>

              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[190px]
                                bg-bg-card border border-accent-primary/20 rounded-xl p-2
                                shadow-xl-dark backdrop-blur-xl animate-fade-in z-50">
                  {link.dropdown.map((item) => (
                    <a key={item} href={link.href}
                       className="block px-3.5 py-2 text-sm text-slate-400 rounded-lg
                                  transition-all duration-150 hover:text-slate-100 hover:bg-accent-primary/10">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block ml-auto flex-shrink-0">
          <a href="#contact" className="btn-primary">
            <span>Get Started</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-slate-100 rounded transition-all duration-250 origin-center
                            ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}/>
          <span className={`block w-[22px] h-[2px] bg-slate-100 rounded transition-all duration-250
                            ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}/>
          <span className={`block w-[22px] h-[2px] bg-slate-100 rounded transition-all duration-250 origin-center
                            ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[72px] inset-x-0 bg-bg-primary/97 backdrop-blur-xl
                        border-b border-accent-primary/15 px-6 py-5 flex flex-col gap-1 animate-fade-in">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
               className="px-3.5 py-3 text-base font-medium text-slate-400 rounded-lg
                          transition-all duration-150 hover:text-slate-100 hover:bg-accent-primary/8"
               onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-3 justify-center">Get Started</a>
        </div>
      )}
    </nav>
  )
}
