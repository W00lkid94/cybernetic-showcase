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
    <section id="features" className="relative py-24 px-4">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        >
          FEATURES
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
              className="border border-border rounded-lg p-6 bg-card/50 transition-colors cursor-pointer"
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }} transition={{ duration: 0.5 }}>
                <f.icon className="text-primary mb-4" size={28} />
              </motion.div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">{f.title}</h3>
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
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary bg-primary/10 text-primary font-display text-xs tracking-[0.2em] uppercase transition-all border-glow"
          >
            <MessageCircle size={16} /> Join Discord
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
