import { motion } from "framer-motion";
import { Shield, Eye, Zap, Globe, FileText, Target, MessageCircle } from "lucide-react";

const features = [
  { icon: Target, title: "Attack Tools", desc: "RAT, Stealer, Virus Builder & more" },
  { icon: Globe, title: "Web Scanner", desc: "Advanced web vulnerability scanning" },
  { icon: Eye, title: "OSINT", desc: "Username tracker, Email tracker & Database lookup" },
  { icon: Shield, title: "Phishing", desc: "Fausse page de phishing personnalisable" },
  { icon: Zap, title: "DDoS", desc: "Powerful denial of service tools" },
  { icon: FileText, title: "CMD", desc: "RAT & Raiders intégrés" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" as const, stiffness: 100 },
  }),
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4 pixel-grid">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-[8px] text-center tracking-[0.3em] uppercase text-primary mb-4"
        >
          // Section 01
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 5px rgba(160,100,255,0.3)",
                "0 0 20px rgba(160,100,255,0.6), 2px 2px 0 rgba(255,50,50,0.3)",
                "0 0 5px rgba(160,100,255,0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            FEATURES
          </motion.span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.05,
                borderColor: "hsl(270, 80%, 60%)",
                boxShadow: "0 0 30px rgba(160,100,255,0.3), inset 0 0 15px rgba(160,100,255,0.1)",
              }}
              className="border-2 border-border rounded-lg p-6 bg-card/50 transition-colors cursor-pointer relative overflow-hidden"
            >
              {/* Auto-pulsing corner pixel */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-primary"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              >
                <f.icon className="text-primary mb-4" size={28} />
              </motion.div>
              <h3 className="font-pixel text-[9px] tracking-widest uppercase text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://discord.com/invite/ZeMRVUcYVZ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(160,100,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 5px rgba(160,100,255,0.2)",
                "0 0 20px rgba(160,100,255,0.5)",
                "0 0 5px rgba(160,100,255,0.2)",
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary bg-primary/10 text-primary font-pixel text-[8px] tracking-[0.15em] uppercase pixel-border"
            style={{ borderColor: "hsl(270 80% 60%)" }}
          >
            <MessageCircle size={14} /> Join Discord
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
