import { Droplets, Shield, Star, Truck } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Droplets,
    title: "Advanced Water Purification",
    desc: "Multi-stage RO + UV + mineral balance — eliminating 99.9% of contaminants.",
  },
  {
    icon: Shield,
    title: "Hygienic Bottling Process",
    desc: "ISO-certified facility with fully automated sealed packaging for zero contamination.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    desc: "Same-day delivery available across the city. Track your order in real-time.",
  },
  {
    icon: Star,
    title: "Trusted by Thousands",
    desc: "Over 10,000 satisfied families and businesses rely on AquaPure every day.",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("section-hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={ref} className="py-24 md:py-32 aqua-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "oklch(var(--primary))",
              background: "oklch(1 0 0 / 0.6)",
            }}
          >
            Our Advantages
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground">
            Why{" "}
            <span style={{ color: "oklch(var(--primary))" }}>Choose Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            We don't just sell water — we deliver trust, health, and
            convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-water transition-all duration-300 hover:-translate-y-2 hover:shadow-water-lg"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "oklch(var(--primary) / 0.1)" }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: "oklch(var(--primary))" }}
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
