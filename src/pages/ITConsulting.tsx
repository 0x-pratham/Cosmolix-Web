"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Database,
  Globe,
  Layout,
  Zap,
  BarChart3,
  ArrowRight,
  Search,
  Settings,
  Rocket,
  CheckCircle2,
  Building2,
  LineChart,
  Users,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  Briefcase,
  Layers,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

const CONSULTING_SERVICES: {
  title: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
}[] = [
  {
    title: "Enterprise Architecture",
    desc: "Design resilient, scalable digital infrastructures aligned with long-term business objectives and regulatory compliance.",
    icon: Layout,
    tags: ["TOGAF", "Microservices", "API-First"],
  },
  {
    title: "Cloud Transformation",
    desc: "Strategic migration and optimization for multi-cloud and hybrid environments with cost governance built in.",
    icon: Globe,
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Cybersecurity Strategy",
    desc: "Rigorous security benchmarking, zero-trust protocols, and threat modeling to protect proprietary data.",
    icon: ShieldCheck,
    tags: ["Zero Trust", "SOC 2", "Pen Testing"],
  },
  {
    title: "AI & ML Implementation",
    desc: "Integrate deep learning models into existing workflows for enhanced operational intelligence and automation.",
    icon: Cpu,
    tags: ["LLMs", "MLOps", "NLP"],
  },
  {
    title: "Data Strategy",
    desc: "Optimize data pipelines and governance frameworks for high-performance analytics and real-time insights.",
    icon: Database,
    tags: ["Data Lake", "ETL", "BI"],
  },
  {
    title: "Digital Transformation",
    desc: "End-to-end modernization of legacy systems using agile methodologies and modern technology stacks.",
    icon: Zap,
    tags: ["Agile", "DevOps", "Legacy Migration"],
  },
];

const PROCESS_STEPS: {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Audit & Discovery",
    desc: "Deep-dive assessment of your current infrastructure, workflows, and strategic objectives.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategic Roadmap",
    desc: "A prioritized, phased plan with clear milestones, budgets, and measurable KPIs.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Execution & Integration",
    desc: "Hands-on implementation with continuous stakeholder alignment and risk mitigation.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Optimization",
    desc: "Post-deployment monitoring, performance tuning, and iterative improvement cycles.",
    icon: BarChart3,
  },
];

const INDUSTRIES = [
  { name: "Financial Services", icon: LineChart },
  { name: "Healthcare", icon: ShieldCheck },
  { name: "Manufacturing", icon: Settings },
  { name: "Retail & E-Commerce", icon: Globe },
  { name: "Education", icon: Users },
  { name: "Government", icon: Building2 },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Strategic Advisory",
    desc: "Executive-level guidance on technology direction, vendor selection, and digital roadmaps.",
    duration: "3–6 months",
    icon: Target,
  },
  {
    title: "Project Delivery",
    desc: "End-to-end execution of defined initiatives with dedicated engineering teams and SLAs.",
    duration: "Scoped timeline",
    icon: Briefcase,
  },
  {
    title: "Managed Partnership",
    desc: "Ongoing co-managed operations with continuous optimization and strategic reviews.",
    duration: "12+ months",
    icon: Layers,
  },
];

const OUTCOMES = [
  { metric: "40%", label: "Average cost reduction in cloud spend" },
  { metric: "3×", label: "Faster time-to-market for new products" },
  { metric: "99.9%", label: "Uptime SLA across managed systems" },
  { metric: "60+", label: "Enterprise engagements delivered" },
];

