import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-border py-8 px-4"
  >
    <div className="container flex items-center justify-center gap-2">
      <span className="font-display text-xs tracking-widest text-primary font-bold">AltSad</span>
      <span className="font-display text-xs tracking-widest text-muted-foreground">© 2026</span>
    </div>
  </motion.footer>
);

export default Footer;
