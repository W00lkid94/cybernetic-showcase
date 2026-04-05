import { Star, Clock, Users, MessageCircle, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "< 2H", label: "Response Time" },
  { icon: Users, value: "1.2K+", label: "Active Users" },
  { icon: MessageCircle, value: "500+", label: "Discord Members" },
  { icon: ShieldCheck, value: "99%", label: "Support Rate" },
];

const reviews = [
  { text: "I got the alt-tool interface and im lowk new to all of this but the support was really helpful and gave me a tutorial on the alt-rat. nice product", author: "Anonymous" },
  { text: "Hey guys i got the Tool today and played around a bit. I needed some help and got it directly. I can say fastest support i ever got. Tool works great and does his job very good. Big +", author: "Anonymous" },
  { text: "Complete tool, responsive, and discreet. Looking forward to seeing the next features arrive.", author: "Anonymous" },
];

const ReviewsSection = () => (
  <section id="feedback" className="relative py-24 px-4">
    <div className="container">
      <p className="font-mono-cyber text-xs text-center tracking-[0.3em] uppercase text-primary mb-2">// Section 02</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-wider text-foreground mb-16">
        REVIEWS & SUPPORT
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {stats.map((s) => (
          <div key={s.label} className="border border-border rounded-lg p-5 text-center bg-card/30">
            <s.icon className="mx-auto text-primary mb-2" size={22} />
            <p className="font-display text-xl md:text-2xl font-bold text-accent">{s.value}</p>
            <p className="text-xs text-muted-foreground font-mono-cyber tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="border border-border rounded-lg p-6 bg-card/30">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <p className="text-xs text-primary font-mono-cyber italic">{r.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
