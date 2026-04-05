import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CommunitySection = () => (
  <section id="community" className="relative py-24 px-4">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ boxShadow: "0 0 40px rgba(160,100,255,0.2)" }}
        className="max-w-2xl mx-auto border border-border rounded-xl p-10 text-center bg-card/30"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <MessageCircle className="mx-auto text-primary mb-4" size={36} />
        </motion.div>
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-3">
          JOIN THE COMMUNITY
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Get support, updates and connect with other Alt-tool users on our Discord server.
        </p>
        <motion.a
          href="https://discord.com/invite/ZeMRVUcYVZ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(160,100,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary bg-primary/10 text-primary font-display text-xs tracking-[0.2em] uppercase transition-all border-glow"
        >
          <MessageCircle size={16} /> Join Discord
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default CommunitySection;
