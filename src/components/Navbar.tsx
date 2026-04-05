import { ShoppingCart, MessageCircle } from "lucide-react";

const Navbar = () => {
  const links = ["Home", "Discover", "Features", "Feedback", "Buy"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-display text-sm text-primary-foreground font-bold">
            A
          </div>
          <span className="font-display text-sm tracking-widest text-foreground">Alt-tool</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
