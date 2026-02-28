import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 md:p-20 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Let's Build Intelligent Systems{" "}
          <span className="gradient-text">Together</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Partner with us to transform your enterprise with AI-driven innovation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground glow-btn transition-all hover:brightness-110 mt-8"
        >
          Request a Consultation
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
