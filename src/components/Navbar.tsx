import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = ["Home", "Discover", "Features", "Feedback", "Buy"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="container flex items-center justify-between h-16">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-display text-sm text-primary-foreground font-bold">A</div>
          <span className="font-display text-sm tracking-widest text-foreground">Alt-tool</span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ color: "hsl(270, 80%, 60%)", y: -2 }}
              className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors"
            >
              {l}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
