import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "500K+", label: "Litres Delivered", icon: "\uD83D\uDCA7" },
  { value: "10K+", label: "Happy Customers", icon: "\u2665\uFE0F" },
  { value: "15+", label: "Years Experience", icon: "\u23F3" },
  { value: "100%", label: "Purity Guarantee", icon: "\u2705" },
];

const points = [
  "Multi-stage Reverse Osmosis + UV purification",
  "ISO 9001:2015 certified manufacturing plant",
  "Mineral balance for optimal taste and health",
  "Rigorous quality testing at every stage",
];

export function AboutSection() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ─── Text column ─── */}
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{
                color: "oklch(var(--aqua))",
                background: "oklch(var(--aqua-light))",
              }}
            >
              Our Story
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              About{" "}
              <span style={{ color: "oklch(var(--primary))" }}>AquaPure</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a mission to provide every household and business
              with access to genuinely pure drinking water, AquaPure Water Plant
              has been at the forefront of water purification technology for
              over 15 years.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our state-of-the-art facility combines advanced Reverse Osmosis
              (RO) and UV treatment to eliminate 99.9% of contaminants, while
              our mineral balancing process ensures water that is not just safe
              — but delicious and health-promoting.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(var(--aqua))" }}
                  />
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Fix 3: Deep navy glass stat cards ─── */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card rounded-2xl p-7 text-center flex flex-col items-center justify-center gap-1"
              >
                {/* Decorative emoji icon */}
                <span className="text-2xl mb-1" aria-hidden="true">
                  {stat.icon}
                </span>
                {/* Big gradient number */}
                <div className="stat-number font-display font-black text-5xl leading-none mb-2">
                  {stat.value}
                </div>
                <div
                  className="font-semibold text-sm tracking-wide uppercase"
                  style={{ color: "oklch(0.70 0.06 225)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
