import { ShoppingCart, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 px-4">
      <p className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        SYS. ONLINE — V2.0.26
      </p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-foreground text-glow mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
        ALT-TOOL
      </h1>
      <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        The Ultimate Multi-Tool Interface
      </p>
      <div className="flex gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
        <a href="#buy" className="flex items-center gap-2 px-8 py-3 border border-accent bg-accent/10 text-accent font-display text-xs tracking-[0.2em] uppercase hover:bg-accent/20 transition-all border-glow-gold">
          <ShoppingCart size={16} /> Buy Now
        </a>
        <a href="#community" className="flex items-center gap-2 px-8 py-3 border border-border text-foreground font-display text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all">
          <MessageCircle size={16} /> Discord
        </a>
      </div>

      <div className="w-full max-w-5xl animate-fade-in-up" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
        <div className="border border-border rounded-lg overflow-hidden border-glow relative">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="ml-4 font-mono-cyber text-xs text-muted-foreground tracking-widest">ALT-TOOL // INTERFACE PREVIEW</span>
          </div>
          <img
            src="/images/interface-preview.png"
            alt="Alt-Tool Interface Preview"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "1.1s", animationFillMode: "both" }}>
        <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">Discover</p>
        <div className="mt-2 text-primary animate-bounce">▼</div>
      </div>
    </section>
  );
};

export default HeroSection;
