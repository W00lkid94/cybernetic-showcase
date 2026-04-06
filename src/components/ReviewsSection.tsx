import { motion } from "framer-motion";
import { Star, Clock, MessageCircle, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "< 2H", label: "Response Time" },
  { icon: MessageCircle, value: "300+", label: "Discord Members" },
  { icon: ShieldCheck, value: "99%", label: "Support Rate" },
];

const reviews = [
  { text: "I got the alt-tool interface and im lowk new to all of this but the support was really helpful and gave me a tutorial on the alt-rat. nice product", author: "Anonymous" },
  { text: "Hey guys i got the Tool today and played around a bit. I needed some help and got it directly. I can say fastest support i ever got. Tool works great and does his job very good. Big +", author: "Anonymous" },
  { text: "Complete tool, responsive, and discreet. Looking forward to seeing the next features arrive.", author: "Anonymous" },
];

const CountUp = ({ value }: { value: string }) => (
  <motion.p
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="font-display text-xl md:text-2xl font-bold text-accent"
  >
    {value}
  </motion.p>
);

const ReviewsSection = () => (
  <section id="feedback" className="relative py-24 px-4">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl md:text-4xl font-bold text-center tracking-wider text-foreground mb-16"
      >
        REVIEWS & SUPPORT
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(160,100,255,0.2)" }}
            className="border border-border rounded-lg p-5 text-center bg-card/30"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <s.icon className="mx-auto text-primary mb-2" size={22} />
            </motion.div>
            <CountUp value={s.value} />
            <p className="text-xs text-muted-foreground font-mono-cyber tracking-wider mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -50 : i === 2 ? 50 : 0, y: i === 1 ? 50 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03, borderColor: "hsl(270, 80%, 60%)" }}
            className="border border-border rounded-lg p-6 bg-card/30"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + j * 0.1 }}
                >
                  <Star size={14} className="fill-accent text-accent" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <p className="text-xs text-primary font-mono-cyber italic">{r.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
