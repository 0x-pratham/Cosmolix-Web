import { Link } from "react-router-dom";
import logo from "@/assets/cosmolix-logo.jpg";

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
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Cosmolix" className="h-8 w-8 rounded-lg object-cover" />
            <span className="text-lg font-bold text-foreground">Cosmolix</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building scalable AI-driven software and SaaS platforms for enterprises and innovators.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cosmolix Pvt Ltd. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Powering the future with intelligent systems.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
