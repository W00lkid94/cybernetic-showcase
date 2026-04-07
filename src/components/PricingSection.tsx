import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle, Lock, ShieldCheck } from "lucide-react";

const features = [
  "Full access to all features",
  "Lifetime updates",
  "Customizable interface",
  "Priority support",
  "Advanced panel access",
  "Exclusive premium tools",
];

const PricingSection = () => (
  <section id="buy" className="relative py-24 px-4">
    <div className="container">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-display text-xs text-center tracking-[0.3em] uppercase text-primary mb-4"
      >
        // Section 03
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl md:text-4xl font-bold text-center tracking-wider text-foreground mb-16"
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 5px rgba(220,180,50,0.3)",
              "0 0 25px rgba(220,180,50,0.7), 2px 2px 0 rgba(160,100,255,0.3)",
              "0 0 5px rgba(220,180,50,0.3)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          GET ALT-TOOL
        </motion.span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-md mx-auto"
      >
        <motion.div
          whileHover={{ boxShadow: "0 0 60px rgba(160,100,255,0.3), 0 0 120px rgba(220,180,50,0.15)" }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(160,100,255,0.1), 4px 4px 0 rgba(160,100,255,0.15)",
              "0 0 40px rgba(160,100,255,0.25), 4px 4px 0 rgba(160,100,255,0.25)",
              "0 0 15px rgba(160,100,255,0.1), 4px 4px 0 rgba(160,100,255,0.15)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative border-2 border-primary/50 rounded-xl overflow-hidden bg-card/50"
        >
          <div className="h-1 animate-border-travel" />

          <div className="p-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" as const, stiffness: 300 }}
              animate={{ scale: [1, 1.05, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent bg-accent/10 text-accent font-display text-xs tracking-widest mb-6"
            >
              <ShoppingCart size={12} /> PREMIUM ACCESS
            </motion.div>

            <p className="font-display text-xs text-muted-foreground tracking-widest mb-3">ALT-TOOL INTERFACE</p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" as const, stiffness: 200 }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(220,180,50,0.3)",
                  "0 0 30px rgba(220,180,50,0.7)",
                  "0 0 10px rgba(220,180,50,0.3)",
                ]
              }}
              className="flex items-baseline justify-center gap-1 mb-2"
            >
              <span className="font-display text-6xl font-black text-accent">45</span>
              <span className="font-display text-2xl text-accent">€</span>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-8 font-display">One-time payment — Permanent access</p>

            <div className="text-left space-y-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <CheckCircle size={18} className="text-primary shrink-0" />
                  </motion.div>
                  <span className="text-sm text-foreground font-display">{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://shop.beacons.ai/alttool/fa2b62f4-cb9f-405b-8ffb-503307c45932?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Falttool&show_back_button=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(220,180,50,0.2)",
                  "0 0 30px rgba(220,180,50,0.5)",
                  "0 0 10px rgba(220,180,50,0.2)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full py-3.5 rounded-lg gradient-gold text-accent-foreground font-display text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2"
            >
              Buy Now <ShoppingCart size={14} />
            </motion.a>
          </div>

          <div className="flex justify-between px-8 py-4 border-t border-border">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1 text-xs text-muted-foreground font-display tracking-widest"
            >
              <Lock size={10} /> SECURE
            </motion.span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="flex items-center gap-1 text-xs text-muted-foreground font-display tracking-widest"
            >
              <ShieldCheck size={10} /> SSL
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
