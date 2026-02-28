export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "CosmoWork",
    slug: "cosmowork",
    shortDescription:
      "A next-gen coworking marketplace where niche workspace owners list their spaces and professionals book on demand — powered by AI-driven matching and smart scheduling.",
    fullDescription:
      "CosmoWork redefines coworking by connecting workspace owners with professionals through an intelligent platform. Unlike generic booking systems, CosmoWork uses AI to match users with spaces based on work style, industry, and collaboration needs. Owners can monetize underutilized spaces while professionals discover hyper-relevant environments — from biotech labs to podcast studios.",
    features: [
      "AI-powered workspace matching based on work style & industry",
      "Dynamic pricing engine with demand-based rate optimization",
      "Smart scheduling with conflict resolution & recurring bookings",
      "Integrated community layer — connect with professionals in your space",
      "Workspace analytics dashboard for owners (occupancy, revenue, trends)",
      "Verified reviews with blockchain-backed authenticity",
    ],
    useCases: [
      "Freelancers finding niche creative studios on demand",
      "Startups booking short-term office space during fundraising",
      "Workshop hosts discovering venues matched to their audience",
      "Enterprise teams booking satellite offices in new cities",
    ],
  },
  {
    id: "2",
    name: "CosmoAnalytics",
    slug: "cosmoanalytics",
    shortDescription:
      "Upload your architecture diagram and receive AI-generated cost-saving alternatives, memory-efficient redesigns, and optimized technology recommendations.",
    fullDescription:
      "CosmoAnalytics goes beyond monitoring — it's an architecture intelligence platform. Upload any system diagram and our AI analyzes every component, connection, and data flow. You receive actionable alternatives: swap an over-provisioned service for a serverless equivalent, replace a costly database with an open-source alternative, or restructure data pipelines for 10x throughput. No other tool provides architecture-level optimization at this depth.",
    features: [
      "Visual architecture diagram parser with auto-component detection",
      "AI-driven cost optimization with vendor-specific pricing models",
      "Memory & compute efficiency scoring per component",
      "Technology substitution engine — suggests open-source & managed alternatives",
      "What-if scenario builder for architecture changes",
      "Compliance-aware recommendations (GDPR, HIPAA, SOC2)",
    ],
    useCases: [
      "CTOs evaluating cloud cost reduction strategies",
      "DevOps teams optimizing microservice architectures",
      "Startups choosing between build vs. buy decisions",
      "Enterprises migrating from legacy to cloud-native stacks",
    ],
  },
  {
    id: "3",
    name: "CosmoCyber",
    slug: "cosmocyber",
    shortDescription:
      "Pre-built cyber test suites for modern architectures, AI-driven threat detection for emerging attack vectors, and fully customizable security audits for any stack.",
    fullDescription:
      "CosmoCyber is not another vulnerability scanner — it's a proactive cyber resilience platform. It ships with predefined test suites for cloud-native, microservice, and edge architectures. Its AI engine continuously learns from emerging threats — including AI-powered attacks, prompt injection, and supply chain compromises. Unlike static scanners, CosmoCyber adapts tests to your specific stack and generates custom threat models unique to your application.",
    features: [
      "200+ predefined test suites for modern architecture patterns",
      "AI threat engine — detects emerging AI-driven attack vectors",
      "Custom threat modeling per client application & stack",
      "Continuous security posture monitoring with drift detection",
      "Automated compliance reporting (ISO 27001, NIST, PCI-DSS)",
      "Red team simulation with AI-generated attack scenarios",
    ],
    useCases: [
      "Security teams auditing cloud-native deployments",
      "Enterprises preparing for compliance certifications",
      "Startups building security-first from day one",
      "AI companies testing for prompt injection & model vulnerabilities",
    ],
  },
];
