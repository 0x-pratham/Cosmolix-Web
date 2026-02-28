import { motion } from "framer-motion";
import { Brain, Code2, Cloud, BarChart3, Monitor, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Custom ML models, NLP, computer vision, and predictive analytics tailored to your domain." },
  { icon: Code2, title: "Custom Software Development", desc: "End-to-end engineering of scalable applications built for performance and reliability." },
  { icon: Cloud, title: "SaaS & Cloud Platforms", desc: "Cloud-native SaaS products designed for multi-tenancy, scale, and global availability." },
  { icon: BarChart3, title: "Data Analytics & Research", desc: "Transform raw data into actionable intelligence with advanced analytics pipelines." },
  { icon: Monitor, title: "IT-Enabled Services", desc: "Enterprise IT solutions including infrastructure modernization and digital transformation." },
  { icon: GraduationCap, title: "Training & Certification", desc: "Upskill teams with industry-recognized programs in AI, cloud, and cybersecurity." },
];

const ServicesPreview = () => (
  <section className="section-spacing relative">
    <div className="absolute inset-0 bg-glow-bottom pointer-events-none" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <SectionHeader
        badge="What We Do"
        title="Services Built for Scale"
        description="From AI research to enterprise cloud platforms, we deliver solutions that drive measurable impact."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-hover p-8"
          >
            <s.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
