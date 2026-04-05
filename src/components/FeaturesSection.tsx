import { motion } from "framer-motion";
import { Shield, Wifi, Eye, Zap, Bug, Globe, FileText, Target } from "lucide-react";

const features = [
  { icon: Target, title: "Attack Tools", desc: "RAT, Stealer, Virus Builder & more" },
  { icon: Globe, title: "Web Scanner", desc: "Advanced web vulnerability scanning" },
  { icon: Eye, title: "OSINT", desc: "Open source intelligence gathering" },
  { icon: Shield, title: "Phishing", desc: "Custom phishing page builder" },
  { icon: Zap, title: "DDoS", desc: "Powerful denial of service tools" },
  { icon: FileText, title: "Export Report", desc: "Full report generation & export" },
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
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono-cyber text-xs text-center tracking-[0.3em] uppercase text-primary mb-2"
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
      </div>
    </section>
  );
};

export default FeaturesSection;
