import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Code2,
  Cloud,
  BarChart3,
  Monitor,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom ML models, NLP, computer vision, and predictive analytics tailored to your domain.",
    accent: "#2563EB",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "End-to-end engineering of scalable applications built for performance and reliability.",
    accent: "#10B981",
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Platforms",
    desc: "Cloud-native SaaS products designed for multi-tenancy, scale, and global availability.",
    accent: "#2563EB",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Research",
    desc: "Transform raw data into actionable intelligence with advanced analytics pipelines.",
    accent: "#10B981",
  },
  {
    icon: Monitor,
    title: "IT-Enabled Services",
    desc: "Enterprise IT solutions including infrastructure modernization and digital transformation.",
    accent: "#2563EB",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    desc: "Upskill teams with industry-recognized programs in AI, cloud, and cybersecurity.",
    accent: "#10B981",
  },
];

// function ServiceItem({
//   service,
//   index,
// }: {
//   service: (typeof services)[0]
//   index: number
// }) {
//   const ref = useRef<HTMLDivElement>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true) },
//       { threshold: 0.15 }
//     )
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   const Icon = service.icon

//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'translateY(0)' : 'translateY(28px)',
//         transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
//         borderBottom: '1px solid rgba(37,99,235,0.08)',
//         padding: '2rem 0',
//         display: 'grid',
//         gridTemplateColumns: '48px 1fr auto',
//         alignItems: 'center',
//         gap: '1.5rem',
//         cursor: 'default',
//       }}
//       className="service-row"
//       onMouseEnter={e => {
//         const el = e.currentTarget
//         el.style.background = 'rgba(37,99,235,0.025)'
//         el.style.borderRadius = '12px'
//         el.style.paddingLeft = '1rem'
//         el.style.paddingRight = '1rem'
//         el.style.marginLeft = '-1rem'
//         el.style.marginRight = '-1rem'
//       }}
//       onMouseLeave={e => {
//         const el = e.currentTarget
//         el.style.background = 'transparent'
//         el.style.borderRadius = '0'
//         el.style.paddingLeft = '0'
//         el.style.paddingRight = '0'
//         el.style.marginLeft = '0'
//         el.style.marginRight = '0'
//       }}
//     >
//       {/* Icon */}
//       <div
//         style={{
//           width: '48px',
//           height: '48px',
//           borderRadius: '12px',
//           background: service.accent === '#2563EB'
//             ? 'rgba(37,99,235,0.08)'
//             : 'rgba(16,185,129,0.08)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexShrink: 0,
//         }}
//       >
//         <Icon size={22} color={service.accent} strokeWidth={1.6} />
//       </div>

//       {/* Text */}
//       <div>
//         <h3
//           style={{
//             fontFamily: 'Playfair Display, Georgia, serif',
//             fontWeight: 700,
//             fontSize: '1.1rem',
//             color: '#0F172A',
//             marginBottom: '0.3rem',
//           }}
//         >
//           {service.title}
//         </h3>
//         <p
//           style={{
//             fontFamily: 'DM Sans, sans-serif',
//             fontSize: '0.9rem',
//             color: '#64748B',
//             lineHeight: 1.6,
//             maxWidth: '480px',
//           }}
//         >
//           {service.desc}
//         </p>
//       </div>

//       {/* Arrow */}
//       <ArrowRight
//         size={18}
//         color={service.accent}
//         style={{ opacity: 0.4, flexShrink: 0 }}
//       />
//     </div>
//   )
// }

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
        borderBottom: "1px solid rgba(37,99,235,0.08)",
        padding: "2rem 0",
        display: "grid",
        gridTemplateColumns: "48px 1fr auto",
        alignItems: "center",
        gap: "1.5rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      className="service-row group"
      onMouseEnter={(e) => {
        const el = e.currentTarget;

        el.style.background = "rgba(255,255,255,0.6)";
        el.style.backdropFilter = "blur(6px)";
        el.style.borderRadius = "14px";
        el.style.paddingLeft = "1rem";
        el.style.paddingRight = "1rem";
        el.style.marginLeft = "-1rem";
        el.style.marginRight = "-1rem";
        el.style.boxShadow = "0 12px 40px rgba(37,99,235,0.12)";
        el.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;

        el.style.background = "transparent";
        el.style.backdropFilter = "none";
        el.style.borderRadius = "0";
        el.style.paddingLeft = "0";
        el.style.paddingRight = "0";
        el.style.marginLeft = "0";
        el.style.marginRight = "0";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* 🔥 Gradient Shine Sweep */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
          transition: "all 0.6s ease",
        }}
        className="group-hover:left-[100%]"
      />

      {/* Glow Line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: service.accent,
          opacity: 0,
          transition: "opacity 0.3s",
        }}
        className="group-hover:opacity-100"
      />

      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background:
            service.accent === "#2563EB"
              ? "rgba(37,99,235,0.08)"
              : "rgba(16,185,129,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
        className="group-hover:scale-110"
      >
        <Icon size={22} color={service.accent} strokeWidth={1.6} />
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#0F172A",
            marginBottom: "0.3rem",
            transition: "all 0.3s ease",
          }}
          className="group-hover:text-blue-600"
        >
          {service.title}
        </h3>

        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.9rem",
            color: "#64748B",
            lineHeight: 1.6,
            maxWidth: "480px",
            transition: "color 0.3s",
          }}
          className="group-hover:text-slate-700"
        >
          {service.desc}
        </p>
      </div>

      {/* Arrow */}
      <ArrowRight
        size={18}
        color={service.accent}
        style={{
          opacity: 0.5,
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="group-hover:translate-x-3 group-hover:opacity-100"
      />
    </div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeadVisible(true);
      },
      { threshold: 0.2 },
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      style={{
        background: "#F8FAFF",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle bg decoration */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Header */}
        <div
          ref={headRef}
          style={{
            marginBottom: "4rem",
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#2563EB",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            What We Do
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#0F172A",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Services Built
              <em style={{ color: "#2563EB", fontStyle: "italic" }}>
                {" "}
                for Scale
              </em>
            </h2>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "1rem",
                color: "#64748B",
                maxWidth: "400px",
                lineHeight: 1.7,
                textAlign: "right",
              }}
            >
              From AI research to enterprise cloud platforms, we deliver
              solutions that drive measurable impact.
            </p>
          </div>
          {/* Ruled line */}
          <div
            style={{
              marginTop: "2rem",
              height: "1px",
              background:
                "linear-gradient(90deg, #2563EB 0%, rgba(37,99,235,0.1) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* Service list rows */}
        <div>
          {services.map((s, i) => (
            <ServiceItem key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#2563EB",
              textDecoration: "none",
              borderBottom: "1.5px solid rgba(37,99,235,0.3)",
              paddingBottom: "2px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#2563EB")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(37,99,235,0.3)")
            }
          >
            View all services
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