const DIFFERENTIATORS = [
  "ISO-certified processes and documentation standards",
  "Cross-functional teams spanning AI, cloud, and security",
  "Transparent reporting with executive-ready dashboards",
  "Vendor-agnostic recommendations — your interests first",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof CONSULTING_SERVICES)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5"
    >
      <span className="absolute top-8 right-8 text-[10px] font-black text-slate-200 tracking-[0.3em] group-hover:text-blue-200 transition-colors">
        0{index + 1}
      </span>

      <motion.div
        animate={hovered ? { scale: 1.05 } : { scale: 1 }}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
          hovered ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
        }`}
      >
        <Icon size={24} strokeWidth={1.5} />
      </motion.div>

      <h3 className="text-xl lg:text-2xl font-serif font-bold text-cx-dark mb-3 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
        {service.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-600 transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="relative w-full"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-400/5 rounded-[3rem] blur-2xl" />

      <div className="relative bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-3 text-[10px] font-mono text-slate-400 tracking-wider">
            cosmolix — strategy_dashboard
          </span>
        </div>

        <div className="p-6 lg:p-8 space-y-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Cloud Health", value: "98%", color: "text-emerald-600" },
              { label: "Security Score", value: "A+", color: "text-blue-600" },
              { label: "ROI Forecast", value: "3.2×", color: "text-violet-600" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-100"
              >
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Transformation Progress
              </span>
              <span className="text-[10px] font-mono text-blue-600">Q2 2026</span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[35, 55, 40, 70, 60, 85, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 opacity-80"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-600/5 border border-blue-600/10">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-cx-dark">Strategic Advisory Active</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                4 initiatives on track · Next review in 12 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ITConsultingPage() {
  return (
    <div className="bg-cx-bg min-h-screen overflow-hidden">
      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-20 lg:pb-28"
        style={{
          background:
            "linear-gradient(160deg, #FAFAF8 0%, #EFF6FF 45%, #FAFAF8 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-2/3 h-2/3 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(37,99,235,0.08), transparent 70%)",
            }}
          />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="consulting-dots"
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#consulting-dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-7"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full w-fit bg-blue-600/5 border border-blue-600/15"
              >
                <ShieldCheck size={14} className="text-blue-600" />
                <span className="text-[10px] font-black text-blue-600 tracking-[0.25em] uppercase">
                  Strategic Advisory
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-serif font-black text-cx-dark leading-[1.08] tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Engineering{" "}
                <span className="italic text-blue-600">Strategic</span>
                <br />
                Digital Futures.
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
              />

              <motion.p
                variants={itemVariants}
                className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed max-w-lg"
              >
                Cosmolix delivers enterprise-grade IT consulting that bridges
                complex technological challenges with measurable business
                outcomes — from architecture to execution.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 items-center"
              >
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-bold text-sm no-underline shadow-xl shadow-blue-600/20 transition-transform hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  }}
                >
                  Schedule Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-cx-dark bg-white border border-slate-200 shadow-sm no-underline hover:bg-slate-50 transition-colors"
                >
                  Explore Services
                  <ChevronRight size={16} className="text-blue-600" />
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 pt-2"
              >
                {[
                  { icon: CheckCircle2, text: "ISO-Certified Processes" },
                  { icon: Users, text: "Dedicated Advisory Teams" },
                  { icon: Clock, text: "24h Response SLA" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-slate-500">
                    <Icon size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-semibold">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* ── OUTCOMES BAR ── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {OUTCOMES.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <p className="text-3xl lg:text-4xl font-black text-blue-600 font-serif mb-1">
                  {item.metric}
                </p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[180px] mx-auto lg:mx-0">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/5 border border-blue-600/10 mb-6">
            <Sparkles size={12} className="text-blue-600" />
            <span className="text-[9px] font-black text-blue-600 tracking-[0.2em] uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-cx-dark leading-none tracking-tighter mb-6">
            Consulting <span className="text-blue-600 italic">Services</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
            End-to-end advisory across architecture, security, data, and
            transformation — tailored to your industry and scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CONSULTING_SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-cx-section py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <span className="text-[10px] font-black text-blue-600 tracking-[0.25em] uppercase">
                Sector Expertise
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-black text-cx-dark mt-3 tracking-tight">
                Industries We <span className="italic text-blue-600">Serve</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm font-medium leading-relaxed">
              Deep domain knowledge across regulated and high-growth sectors,
              with compliance-aware delivery frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all text-center group cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <p className="text-xs font-bold text-cx-dark leading-snug">
                    {industry.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black text-blue-600 tracking-[0.25em] uppercase">
              Flexible Engagement
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-cx-dark mt-3 mb-6 tracking-tight leading-tight">
              How We <span className="italic text-blue-600">Partner</span> With You
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Whether you need a one-time strategic assessment or a long-term
              technology partner, our engagement models adapt to your
              organization's maturity and goals.
            </p>

            <ul className="space-y-3">
              {DIFFERENTIATORS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-slate-600 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-4">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-5 p-6 lg:p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="font-serif font-bold text-cx-dark text-lg">
                        {model.title}
                      </h3>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider whitespace-nowrap">
                        {model.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {model.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="bg-cx-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern
              id="grid-dark"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-dark)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="text-[10px] font-black text-blue-400 tracking-[0.25em] uppercase">
              Proven Framework
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white mt-4 leading-tight tracking-tight">
              Our Operational{" "}
              <span className="italic text-blue-400">Methodology</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm font-medium">
              A structured, repeatable process that de-risks transformation and
              delivers outcomes at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative group"
                >
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
                  )}

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full border border-blue-400/40 flex items-center justify-center text-blue-400 bg-blue-400/10">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-400/60 tracking-widest">
                        {step.step}
                      </span>
                    </div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative overflow-hidden bg-white p-10 md:p-16 lg:p-20 rounded-[2.5rem] border border-blue-100 shadow-2xl shadow-blue-900/10 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 mb-8"
            >
              <Sparkles size={14} className="text-blue-600" />
              <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">
                Start Your Transformation
              </span>
            </motion.div>

            <h2 className="font-serif text-3xl md:text-5xl font-black text-cx-dark mb-6 leading-tight tracking-tight">
              Ready to{" "}
              <span className="text-blue-600 italic">Architect</span> Your
              Strategy?
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed">
              Connect with our advisory team for a complimentary discovery
              session. We'll assess your landscape and outline a path forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-cx-dark text-white rounded-2xl font-bold text-sm transition-all hover:bg-blue-600 no-underline shadow-lg shadow-blue-900/10 group"
              >
                Initiate Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 text-slate-600 font-bold text-sm no-underline hover:text-blue-600 transition-colors"
              >
                Learn About Cosmolix
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
