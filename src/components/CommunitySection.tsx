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
        animate={{
          boxShadow: [
            "0 0 10px rgba(160,100,255,0.1)",
            "0 0 30px rgba(160,100,255,0.25)",
            "0 0 10px rgba(160,100,255,0.1)",
          ]
        }}
        className="max-w-2xl mx-auto border-2 border-primary/30 rounded-xl p-10 text-center bg-card/30 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/60" />

        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <MessageCircle className="mx-auto text-primary mb-4" size={36} />
        </motion.div>
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-3">
          JOIN THE COMMUNITY
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto font-display">
          Get support, updates and connect with other Alt-tool users on our Discord server.
        </p>
        <motion.a
          href="https://discord.com/invite/ZeMRVUcYVZ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 5px rgba(160,100,255,0.2)",
              "0 0 25px rgba(160,100,255,0.5)",
              "0 0 5px rgba(160,100,255,0.2)",
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary bg-primary/10 text-primary font-display text-xs tracking-[0.15em] uppercase"
          style={{ borderColor: "hsl(270 80% 60%)" }}
        >
          <MessageCircle size={14} /> Join Discord
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default CommunitySection;
