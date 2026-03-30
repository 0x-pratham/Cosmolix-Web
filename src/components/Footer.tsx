import { useState } from 'react'
import { ExternalLink, Send, GitBranch, Globe, ArrowRight } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ],
  Products: [
    { label: 'CosmoWork', href: '#cosmowork' },
    { label: 'CosmoAnalytics', href: '#cosmoanalytics' },
    { label: 'CosmoCyber', href: '#cosmocyber' },
  ],
}

const socials = [
  { icon: ExternalLink, label: 'LinkedIn',  href: '#' },
  { icon: Send,         label: 'Twitter',   href: '#' },
  { icon: GitBranch,    label: 'GitHub',    href: '#' },
  { icon: Globe,        label: 'Instagram', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer
      style={{
        background: '#F8FAFF',
        borderTop: '1px solid rgba(37,99,235,0.08)',
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '4rem 2rem 3rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Brand col */}
          <div style={{ maxWidth: '280px' }}>
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '2px solid #2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 3px rgba(37,99,235,0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 900,
                    fontSize: '12px',
                    color: '#0F172A',
                  }}
                >
                  cx
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#0F172A',
                  letterSpacing: '-0.3px',
                }}
              >
                COSMO<span style={{ color: '#2563EB' }}>LIX</span>
              </span>
            </div>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.88rem',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Building scalable AI-driven software and SaaS platforms for
              enterprises and innovators.
            </p>

            {/* Subscribe */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                color: '#0F172A',
                marginBottom: '0.75rem',
              }}
            >
              Subscribe for updates
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.82rem',
                  color: '#0F172A',
                  background: 'white',
                  border: '1.5px solid rgba(37,99,235,0.15)',
                  borderRadius: '8px',
                  padding: '0.55rem 0.9rem',
                  outline: 'none',
                  flex: 1,
                  minWidth: 0,
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#2563EB')}
                onBlur={e => (e.target.style.borderColor = 'rgba(37,99,235,0.15)')}
              />
              <button
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  color: 'white',
                  background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.55rem 1rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)')}
              >
                Join
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  color: '#0F172A',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                {title}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.9rem',
                        color: '#64748B',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#2563EB')}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#64748B')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect col */}
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                color: '#0F172A',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Connect
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {socials.map(social => {
                const Icon = social.icon
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.9rem',
                        color: '#64748B',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#2563EB')}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#64748B')}
                    >
                      <Icon size={15} strokeWidth={1.7} />
                      {social.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(37,99,235,0.07)',
          padding: '1.25rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.82rem',
              color: '#94A3B8',
            }}
          >
            © 2026 Cosmolix Pvt Ltd. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.82rem',
                  color: '#94A3B8',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#2563EB')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8')}
              >
                {item}
              </a>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.82rem',
              color: '#94A3B8',
              fontStyle: 'italic',
            }}
          >
            Powering the future with intelligent systems.
          </p>
        </div>
      </div>
    </footer>
  )
}