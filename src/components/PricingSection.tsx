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
        className="font-mono-cyber text-xs text-center tracking-[0.3em] uppercase text-primary mb-2"
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
        GET ALT-TOOL
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-md mx-auto"
      >
        <motion.div
          whileHover={{ boxShadow: "0 0 50px rgba(160,100,255,0.25), 0 0 100px rgba(220,180,50,0.1)" }}
          animate={{ boxShadow: ["0 0 20px rgba(160,100,255,0.1)", "0 0 40px rgba(160,100,255,0.2)", "0 0 20px rgba(160,100,255,0.1)"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative border border-border rounded-xl overflow-hidden bg-card/50"
        >
          <motion.div
            className="h-1 gradient-gold"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="p-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent bg-accent/10 text-accent font-display text-xs tracking-widest mb-6"
            >
              <ShoppingCart size={14} /> PREMIUM ACCESS
            </motion.div>

            <p className="font-mono-cyber text-xs text-muted-foreground tracking-widest mb-2">ALT-TOOL INTERFACE</p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="flex items-baseline justify-center gap-1 mb-2"
            >
              <span className="font-display text-6xl font-black text-accent text-glow-gold">45</span>
              <span className="font-display text-2xl text-accent">€</span>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-8">One-time payment — Permanent access</p>

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
                  <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.3 }}>
                    <CheckCircle size={18} className="text-primary shrink-0" />
                  </motion.div>
                  <span className="text-sm text-foreground">{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(220,180,50,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-lg gradient-gold text-accent-foreground font-display text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-opacity"
            >
              Buy Now <ShoppingCart size={16} />
            </motion.button>
          </div>

          <div className="flex justify-between px-8 py-4 border-t border-border">
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-cyber tracking-widest">
              <Lock size={12} /> SECURE CHECKOUT
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-cyber tracking-widest">
              <ShieldCheck size={12} /> SSL ENCRYPTED
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
