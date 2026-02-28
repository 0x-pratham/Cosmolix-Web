import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Target, Eye, Lightbulb, FlaskConical } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower enterprises and innovators with intelligent, scalable AI systems that solve real-world problems and drive measurable business outcomes.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the global partner of choice for organizations seeking transformative AI-driven technology — setting the standard for innovation, reliability, and impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Philosophy",
    desc: "We don't follow trends — we anticipate them. Our R&D-first approach ensures every product is built on cutting-edge research and validated through rigorous testing.",
  },
  {
    icon: FlaskConical,
    title: "Research-Driven",
    desc: "Every solution begins with deep domain research. We combine academic rigor with engineering excellence to deliver systems that outperform conventional approaches.",
  },
];

const About = () => (
  <div className="pt-24">
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          badge="About Us"
          title="Engineering the Future of Enterprise AI"
          description="Cosmolix Pvt Ltd is an AI-first technology company building scalable software, SaaS platforms, and intelligent systems for enterprises worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-8"
            >
              <v.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-card p-8 md:p-12 mt-6 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Positioning</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Trusted by forward-thinking organizations, Cosmolix delivers enterprise-grade solutions with the agility of a startup. Our platforms are built for compliance, scale, and long-term reliability — meeting the highest standards of security and performance.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
