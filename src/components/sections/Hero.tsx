import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: "linear-gradient(160deg,#060e24 0%,#081535 45%,#0a1f5c 100%)" }}
  >
    {/* grid */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.05) 1px,transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />

    {/* glow orbs */}
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{ width:640,height:640,top:"-15%",right:"-12%",
        background:"radial-gradient(circle,rgba(37,99,235,0.3) 0%,transparent 65%)",filter:"blur(72px)" }}
      animate={{ scale:[1,1.12,1] }} transition={{ duration:9,repeat:Infinity,ease:"easeInOut" }}
    />
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{ width:400,height:400,bottom:"0%",left:"-8%",
        background:"radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 65%)",filter:"blur(80px)" }}
      animate={{ scale:[1,1.2,1] }} transition={{ duration:11,repeat:Infinity,ease:"easeInOut",delay:2 }}
    />

    {/* bg image — very dim */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.img src="https://i.ibb.co/b5wvgHNL/Hero2.jpg" alt=""
        className="w-full h-full object-cover" style={{ opacity:0.055 }}
        animate={{ scale:[1,1.04,1] }} transition={{ duration:28,repeat:Infinity,ease:"easeInOut" }}
      />
    </div>

    <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-28 pb-20">

      {/* LEFT */}
      <motion.div initial={{ opacity:0,y:48 }} animate={{ opacity:1,y:0 }}
        transition={{ duration:0.9,ease:[0.16,1,0.3,1] }}>

        {/* eyebrow */}
        <motion.div className="flex items-center gap-3 mb-7"
          initial={{ opacity:0,x:-20 }} animate={{ opacity:1,x:0 }}
          transition={{ delay:0.25,duration:0.6 }}>
          <span className="h-2 w-2 rounded-full bg-sky-400"
            style={{ boxShadow:"0 0 10px 3px rgba(56,189,248,0.7)" }} />
          <span className="text-xs font-semibold tracking-[0.28em] uppercase text-sky-400">
            AI-Powered Enterprise Solutions
          </span>
        </motion.div>

        {/* heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-black leading-[1.03] mb-6" style={{ fontFamily:"'Syne',sans-serif" }}>
          <span className="block text-white">Engineering</span>
          <span className="block text-white">the Future</span>
          <span className="block" style={{
            background:"linear-gradient(95deg,#38bdf8 0%,#2563eb 55%,#818cf8 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
          }}>with AI Systems</span>
        </h1>

        {/* body */}
        <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color:"rgba(148,163,184,0.9)" }}>
          We design and develop AI-powered software, cloud platforms, and
          scalable SaaS solutions for startups and enterprises worldwide.
        </p>

        {/* badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["AI Powered","Startup Ready","Enterprise Secure"].map((b,i) => (
            <motion.span key={b} initial={{ opacity:0,scale:0.85 }} animate={{ opacity:1,scale:1 }}
              transition={{ delay:0.55+i*0.1 }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background:"rgba(37,99,235,0.15)", border:"1px solid rgba(56,189,248,0.25)", color:"#7dd3fc" }}>
              {b}
            </motion.span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
            <Link to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white"
              style={{
                background:"linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 100%)",
                boxShadow:"0 0 28px rgba(37,99,235,0.45), 0 4px 14px rgba(0,0,0,0.3)",
              }}>
              Explore Products <span>→</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
            <Link to="/internship"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold"
              style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(56,189,248,0.25)", color:"#bae6fd" }}>
              Start Internship
            </Link>
          </motion.div>
        </div>

        <p className="mt-10 text-[11px] font-medium tracking-[0.25em] uppercase"
          style={{ color:"rgba(125,211,252,0.35)" }}>
          Build Scalable AI Products for the Future
        </p>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div className="hidden lg:flex items-center justify-center"
        initial={{ opacity:0,x:60 }} animate={{ opacity:1,x:0 }}
        transition={{ duration:1.1,ease:"easeOut",delay:0.35 }}>
        <motion.div animate={{ y:[0,-14,0] }}
          transition={{ duration:7,repeat:Infinity,ease:"easeInOut" }}
          className="relative">

          {/* outer glow */}
          <div className="absolute -inset-5 rounded-3xl pointer-events-none"
            style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.25),rgba(14,165,233,0.15))", filter:"blur(24px)" }} />

          <div className="relative w-[420px] rounded-3xl overflow-hidden"
            style={{
              background:"linear-gradient(160deg,rgba(8,21,53,0.97) 0%,rgba(6,14,36,0.98) 100%)",
              border:"1px solid rgba(56,189,248,0.18)",
              boxShadow:"0 24px 72px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}>

            {/* image */}
            <div className="relative h-52 overflow-hidden">
              <img src="https://i.ibb.co/BKny65gV/AI-ROBOT-UNIVERSE.jpg" alt="Cosmolix AI"
                className="w-full h-full object-cover" style={{ opacity:0.65 }} />
              <div className="absolute inset-0"
                style={{ background:"linear-gradient(to bottom,rgba(8,21,53,0.15) 0%,rgba(8,21,53,0.85) 100%)" }} />
              {/* live badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ background:"rgba(6,14,36,0.85)", border:"1px solid rgba(56,189,248,0.28)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-sky-300 uppercase tracking-wider">Live System</span>
              </div>
            </div>

            {/* body */}
            <div className="p-8">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-2 text-sky-400">AI Platform</p>
              <h3 className="text-xl font-bold text-white mb-3">Cosmolix Intelligence Core</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color:"rgba(148,163,184,0.7)" }}>
                Autonomous AI workflows, scalable cloud architecture, and intelligent SaaS infrastructure.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                {["AI","Cloud","Data"].map(c => (
                  <div key={c} className="py-2 rounded-xl text-center text-xs font-semibold"
                    style={{ background:"rgba(37,99,235,0.18)", border:"1px solid rgba(56,189,248,0.18)", color:"#7dd3fc" }}>
                    {c}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center pt-6"
                style={{ borderTop:"1px solid rgba(56,189,248,0.1)" }}>
                {[["99.9%","Uptime"],["<50ms","Latency"],["SOC2","Compliant"]].map(([v,l]) => (
                  <div key={l}>
                    <div className="text-sm font-bold text-sky-400">{v}</div>
                    <div className="text-[10px] mt-0.5" style={{ color:"rgba(148,163,184,0.4)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>

    {/* scroll cue */}
    <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      animate={{ y:[0,8,0] }} transition={{ duration:2,repeat:Infinity,ease:"easeInOut" }}>
      <span className="text-[10px] uppercase tracking-widest" style={{ color:"rgba(125,211,252,0.35)" }}>Scroll</span>
      <div className="w-px h-8" style={{ background:"linear-gradient(to bottom,rgba(56,189,248,0.45),transparent)" }} />
    </motion.div>
  </section>
);

export default Hero;