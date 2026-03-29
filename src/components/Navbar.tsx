import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'IT Consulting', href: '#' },
      { label: 'Cloud Solutions', href: '#' },
      { label: 'Digital Transformation', href: '#' },
      { label: 'Our Products', href: '#products' },
    ],
  },
  {
    label: 'Careers',
    href: '#careers',
    dropdown: [
      { label: 'Jobs', href: '#jobs' },
      { label: 'Internships', href: '#internships' },
    ],
  },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
]

type DropdownItem = { label: string; href: string }
type NavLink = {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: 'rgba(250,250,248,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
        boxShadow: '0 1px 32px rgba(0,0,0,0.06)',
      }}
    >
      {/* ── LOGO ── */}
      <a
        href="#"
        className="flex items-center gap-2.5"
        style={{ textDecoration: 'none' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: 'white',
            border: '2px solid #2563EB',
            boxShadow: '0 0 0 3px rgba(37,99,235,0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: '13px',
              color: '#0F172A',
              letterSpacing: '-0.5px',
            }}
          >
            cx
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '-0.3px',
            color: '#0F172A',
          }}
        >
          COSMO<span style={{ color: '#2563EB' }}>LIX</span>
        </span>
      </a>

      {/* ── DESKTOP NAV ── */}
      <div className="hidden md:flex items-center gap-1">
        {(navLinks as NavLink[]).map(link => (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a
              href={link.href}
              className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: openDropdown === link.label ? '#2563EB' : '#334155',
                background:
                  openDropdown === link.label
                    ? 'rgba(37,99,235,0.06)'
                    : 'transparent',
                textDecoration: 'none',
              }}
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown
                  size={13}
                  style={{
                    transform:
                      openDropdown === link.label
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    color: '#2563EB',
                  }}
                />
              )}
            </a>

            {/* Dropdown panel */}
            {link.dropdown && openDropdown === link.label && (
              <div
                className="absolute top-full left-0 mt-2 py-2 rounded-2xl min-w-[190px]"
                style={{
                  background: 'white',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(37,99,235,0.1)',
                }}
              >
                {link.dropdown.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-5 py-2.5 text-sm transition-colors duration-150"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      color: '#334155',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.color = '#2563EB')
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = '#334155')
                    }
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: '#2563EB',
                        opacity: 0.5,
                        flexShrink: 0,
                      }}
                    />
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── DESKTOP CTA ── */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full transition-colors duration-150"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: '#334155',
            textDecoration: 'none',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
          onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
        >
          Contact
        </a>
        <a
          href="#join"
          className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
            boxShadow: '0 4px 18px rgba(37,99,235,0.28)',
            textDecoration: 'none',
          }}
        >
          Join Us
        </a>
      </div>

      {/* ── MOBILE TOGGLE ── */}
      <button
        className="md:hidden"
        style={{ color: '#0F172A', background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-1 px-6 py-5 md:hidden"
          style={{
            background: 'white',
            borderBottom: '1px solid rgba(37,99,235,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          {(navLinks as NavLink[]).map(link => (
            <div key={link.label}>
              <a
                href={link.href}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#334155',
                  textDecoration: 'none',
                }}
                onClick={() => !link.dropdown && setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="ml-4 flex flex-col gap-0.5 mb-1">
                  {link.dropdown.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 text-sm rounded-lg"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#94A3B8',
                        textDecoration: 'none',
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {'→'} {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#join"
            className="mt-3 px-6 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
              textDecoration: 'none',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  )
}