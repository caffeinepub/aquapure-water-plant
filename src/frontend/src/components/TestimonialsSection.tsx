import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Family Customer",
    initials: "RK",
    review:
      "AquaPure has been our family's trusted water supplier for 3 years. The quality is unmatched and delivery is always on time. I wouldn't trust any other brand!",
    stars: 5,
    color: "oklch(0.42 0.18 252)",
  },
  {
    name: "Priya M.",
    role: "Regular Customer",
    initials: "PM",
    review:
      "Fast delivery and the water tastes incredibly clean and refreshing. Highly recommend to every household. The 20L jar lasts my family over a week!",
    stars: 5,
    color: "oklch(0.62 0.14 202)",
  },
  {
    name: "Ahmed S.",
    role: "Restaurant Owner",
    initials: "AS",
    review:
      "As a restaurant owner, I rely on AquaPure for all my water needs. Always fresh, always on time. My customers can taste the difference. Exceptional service!",
    stars: 5,
    color: "oklch(0.52 0.16 228)",
  },
];

const starKeys = ["s1", "s2", "s3", "s4", "s5"];

export function TestimonialsSection() {
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
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.97 0.012 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "oklch(var(--aqua))",
              background: "oklch(var(--aqua-light))",
            }}
          >
            Customer Love
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground">
            What People{" "}
            <span style={{ color: "oklch(var(--primary))" }}>Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-water relative hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 opacity-10"
                style={{ color: t.color }}
              />
              <div className="flex gap-1 mb-4">
                {starKeys.slice(0, t.stars).map((k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-current"
                    style={{ color: "oklch(0.75 0.18 85)" }}
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-[0.95rem]">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
