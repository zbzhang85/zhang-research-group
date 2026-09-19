import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#news', label: 'News' },
  { href: '#publications', label: 'Publications' },
  { href: '#talks', label: 'Talks' },
  { href: '#team', label: 'Team' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="images/shanghaitech-logo.png"
              alt="ShanghaiTech University logo"
              className="h-10 w-auto rounded-lg bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-sm"
            />
            <span className={`leading-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              <span className="block text-sm font-bold tracking-wide">M³ Group</span>
              <span className={`block text-[11px] ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                ShanghaiTech University
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-600 hover:text-cyan-800' : 'text-slate-200 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className={`lg:hidden ${scrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-800 border-b border-slate-100 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
