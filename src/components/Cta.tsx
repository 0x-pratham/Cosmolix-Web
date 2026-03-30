import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      style={{
        background: '#F0F4FF',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(37,99,235,0.08)',
            border: '1px solid rgba(37,99,235,0.18)',
            borderRadius: '999px',
            padding: '5px 16px',
            marginBottom: '1.75rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#2563EB',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#2563EB',
              letterSpacing: '0.04em',
            }}
          >
            Let's Build Together
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#0F172A',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}
        >
          Build the Next Generation
          <br />
          of{' '}
          <em style={{ color: '#2563EB', fontStyle: 'italic' }}>AI Systems </em>
          Together
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: '#64748B',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Partner with us to transform your enterprise with AI-driven innovation.
          Our team is ready to design, build, and scale with you.
        </p>

        {/* Email + Button */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              color: '#0F172A',
              background: 'white',
              border: '1.5px solid rgba(37,99,235,0.15)',
              borderRadius: '999px',
              padding: '0.75rem 1.5rem',
              outline: 'none',
              width: '260px',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = '#2563EB')}
            onBlur={e => (e.target.style.borderColor = 'rgba(37,99,235,0.15)')}
          />
          <button
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'white',
              background: 'linear-gradient(135deg, #2563EB, #10B981)',
              border: 'none',
              borderRadius: '999px',
              padding: '0.75rem 1.75rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 20px rgba(37,99,235,0.28)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(37,99,235,0.38)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.28)'
            }}
          >
            Request Consultation
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Trust note */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.78rem',
            color: '#94A3B8',
            marginTop: '1.25rem',
          }}
        >
          No spam. We respond within 24 hours.
        </p>
      </div>
    </section>
  )
}