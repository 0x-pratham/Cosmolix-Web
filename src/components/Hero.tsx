import { Play, ArrowRight } from 'lucide-react'
import HeroIllustration from './HeroIllustration'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #EFF6FF 50%, #FAFAF8 100%)' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-2/3 h-2/3 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgba(37,99,235,0.06), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, rgba(37,99,235,0.04), transparent 70%)',
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-7">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full w-fit"
            style={{
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.2)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#2563EB' }}
            />
            <span
              className="text-sm font-medium"
              style={{
                color: '#2563EB',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Next-Gen Technology Solutions
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              lineHeight: 1.08,
              color: '#0F172A',
              letterSpacing: '-0.02em',
            }}
          >
            Build Smarter.
            <br />
            Scale{' '}
            <em style={{ color: '#2563EB', fontStyle: 'italic' }}>
              Faster.
            </em>
            <br />
            Go Further.
          </h1>

          {/* Divider */}
          <div
            className="w-16 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, #2563EB, #3B82F6)' }}
          />

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: '#334155',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              maxWidth: '460px',
            }}
          >
            Cosmolix delivers enterprise IT services, cloud infrastructure,
            digital transformation, and talent programs — turning ambitious
            ideas into global impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#services"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                boxShadow: '0 6px 24px rgba(37,99,235,0.32)',
                textDecoration: 'none',
              }}
            >
              Explore Services
              <ArrowRight size={15} />
            </a>

            <a
              href="#careers"
              className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#0F172A',
                background: 'white',
                border: '1.5px solid rgba(26,18,8,0.12)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                textDecoration: 'none',
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                }}
              >
                <Play size={10} fill="white" />
              </span>
              View Careers
            </a>
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex -space-x-2">
              {[
                { color: '#2563EB', letter: 'A' },
                { color: '#10B981', letter: 'B' },
                { color: '#0F172A', letter: 'C' },
                { color: '#334155', letter: 'D' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: item.color, zIndex: 4 - i }}
                >
                  {item.letter}
                </div>
              ))}
            </div>
            <p
              style={{
                color: '#94A3B8',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.82rem',
              }}
            >
              Trusted across{' '}
              <strong style={{ color: '#334155' }}>42+ countries</strong> by
              leading enterprises
            </p>
          </div>
        </div>

        {/* RIGHT — Illustration */}
        <div className="relative flex items-center justify-center h-[520px]">
          <HeroIllustration />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(to top, #FAFAF8, transparent)' }}
      />
    </section>
  )
}