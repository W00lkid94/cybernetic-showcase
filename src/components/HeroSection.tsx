import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useRef, useEffect, useState } from "react";

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

const typewriterText = "The Ultimate Multi-Tool Interface";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-12, 12]), { stiffness: 150, damping: 20 });

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= typewriterText.length) {
        setTyped(typewriterText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 px-4 pixel-grid">
      {/* Scanline auto-animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-[0.04]">
        <motion.div
          className="w-full h-1 bg-primary"
          animate={{ y: ["-100%", "100vh"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating pixel particles - auto animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`pixel-${i}`}
          className="absolute w-1.5 h-1.5 bg-primary/40"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-pixel text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-flicker"
      >
        &gt; SYS.ONLINE — V2.0.26_
      </motion.p>

      <motion.h1
        variants={glitchVariants}
        animate="animate"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.15em] text-foreground mb-4"
      >
        ALT-TOOL
      </motion.h1>

      <div className="h-8 mb-10">
        <span className="font-pixel text-[8px] md:text-[10px] uppercase text-primary tracking-[0.2em]">
          {typed}
          <span className={showCursor ? "opacity-100" : "opacity-0"}>█</span>
        </span>
      </div>

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
          animate={{
            boxShadow: [
              "0 0 5px rgba(220,180,50,0.2)",
              "0 0 20px rgba(220,180,50,0.5)",
              "0 0 5px rgba(220,180,50,0.2)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 px-8 py-3 border-2 border-accent bg-accent/10 text-accent font-pixel text-[8px] tracking-[0.15em] uppercase pixel-border"
          style={{ borderColor: "hsl(45 100% 55%)" }}
        >
          <ShoppingCart size={14} /> Buy Now
        </motion.a>
        <motion.a
          href="https://discord.com/invite/ZeMRVUcYVZ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(160,100,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            borderColor: [
              "hsl(270 40% 25%)",
              "hsl(270 80% 60%)",
              "hsl(270 40% 25%)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center gap-2 px-8 py-3 border-2 border-border text-foreground font-pixel text-[8px] tracking-[0.15em] uppercase"
        >
          <MessageCircle size={14} /> Discord
        </motion.a>
      </motion.div>

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 1.2, duration: 1, type: "spring" }}
        className="w-full max-w-5xl"
        style={{ perspective: 1200 }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(160,100,255,0.15)",
              "0 0 50px rgba(160,100,255,0.3), 0 20px 60px rgba(160,100,255,0.15)",
              "0 0 20px rgba(160,100,255,0.15)",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="border-2 border-primary/50 rounded-lg overflow-hidden relative"
        >
          {/* Animated border top */}
          <div className="h-1 animate-border-travel" />
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-green-500/80" />
            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-3 h-3 rounded-full bg-accent/60" />
            <motion.div animate={{ opacity: [0.7, 0.3, 0.7] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-3 h-3 rounded-full bg-destructive/60" />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="ml-4 font-pixel text-[7px] text-muted-foreground tracking-widest"
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
        <p className="font-pixel text-[8px] tracking-[0.3em] uppercase text-muted-foreground">Discover</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-2 text-primary font-pixel text-xs"
        >
          ▼
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
