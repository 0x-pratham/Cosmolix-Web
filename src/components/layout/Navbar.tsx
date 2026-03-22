"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/internship", label: "Internship" },
  { href: "/application-status", label: "Application Status" },
  { href: "/products", label: "Products" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowNavbar(y <= lastScrollY || y <= 80);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        height: scrolled ? "64px" : "80px",
        background: scrolled
          ? "rgba(6,14,36,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6 md:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-[1.03]">
          <img
            src="https://i.ibb.co/Kp4P1Q5p/CX-logo-page-0003.png"
            alt="Cosmolix"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.href || location.pathname.startsWith(l.href + "/");
            return (
              <Link key={l.href} to={l.href} className="relative group text-sm font-medium"
                style={{ fontFamily:"'Inter',sans-serif" }}>
                <span style={{ color: isActive ? "#38bdf8" : "rgba(148,163,184,0.85)",
                  transition:"color 0.2s" }}
                  className="group-hover:text-sky-400 transition-colors duration-200">
                  {l.label}
                </span>
                <span className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  style={{ background:"linear-gradient(90deg,#38bdf8,#2563eb)" }} />
              </Link>
            );
          })}

          <Link to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background:"linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 100%)",
              boxShadow:"0 0 20px rgba(37,99,235,0.35)",
            }}>
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button aria-label="Toggle Menu" aria-expanded={mobileOpen}
          className="md:hidden transition-colors duration-200"
          style={{ color:"#94a3b8" }}
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 z-40" style={{ background:"rgba(0,0,0,0.6)", backdropFilter:"blur(6px)" }}
              onClick={() => setMobileOpen(false)} />

            <motion.div initial={{ opacity:0,y:-12 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-12 }}
              className="md:hidden relative z-50"
              style={{ background:"rgba(8,21,53,0.98)", borderBottom:"1px solid rgba(56,189,248,0.12)", backdropFilter:"blur(20px)" }}>
              <motion.div initial="hidden" animate="visible"
                variants={{ visible:{ transition:{ staggerChildren:0.07 } } }}
                className="flex flex-col gap-5 px-6 py-8 text-center">
                {navLinks.map((l) => {
                  const isActive = location.pathname === l.href;
                  return (
                    <motion.div key={l.href} variants={{ hidden:{ opacity:0,y:8 }, visible:{ opacity:1,y:0 } }}>
                      <Link to={l.href} className="text-base font-medium"
                        style={{ color: isActive ? "#38bdf8" : "rgba(148,163,184,0.85)",
                          fontFamily:"'Inter',sans-serif" }}>
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div variants={{ hidden:{ opacity:0,y:8 }, visible:{ opacity:1,y:0 } }}>
                  <Link to="/contact"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white"
                    style={{ background:"linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 100%)" }}>
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;