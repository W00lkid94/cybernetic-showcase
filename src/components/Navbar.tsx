import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logoImg from "@/assets/logo-altsad.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Discover", href: "#discover" },
  { label: "Features", href: "#features" },
  { label: "Feedback", href: "#feedback" },
  { label: "Buy", href: "#buy" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, type: "spring" as const, stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="container flex items-center justify-between h-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <motion.img
            src={logoImg}
            alt="AltSad Logo"
            className="h-16 w-16 object-contain drop-shadow-[0_0_15px_rgba(160,100,255,0.6)]"
            animate={{ 
              rotate: [0, 5, -5, 0],
              filter: [
                "drop-shadow(0 0 10px rgba(160,100,255,0.4))",
                "drop-shadow(0 0 25px rgba(255,50,200,0.6))",
                "drop-shadow(0 0 10px rgba(160,100,255,0.4))",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="font-display text-lg tracking-widest text-primary font-bold"
            animate={{
              textShadow: [
                "0 0 5px rgba(160,100,255,0.3)",
                "0 0 20px rgba(160,100,255,0.8), 0 0 40px rgba(255,50,200,0.4)",
                "0 0 5px rgba(160,100,255,0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AltSad
          </motion.span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ color: "hsl(270, 80%, 60%)", y: -2, textShadow: "0 0 15px rgba(160,100,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
