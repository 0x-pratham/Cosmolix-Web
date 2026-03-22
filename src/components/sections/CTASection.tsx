import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submitLead = async (e: any) => {
    e.preventDefault();
    if (!email.includes("@")) { toast.error("Please enter a valid email"); return; }
    setLoading(true);
    const { error } = await supabase.from("cta_leads").insert([{ email }]);
    setLoading(false);
    if (error) { toast.error("Something went wrong"); }
    else { toast.success("Thank you! We'll be in touch soon 🚀"); setEmail(""); }
  };

  return (
    <section className="section-spacing relative overflow-hidden"
      style={{ background:"linear-gradient(180deg,#060e24 0%,#081535 100%)" }}>

      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,0.12) 0%,transparent 70%)" }} />

      {/* decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border:"1px solid rgba(56,189,248,0.06)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border:"1px solid rgba(56,189,248,0.08)" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}
          className="max-w-3xl mx-auto text-center cx-card p-10 md:p-16">

          {/* eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-12" style={{ background:"rgba(56,189,248,0.4)" }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-sky-400">Partner With Us</span>
            <span className="h-px w-12" style={{ background:"rgba(56,189,248,0.4)" }} />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
            style={{ fontFamily:"'Syne',sans-serif" }}>
            Build the Next Generation{" "}
            <span style={{
              background:"linear-gradient(95deg,#38bdf8 0%,#2563eb 55%,#818cf8 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
            }}>of AI Systems</span>
          </h2>

          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color:"rgba(148,163,184,0.75)" }}>
            Partner with us to transform your enterprise with AI-driven innovation and scalable technology.
          </p>

          <form onSubmit={submitLead}
            className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input type="email" placeholder="Enter your business email"
              value={email} onChange={e => setEmail(e.target.value)}
              className="w-full sm:w-80 px-5 py-3 rounded-xl text-sm focus:outline-none"
              style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(56,189,248,0.2)",
                color:"#e2e8f0", fontFamily:"'Inter',sans-serif" }} />
            <button type="submit" disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 disabled:opacity-60"
              style={{ background:"linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 100%)",
                boxShadow:"0 0 24px rgba(37,99,235,0.35)", fontFamily:"'Inter',sans-serif" }}>
              {loading ? "Submitting…" : "Request Consultation"}
            </button>
          </form>

          <p className="mt-5 text-xs" style={{ color:"rgba(148,163,184,0.4)" }}>
            No spam. We'll reach out within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;