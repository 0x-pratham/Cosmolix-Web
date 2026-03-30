import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Lightbulb, FlaskConical, Building2, Target, Eye } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

// ── Reusable fade-in hook ──
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

// ── Stat counter card ──
function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, visible } = useFadeIn(0.1)
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        textAlign: 'center',
        padding: '2rem 1.5rem',
        background: 'white',
        borderRadius: '16px',
        border: '1px solid rgba(37,99,235,0.08)',
        boxShadow: '0 2px 12px rgba(37,99,235,0.05)',
      }}
    >
      <div style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontWeight: 900,
        fontSize: '2.4rem',
        color: '#2563EB',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.85rem',
        color: '#64748B',
        fontWeight: 500,
      }}>
        {label}
      </div>
    </div>
  )
}

// ── Philosophy card ──
function PhilosophyCard({
  icon: Icon,
  title,
  desc,
  accent,
  index,
}: {
  icon: React.ElementType
  title: string
  desc: string
  accent: string
  index: number
}) {
  const { ref, visible } = useFadeIn(0.1)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, box-shadow 0.25s ease, border-color 0.25s ease`,
        padding: '2rem',
        background: hovered ? 'white' : 'rgba(255,255,255,0.7)',
        borderRadius: '16px',
        border: hovered
          ? `1.5px solid ${accent === '#2563EB' ? 'rgba(37,99,235,0.3)' : 'rgba(16,185,129,0.3)'}`
          : '1.5px solid rgba(15,23,42,0.07)',
        boxShadow: hovered ? '0 8px 32px rgba(37,99,235,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: accent === '#2563EB' ? 'rgba(37,99,235,0.08)' : 'rgba(16,185,129,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        <Icon size={22} color={accent} strokeWidth={1.6} />
      </div>
      <h3 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontWeight: 800,
        fontSize: '1.15rem',
        color: '#0F172A',
        marginBottom: '0.65rem',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem',
        color: '#64748B',
        lineHeight: 1.75,
      }}>
        {desc}
      </p>
    </div>
  )
}

export default function About() {
  const hero = useFadeIn(0.1)
  const mission = useFadeIn(0.15)
  const vision = useFadeIn(0.15)
  const enterprise = useFadeIn(0.15)

  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section
        style={{
          background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDF9 100%)',
          padding: '9rem 2rem 6rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div
          ref={hero.ref}
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            textAlign: 'center',
            opacity: hero.visible ? 1 : 0,
            transform: hero.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: '#2563EB',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            About Cosmolix
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#0F172A',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            We Build Technology That{' '}
            <em style={{ color: '#2563EB', fontStyle: 'italic' }}>Thinks Ahead</em>
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1.05rem',
            color: '#64748B',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}>
            Cosmolix is a global technology company delivering AI-driven software,
            enterprise platforms, and talent programs that transform how organizations
            operate and grow.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#mission" style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: 'white',
              background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
              textDecoration: 'none',
              padding: '0.75rem 1.75rem',
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 18px rgba(37,99,235,0.28)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Our Mission <ArrowRight size={14} />
            </a>
            <a href="#contact" style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#2563EB',
              background: 'white',
              textDecoration: 'none',
              padding: '0.75rem 1.75rem',
              borderRadius: '999px',
              border: '1.5px solid rgba(37,99,235,0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Work With Us
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#F8FAFF', padding: '4rem 2rem' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.25rem',
        }}>
          {[
            { value: '2019', label: 'Founded', delay: 0 },
            { value: '42+', label: 'Countries Served', delay: 0.08 },
            { value: '12K+', label: 'Engineers Trained', delay: 0.16 },
            { value: '3.8K+', label: 'Projects Delivered', delay: 0.24 },
            { value: '98%', label: 'Client Satisfaction', delay: 0.32 },
          ].map(s => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section id="mission" style={{ background: '#FAFAF8', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          {/* Mission */}
          <div
            ref={mission.ref}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              opacity: mission.visible ? 1 : 0,
              transform: mission.visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(37,99,235,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Target size={22} color="#2563EB" strokeWidth={1.6} />
                </div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem',
                  fontWeight: 700, letterSpacing: '0.12em', color: '#2563EB',
                  textTransform: 'uppercase',
                }}>Our Mission</p>
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Solving Real Problems
                <br />
                <em style={{ color: '#2563EB', fontStyle: 'italic' }}>At Scale</em>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                color: '#64748B', lineHeight: 1.8,
              }}>
                To empower enterprises and innovators with intelligent, scalable AI
                systems that solve real-world problems and drive measurable business
                outcomes.
              </p>
            </div>

            {/* Mission visual */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.05), rgba(16,185,129,0.05))',
              border: '1px solid rgba(37,99,235,0.1)',
              borderRadius: '20px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {[
                { label: 'Intelligent Systems', pct: '95%', color: '#2563EB' },
                { label: 'Scalable Architecture', pct: '90%', color: '#10B981' },
                { label: 'Measurable Outcomes', pct: '98%', color: '#2563EB' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#334155', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: item.color, fontWeight: 700 }}>{item.pct}</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(37,99,235,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: mission.visible ? item.pct : '0%',
                      background: item.color,
                      borderRadius: '999px',
                      transition: 'width 1.2s ease 0.4s',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.12), transparent)' }} />

          {/* Vision */}
          <div
            ref={vision.ref}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              opacity: vision.visible ? 1 : 0,
              transform: vision.visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
            }}
          >
            {/* Vision visual */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(37,99,235,0.05))',
              border: '1px solid rgba(16,185,129,0.12)',
              borderRadius: '20px',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              order: 1,
            }}>
              {[
                { label: 'Global Partner', color: '#2563EB' },
                { label: 'AI-First', color: '#10B981' },
                { label: 'Reliability', color: '#10B981' },
                { label: 'Innovation', color: '#2563EB' },
              ].map(tag => (
                <div key={tag.label} style={{
                  padding: '1rem',
                  background: 'white',
                  borderRadius: '12px',
                  border: `1px solid ${tag.color === '#2563EB' ? 'rgba(37,99,235,0.12)' : 'rgba(16,185,129,0.12)'}`,
                  textAlign: 'center',
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: tag.color,
                }}>
                  {tag.label}
                </div>
              ))}
            </div>

            <div style={{ order: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(16,185,129,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Eye size={22} color="#10B981" strokeWidth={1.6} />
                </div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem',
                  fontWeight: 700, letterSpacing: '0.12em', color: '#10B981',
                  textTransform: 'uppercase',
                }}>Our Vision</p>
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                The Global Partner
                <br />
                <em style={{ color: '#10B981', fontStyle: 'italic' }}>Of Choice</em>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                color: '#64748B', lineHeight: 1.8,
              }}>
                To be the global partner of choice for organizations seeking
                transformative AI-driven technology — setting the standard for
                innovation, reliability, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY & PILLARS ── */}
      <section style={{ background: '#F8FAFF', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem',
              fontWeight: 600, letterSpacing: '0.12em', color: '#2563EB',
              textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              How We Work
            </p>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              Principles That Drive
              <em style={{ color: '#2563EB', fontStyle: 'italic' }}> Everything</em>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                icon: Lightbulb,
                title: 'Innovation Philosophy',
                desc: "We don't follow trends — we anticipate them. Our R&D-first approach ensures every product is built on cutting-edge research and validated through rigorous testing.",
                accent: '#2563EB',
              },
              {
                icon: FlaskConical,
                title: 'Research-Driven',
                desc: 'Every solution begins with deep domain research. We combine academic rigor with engineering excellence to deliver systems that outperform conventional approaches.',
                accent: '#10B981',
              },
              {
                icon: Building2,
                title: 'Enterprise Positioning',
                desc: 'Trusted by forward-thinking organizations, Cosmolix delivers enterprise-grade solutions with the agility of a startup — built for compliance, scale, and long-term reliability.',
                accent: '#2563EB',
              },
            ].map((card, i) => (
              <PhilosophyCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE TRUST ── */}
      <section style={{ background: '#FAFAF8', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            ref={enterprise.ref}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              opacity: enterprise.visible ? 1 : 0,
              transform: enterprise.visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
            }}
          >
            <div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.12em', color: '#10B981',
                textTransform: 'uppercase', marginBottom: '0.75rem',
              }}>
                Enterprise Grade
              </p>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Built for Scale,
                <br />
                <em style={{ color: '#10B981', fontStyle: 'italic' }}>Trusted at Every Step</em>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                color: '#64748B', lineHeight: 1.8, marginBottom: '2rem',
              }}>
                Trusted by forward-thinking organizations, Cosmolix delivers
                enterprise-grade solutions with the agility of a startup. Our
                platforms are built for compliance, scale, and long-term
                reliability — meeting the highest standards of security and
                performance.
              </p>
              <a href="#services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                fontSize: '0.9rem', color: '#10B981', textDecoration: 'none',
                borderBottom: '1.5px solid rgba(16,185,129,0.3)',
                paddingBottom: '2px', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = '#10B981')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(16,185,129,0.3)')}
              >
                Explore our services <ArrowRight size={14} />
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'SOC 2 Compliant', sub: 'Security you can rely on', color: '#2563EB' },
                { label: 'ISO 27001 Aligned', sub: 'Information security management', color: '#10B981' },
                { label: 'GDPR Ready', sub: 'Data privacy by design', color: '#2563EB' },
                { label: '99.9% Uptime SLA', sub: 'Enterprise-grade reliability', color: '#10B981' },
              ].map(badge => (
                <div key={badge.label} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem', background: 'white',
                  borderRadius: '12px', border: '1px solid rgba(37,99,235,0.08)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: badge.color, flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>
                      {badge.label}
                    </div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#94A3B8' }}>
                      {badge.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF, #F0FDF9)',
        padding: '5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Ready to build something{' '}
            <em style={{ color: '#2563EB', fontStyle: 'italic' }}>extraordinary?</em>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
            color: '#64748B', lineHeight: 1.75, marginBottom: '2rem',
          }}>
            Join 42+ countries worth of enterprises that trust Cosmolix to
            deliver intelligent, scalable technology.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
              fontSize: '0.9rem', color: 'white',
              background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
              textDecoration: 'none', padding: '0.75rem 1.75rem',
              borderRadius: '999px', display: 'inline-flex',
              alignItems: 'center', gap: '0.4rem',
              boxShadow: '0 4px 18px rgba(37,99,235,0.28)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Get in Touch <ArrowRight size={14} />
            </a>
            <a href="#careers" style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
              fontSize: '0.9rem', color: '#10B981',
              background: 'white', textDecoration: 'none',
              padding: '0.75rem 1.75rem', borderRadius: '999px',
              border: '1.5px solid rgba(16,185,129,0.25)',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              View Careers
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}