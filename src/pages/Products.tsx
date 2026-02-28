import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { products } from "@/data/products";

const Products = () => (
  <div className="pt-24">
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          badge="Products"
          title="Intelligent Products for Modern Enterprises"
          description="Each product is built with a unique value proposition — going beyond what existing solutions offer."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {p.shortDescription}
              </p>
              <Link
                to={`/products/${p.slug}`}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View Details <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
