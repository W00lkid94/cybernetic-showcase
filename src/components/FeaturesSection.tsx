import { Shield, Wifi, Eye, Zap, Bug, Globe, FileText, Target } from "lucide-react";

const features = [
  { icon: Target, title: "Attack Tools", desc: "RAT, Stealer, Virus Builder & more" },
  { icon: Globe, title: "Web Scanner", desc: "Advanced web vulnerability scanning" },
  { icon: Eye, title: "OSINT", desc: "Open source intelligence gathering" },
  { icon: Shield, title: "Phishing", desc: "Custom phishing page builder" },
  { icon: Zap, title: "DDoS", desc: "Powerful denial of service tools" },
  { icon: FileText, title: "Export Report", desc: "Full report generation & export" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="container">
        <p className="font-mono-cyber text-xs text-center tracking-[0.3em] uppercase text-primary mb-2">// Section 01</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-wider text-foreground mb-16">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group border border-border rounded-lg p-6 bg-card/50 hover:border-primary transition-all duration-300 hover:border-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <f.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
