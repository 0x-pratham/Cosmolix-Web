import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Zap, PieChart, Shield } from 'lucide-react'

const products = [
  {
    tag: 'PRODUCT',
    name: 'CosmoWork',
    icon: Zap,
    desc: 'A next-gen coworking marketplace where niche workspace owners list their spaces and professionals book on demand — powered by AI-driven matching and smart scheduling.',
    href: '#cosmowork',
    color: '#2563EB',
  },
  {
    tag: 'PRODUCT',
    name: 'CosmoAnalytics',
    icon: PieChart,
    desc: 'Upload your architecture diagram and receive AI-generated cost-saving alternatives, memory-efficient redesigns, and optimized technology recommendations.',
    href: '#cosmoanalytics',
    color: '#10B981',
  },
  {
    tag: 'PRODUCT',
    name: 'CosmoCyber',
    icon: Shield,
    desc: 'Pre-built cyber test suites for modern architectures, AI-driven threat detection for emerging attack vectors, and fully customizable security audits for any stack.',
    href: '#cosmocyber',
    color: '#2563EB',
  },
]

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const Icon = product.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s ease ${index * 0.12}s`,
        background: hovered ? 'white' : 'rgba(255,255,255,0.6)',
        border: hovered
          ? `1.5px solid ${product.color === '#2563EB' ? 'rgba(37,99,235,0.25)' : 'rgba(16,185,129,0.25)'}`
          : '1.5px solid rgba(15,23,42,0.07)',
        borderRadius: '16px',
        padding: '2rem 2.5rem',
        cursor: 'pointer',
        boxShadow: hovered ? '0 8px 32px rgba(37,99,235,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s ease ${index * 0.12}s, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: product.color,
            background: product.color === '#2563EB'
              ? 'rgba(37,99,235,0.08)'
              : 'rgba(16,185,129,0.08)',
            padding: '3px 10px',
            borderRadius: '999px',
          }}
        >
          {product.tag}
        </span>
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: product.color === '#2563EB'
              ? 'rgba(37,99,235,0.07)'
              : 'rgba(16,185,129,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={18} color={product.color} strokeWidth={1.7} />
        </div>
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 800,
          fontSize: '1.4rem',
          color: '#0F172A',
          letterSpacing: '-0.01em',
        }}
      >
        {product.name}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.92rem',
          color: '#64748B',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {product.desc}
      </p>

      {/* Link */}
      <a
        href={product.href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          fontSize: '0.88rem',
          color: product.color,
          textDecoration: 'none',
          marginTop: '0.25rem',
        }}
      >
        View Details
        <ArrowRight size={14} />
      </a>
    </div>
  )
}

export default function Products() {
  const headRef = useRef<HTMLDivElement>(null)
  const [headVisible, setHeadVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadVisible(true) },
      { threshold: 0.2 }
    )
    if (headRef.current) observer.observe(headRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="products"
      style={{
        background: '#FAFAF8',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Bg accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.03), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div
          ref={headRef}
          style={{
            maxWidth: '600px',
            marginBottom: '4rem',
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#10B981',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Our Products
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0F172A',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Intelligent Products,{' '}
            <em style={{ color: '#10B981', fontStyle: 'italic' }}>Real Impact</em>
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.7,
            }}
          >
            Enterprise-grade platforms built with cutting-edge AI to solve complex problems.
          </p>
        </div>

        {/* Product cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}