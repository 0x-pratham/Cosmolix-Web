import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "CosmoWork", href: "/products/cosmowork" },
    { label: "CosmoAnalytics", href: "/products/cosmoanalytics" },
    { label: "CosmoCyber", href: "/products/cosmocyber" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cosmolix-pvt-ltd/", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "GitHub", href: "#", icon: Github },
    { label: "Instagram", href: "https://www.instagram.com/cosmolix.in/", icon: Instagram },
  ],
};

const Footer = () => (
  <footer className="relative overflow-hidden"
    style={{
      background:"linear-gradient(180deg,#060e24 0%,#04091a 100%)",
      borderTop:"1px solid rgba(56,189,248,0.1)",
    }}>

    {/* top glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
      style={{ background:"linear-gradient(90deg,transparent,rgba(56,189,248,0.4),transparent)" }} />

    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-5">
            <img src="https://i.ibb.co/Kp4P1Q5p/CX-logo-page-0003.png"
              alt="Cosmolix" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color:"rgba(148,163,184,0.7)" }}>
            Building scalable AI-driven software and SaaS platforms for enterprises and innovators.
          </p>

          {/* subscribe */}
          <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Stay Updated</p>
          <div className="flex items-center gap-2">
            <input type="email" placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none"
              style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(56,189,248,0.18)",
                color:"#e2e8f0" }} />
            <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white whitespace-nowrap"
              style={{ background:"linear-gradient(135deg,#1d4ed8,#0ea5e9)" }}>
              Join
            </button>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color:"rgba(56,189,248,0.7)" }}>{title}</h4>
            <ul className="space-y-3">
              {links.map((l) => {
                const Icon = (l as any).icon;
                return (
                  <li key={l.label}>
                    <Link to={l.href}
                      className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-sky-400"
                      style={{ color:"rgba(148,163,184,0.7)", fontFamily:"'Inter',sans-serif" }}>
                      {Icon && <Icon size={14} style={{ opacity:0.7 }} />}
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar */}
      <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop:"1px solid rgba(56,189,248,0.08)" }}>
        <p className="text-xs" style={{ color:"rgba(148,163,184,0.4)" }}>
          © {new Date().getFullYear()} Cosmolix Pvt Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs" style={{ color:"rgba(148,163,184,0.4)" }}>
          <Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-sky-400 transition-colors">Terms</Link>
        </div>
        <p className="text-xs" style={{ color:"rgba(148,163,184,0.4)" }}>
          Powering the future with intelligent systems.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;