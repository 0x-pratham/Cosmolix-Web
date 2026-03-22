import { motion } from "framer-motion";

const stats = [
  { value: "R&D", label: "AI Projects", sub: "Continuously Tuning", icon: "⚡" },
  { value: "Enterprise", label: "Grade Security", sub: "Data First Approach", icon: "🔒" },
  { value: "Cloud", label: "Native Architecture", sub: "Built for Scale", icon: "☁" },
];

const Stats = () => (
  <section className="relative py-14 overflow-hidden"
    style={{
      background:"linear-gradient(180deg,#0a1f5c 0%,#081535 100%)",
      borderTop:"1px solid rgba(56,189,248,0.1)",
      borderBottom:"1px solid rgba(56,189,248,0.1)",
    }}>
    <div className="absolute inset-0 pointer-events-none"
      style={{ background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(37,99,235,0.1) 0%,transparent 70%)" }} />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
        style={{ borderRadius:"1rem", overflow:"hidden", border:"1px solid rgba(56,189,248,0.1)",
          divideColor:"rgba(56,189,248,0.1)" }}>
        {stats.map((s,i) => (
          <motion.div key={s.label}
            initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }} transition={{ delay:i*0.15,duration:0.5 }}
            className="group relative flex flex-col items-center text-center px-10 py-10"
            style={{ background:"rgba(6,14,36,0.8)" }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background:"radial-gradient(circle at 50% 50%,rgba(37,99,235,0.12) 0%,transparent 70%)" }} />
            <span className="text-3xl mb-4">{s.icon}</span>
            <div className="text-3xl md:text-4xl font-black mb-1"
              style={{ background:"linear-gradient(95deg,#38bdf8,#2563eb)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {s.value}
            </div>
            <div className="text-sm font-bold text-white mb-1 uppercase tracking-wider">{s.label}</div>
            <div className="text-xs" style={{ color:"rgba(148,163,184,0.5)" }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;