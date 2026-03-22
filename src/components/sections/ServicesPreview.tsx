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
  <section className="section-spacing relative overflow-hidden"
    style={{ background:"linear-gradient(180deg,#081535 0%,#060e24 100%)" }}>
    <div className="absolute inset-0 bg-glow pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <SectionHeader
        badge="What We Do"
        title="Services Built for Scale"
        description="From AI research to enterprise cloud platforms, we deliver solutions that drive measurable impact."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }} transition={{ delay:i*0.1,duration:0.55,ease:"easeOut" }}
            className="cx-card group p-7 flex flex-col">

            {/* icon */}
            <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-5 transition-all duration-300"
              style={{ background:"rgba(37,99,235,0.15)", border:"1px solid rgba(56,189,248,0.18)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.35)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.15)";
              }}>
              <s.icon className="w-5 h-5" strokeWidth={1.8} style={{ color:"#38bdf8" }} />
            </div>

            <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily:"'Syne',sans-serif" }}>
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed flex-1" style={{ color:"rgba(148,163,184,0.75)" }}>
              {s.desc}
            </p>
            <span className="mt-5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color:"#38bdf8" }}>
              Learn More →
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;