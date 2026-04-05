import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-border py-8 px-4"
  >
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center font-display text-xs text-primary-foreground font-bold">A</div>
        <span className="font-display text-xs tracking-widest text-muted-foreground">ALT-TOOL © 2026</span>
      </div>
      <div className="flex gap-6">
        {["Terms", "Privacy", "Contact"].map((l) => (
          <motion.a
            key={l}
            href="#"
            whileHover={{ color: "hsl(270, 80%, 60%)", y: -2 }}
            className="font-mono-cyber text-xs text-muted-foreground transition-colors tracking-wider"
          >
            {l}
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
