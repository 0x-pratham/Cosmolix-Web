import { motion } from "framer-motion";

const stats = [
  { value: "R & D", label: "AI Projects - Tuning" },
  { value: "Enterprise", label: "Grade Security - Data First" },
  { value: "Cloud", label: "Native Architecture - Optimizations" },
];

const Stats = () => (
  <section className="section-spacing border-y border-border/50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              {s.value}
            </div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
