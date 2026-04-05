import { ShoppingCart, CheckCircle, Lock, ShieldCheck } from "lucide-react";

const features = [
  "Full access to all features",
  "Lifetime updates",
  "Customizable interface",
  "Priority support",
  "Advanced panel access",
  "Exclusive premium tools",
];

const PricingSection = () => (
  <section id="buy" className="relative py-24 px-4">
    <div className="container">
      <p className="font-mono-cyber text-xs text-center tracking-[0.3em] uppercase text-primary mb-2">// Section 03</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-wider text-foreground mb-16">
        GET ALT-TOOL
      </h2>

      <div className="max-w-md mx-auto">
        <div className="relative border border-border rounded-xl overflow-hidden bg-card/50">
          {/* Gold gradient top bar */}
          <div className="h-1 gradient-gold" />

          <div className="p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent bg-accent/10 text-accent font-display text-xs tracking-widest mb-6">
              <ShoppingCart size={14} /> PREMIUM ACCESS
            </div>

            <p className="font-mono-cyber text-xs text-muted-foreground tracking-widest mb-2">ALT-TOOL INTERFACE</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="font-display text-6xl font-black text-accent text-glow-gold">45</span>
              <span className="font-display text-2xl text-accent">€</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">One-time payment — Permanent access</p>

            <div className="text-left space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3.5 rounded-lg gradient-gold text-accent-foreground font-display text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Buy Now <ShoppingCart size={16} />
            </button>
          </div>

          <div className="flex justify-between px-8 py-4 border-t border-border">
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-cyber tracking-widest">
              <Lock size={12} /> SECURE CHECKOUT
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-cyber tracking-widest">
              <ShieldCheck size={12} /> SSL ENCRYPTED
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
