import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";

const glitchVariants = {
  animate: {
    textShadow: [
      "0 0 10px rgba(160,100,255,0.6), 0 0 30px rgba(160,100,255,0.3)",
      "3px 0 10px rgba(255,50,50,0.4), -3px 0 10px rgba(50,50,255,0.4)",
      "0 0 10px rgba(160,100,255,0.6), 0 0 30px rgba(160,100,255,0.3)",
      "-2px 0 10px rgba(50,255,50,0.3), 2px 0 10px rgba(255,50,255,0.3)",
      "0 0 10px rgba(160,100,255,0.6), 0 0 30px rgba(160,100,255,0.3)",
    ],
    transition: { duration: 4, repeat: Infinity, ease: "linear" as const },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 px-4">
      {/* Scan line overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-[0.03]">
        <motion.div
          className="w-full h-1 bg-primary"
          animate={{ y: ["-100%", "100vh"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        SYS. ONLINE — V2.0.26
      </motion.p>

      <motion.h1
        variants={glitchVariants}
        animate="animate"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-foreground mb-4"
      >
        ALT-TOOL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0em" }}
        animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ delay: 0.7, duration: 1 }}
        className="font-display text-sm md:text-base uppercase text-muted-foreground mb-10"
      >
        The Ultimate Multi-Tool Interface
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4 mb-16"
      >
        <motion.a
          href="https://shop.beacons.ai/alttool/fa2b62f4-cb9f-405b-8ffb-503307c45932?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Falttool&show_back_button=true"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(220,180,50,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-3 border border-accent bg-accent/10 text-accent font-display text-xs tracking-[0.2em] uppercase transition-all border-glow-gold"
        >
          <ShoppingCart size={16} /> Buy Now
        </motion.a>
        <motion.a
          href="https://discord.com/invite/ZeMRVUcYVZ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(160,100,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-3 border border-border text-foreground font-display text-xs tracking-[0.2em] uppercase transition-all"
        >
          <MessageCircle size={16} /> Discord
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 1.2, duration: 1, type: "spring" }}
        className="w-full max-w-5xl"
        style={{ perspective: 1000 }}
      >
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(160,100,255,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="border border-border rounded-lg overflow-hidden border-glow relative"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="ml-4 font-mono-cyber text-xs text-muted-foreground tracking-widest"
            >
              ALT-TOOL // INTERFACE PREVIEW
            </motion.span>
          </div>
          <img src="/images/interface-preview.png" alt="Alt-Tool Interface Preview" className="w-full" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-16"
      >
        <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">Discover</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-2 text-primary"
        >
          ▼
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
