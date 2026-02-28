import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { products } from "@/data/products";

const ProductsPreview = () => (
  <section className="section-spacing">
    <div className="container mx-auto px-4 md:px-8">
      <SectionHeader
        badge="Our Products"
        title="Intelligent Products, Real Impact"
        description="Enterprise-grade platforms built with cutting-edge AI to solve complex problems."
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
            <h3 className="text-xl font-bold text-foreground mb-3">{p.name}</h3>
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
);

export default ProductsPreview;
