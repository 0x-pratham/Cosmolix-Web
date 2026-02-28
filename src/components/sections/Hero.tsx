import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[120px] bg-gradient-to-br from-primary/40 to-accent/30 pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 relative z-10 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6">
          AI-Powered Enterprise Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] max-w-5xl mx-auto">
          Powering the Future with{" "}
          <span className="gradient-text">Intelligent AI Systems</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Cosmolix builds scalable AI-driven software and SaaS platforms for enterprises and innovators.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground glow-btn transition-all hover:brightness-110"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
