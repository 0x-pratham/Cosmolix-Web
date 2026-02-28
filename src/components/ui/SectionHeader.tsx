import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionHeader = ({ badge, title, description, align = "center" }: SectionHeaderProps) => (
  <div className={`max-w-3xl mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}>
    {badge && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeader;
