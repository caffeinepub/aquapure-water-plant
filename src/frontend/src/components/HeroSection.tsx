import { ChevronDown } from "lucide-react";

export function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-water.dim_1200x700.jpg')",
        }}
      />
      {/* Dark overlay — richer and deeper at top, slightly lighter at bottom for wave readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.12 0.07 258 / 0.90) 0%, oklch(0.20 0.08 252 / 0.80) 55%, oklch(0.28 0.12 205 / 0.65) 100%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"].map((id, i) => (
          <div
            key={id}
            className="absolute rounded-full animate-float"
            style={{
              width: `${8 + i * 6}px`,
              height: `${8 + i * 6}px`,
              background: `oklch(0.70 0.16 200 / ${0.12 + i * 0.04})`,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 tracking-widest uppercase"
            style={{
              background: "oklch(0.70 0.17 198 / 0.18)",
              border: "1px solid oklch(0.70 0.17 198 / 0.45)",
              color: "oklch(0.88 0.12 198)",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: "oklch(0.70 0.17 198)",
                boxShadow: "0 0 8px oklch(0.70 0.17 198)",
              }}
            />
            ISO Certified Water Plant
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s", letterSpacing: "-0.02em" }}
        >
          Pure, Safe &amp;
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, oklch(0.88 0.12 198) 0%, oklch(0.72 0.16 210) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hygienic
          </span>{" "}
          <span style={{ color: "oklch(0.96 0.01 220)" }}>Drinking Water</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.35s", color: "oklch(0.90 0.03 220)" }}
        >
          Advanced purification technology delivering clean, mineral-rich water
          to your doorstep — reliably and hygienically, every single time.
        </p>

        {/* CTAs — Fix 1: aqua-cta primary button with real glow */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            type="button"
            onClick={onOrderClick}
            data-ocid="hero.primary_button"
            className="aqua-cta px-9 py-4 rounded-full font-bold text-lg text-white"
          >
            Order Now
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="hero.secondary_button"
            className="hero-secondary px-9 py-4 rounded-full font-bold text-lg text-white"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 transition-opacity duration-200 hover:opacity-100"
            style={{ opacity: 0.5 }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "oklch(0.80 0.05 220)" }}
            >
              Scroll Down
            </span>
            <ChevronDown
              className="w-5 h-5 animate-bounce"
              style={{ color: "oklch(0.80 0.05 220)" }}
            />
          </button>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="wave-container">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="w-full"
          style={{ height: "80px" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.98 0.008 220)"
          />
        </svg>
      </div>
    </section>
  );
}
