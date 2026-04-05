import { MessageCircle } from "lucide-react";

const CommunitySection = () => (
  <section id="community" className="relative py-24 px-4">
    <div className="container">
      <div className="max-w-2xl mx-auto border border-border rounded-xl p-10 text-center bg-card/30">
        <MessageCircle className="mx-auto text-primary mb-4" size={36} />
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-3">
          JOIN THE COMMUNITY
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Get support, updates and connect with other Alt-tool users on our Discord server.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary bg-primary/10 text-primary font-display text-xs tracking-[0.2em] uppercase hover:bg-primary/20 transition-all border-glow"
        >
          <MessageCircle size={16} /> Join Discord
        </a>
      </div>
    </div>
  </section>
);

export default CommunitySection;
