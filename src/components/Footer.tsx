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
          className="h-8 w-8 object-contain"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <span className="font-pixel text-[8px] tracking-widest text-primary font-bold">AltSad</span>
        <span className="font-pixel text-[7px] tracking-widest text-muted-foreground">© 2026</span>
      </div>
      <div className="flex gap-6">
        {["Terms", "Privacy", "Contact"].map((l) => (
          <motion.a
            key={l}
            href="#"
            whileHover={{ color: "hsl(270, 80%, 60%)", y: -2 }}
            className="font-pixel text-[7px] text-muted-foreground transition-colors tracking-wider"
          >
            {l}
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
