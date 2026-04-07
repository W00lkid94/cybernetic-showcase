import { motion } from "framer-motion";
import logoImg from "@/assets/logo-altsad.png";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-border py-8 px-4"
  >
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <motion.img
          src={logoImg}
          alt="AltSad"
          className="h-10 w-10 object-contain"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <span className="font-display text-sm tracking-widest text-primary font-bold">AltSad</span>
        <span className="font-display text-xs tracking-widest text-muted-foreground">© 2026</span>
      </div>
      <div className="flex gap-6">
        {["Terms", "Privacy", "Contact"].map((l) => (
          <motion.a
            key={l}
            href="#"
            whileHover={{ color: "hsl(270, 80%, 60%)", y: -2 }}
            className="font-display text-xs text-muted-foreground transition-colors tracking-wider"
          >
            {l}
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
