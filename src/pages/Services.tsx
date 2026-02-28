import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Brain, Code2, Cloud, BarChart3, Monitor, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "We design and deploy custom AI/ML models — from natural language processing and computer vision to predictive analytics and recommendation engines. Our solutions are tailored to your domain, trained on your data, and optimized for production.",
    points: ["Custom model training & fine-tuning", "NLP & conversational AI", "Computer vision pipelines", "MLOps & model monitoring"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Full-cycle software engineering for web, mobile, and enterprise platforms. We build systems that are performant, maintainable, and designed to evolve with your business.",
    points: ["Full-stack web & mobile apps", "API design & microservices", "Legacy system modernization", "DevOps & CI/CD pipelines"],
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Platforms",
    desc: "We architect and build cloud-native SaaS products from the ground up — multi-tenant, globally distributed, and designed for scale from day one.",
    points: ["Multi-tenant architecture", "Serverless & containerized deployments", "Auto-scaling & cost optimization", "Global CDN & edge computing"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Research",
    desc: "Transform raw data into strategic intelligence. We build end-to-end analytics pipelines, dashboards, and research tools that empower data-driven decisions.",
    points: ["Real-time analytics dashboards", "ETL & data pipeline engineering", "Business intelligence tools", "Research data platforms"],
  },
  {
    icon: Monitor,
    title: "IT-Enabled Services",
    desc: "Enterprise IT solutions for government and private organizations — infrastructure modernization, digital transformation, and managed services.",
    points: ["Infrastructure modernization", "Digital transformation consulting", "Managed IT services", "Government & compliance solutions"],
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    desc: "Upskill your workforce with industry-aligned training programs in AI, cloud computing, cybersecurity, and software engineering.",
    points: ["AI & ML certification programs", "Cloud architecture training", "Cybersecurity workshops", "Custom corporate training"],
  },
];

const Services = () => (
  <div className="pt-24">
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          badge="Services"
          title="End-to-End Technology Services"
          description="We deliver comprehensive solutions across the full technology spectrum — from AI research to enterprise cloud deployment."
        />

        <div className="space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card-hover p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <s.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
