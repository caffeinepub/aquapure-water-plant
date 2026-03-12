import { Filter, Package, Sparkles, Waves, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    icon: Filter,
    title: "Filtration",
    desc: "Removes sediments, rust, and large particles through multi-layer sand and carbon filters.",
  },
  {
    number: "02",
    icon: Waves,
    title: "Reverse Osmosis",
    desc: "Eliminates dissolved impurities, heavy metals, and TDS through semi-permeable membranes.",
  },
  {
    number: "03",
    icon: Zap,
    title: "UV Treatment",
    desc: "High-intensity UV light destroys 99.99% of bacteria, viruses, and other pathogens.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Mineral Balance",
    desc: "Essential minerals are added back for optimal taste, pH balance, and health benefits.",
  },
  {
    number: "05",
    icon: Package,
    title: "Packaging",
    desc: "Hygienic sealed bottling in our ISO-certified facility under strict quality control.",
  },
];

export function ProcessSection() {
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
    <section id="process" ref={ref} className="py-24 md:py-32 navy-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "oklch(0.78 0.14 198)",
              background: "oklch(0.78 0.14 198 / 0.15)",
              border: "1px solid oklch(0.78 0.14 198 / 0.3)",
            }}
          >
            How We Work
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            Our Purification{" "}
            <span style={{ color: "oklch(0.78 0.14 198)" }}>Process</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-lg"
            style={{ color: "oklch(0.68 0.04 230)" }}
          >
            Five meticulously engineered stages to deliver water of the highest
            purity.
          </p>
        </div>

        {/* ─── Fix 2: Rich glowing flow track ─── */}
        <div className="relative">
          {/*
            Desktop connector: a full-width gradient bar with glow sitting
            behind the node circles. Positioned at the vertical centre of the
            80px icon circles (top: 2.5rem = 40px).
          */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute"
            style={{
              top: "2.35rem",
              left: "calc(10% + 2.5rem)",
              right: "calc(10% + 2.5rem)",
              height: "3px",
              borderRadius: "999px",
              background:
                "linear-gradient(to right, oklch(0.62 0.14 202 / 0.3), oklch(0.70 0.17 198 / 0.9) 25%, oklch(0.62 0.14 202 / 0.9) 50%, oklch(0.70 0.17 198 / 0.9) 75%, oklch(0.62 0.14 202 / 0.3))",
              boxShadow:
                "0 0 12px 2px oklch(0.62 0.14 202 / 0.45), 0 0 24px 4px oklch(0.42 0.18 252 / 0.2)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div
                  key={step.number}
                  className="process-node flex flex-col items-center text-center"
                >
                  {/* Icon circle with layered glow ring */}
                  <div className="relative mb-6">
                    {/* Outer glow pulse ring */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      style={{
                        margin: "-6px",
                        background: "transparent",
                        border: `1.5px solid oklch(0.62 0.14 202 / ${isLast ? "0.55" : "0.35"})`,
                        boxShadow: "0 0 16px oklch(0.62 0.14 202 / 0.2)",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Main circle */}
                    <div
                      className="process-node-ring w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(145deg, oklch(0.32 0.12 248) 0%, oklch(0.22 0.08 255) 100%)",
                        border: "1.5px solid oklch(0.62 0.14 202 / 0.55)",
                      }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: "oklch(0.78 0.16 198)" }}
                      />
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.70 0.17 198) 0%, oklch(0.55 0.20 218) 100%)",
                        color: "oklch(0.10 0.03 255)",
                        boxShadow: "0 2px 8px oklch(0.62 0.14 202 / 0.55)",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Text */}
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: "oklch(0.95 0.03 220)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.62 0.04 230)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
