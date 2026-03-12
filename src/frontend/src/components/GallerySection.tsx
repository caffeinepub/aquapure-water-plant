import { useEffect, useRef } from "react";

const images = [
  {
    src: "/assets/generated/gallery-plant.dim_600x400.jpg",
    alt: "Our Water Plant",
    label: "The Plant",
  },
  {
    src: "/assets/generated/gallery-lab.dim_600x400.jpg",
    alt: "Quality Lab",
    label: "Quality Lab",
  },
  {
    src: "/assets/generated/gallery-bottles.dim_600x400.jpg",
    alt: "Our Products",
    label: "Our Products",
  },
  {
    src: "/assets/generated/gallery-delivery.dim_600x400.jpg",
    alt: "Delivery Fleet",
    label: "Delivery Fleet",
  },
];

export function GallerySection() {
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
    <section id="gallery" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "oklch(var(--aqua))",
              background: "oklch(var(--aqua-light))",
            }}
          >
            Inside AquaPure
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground">
            Our <span style={{ color: "oklch(var(--primary))" }}>Facility</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            A glimpse into our world-class water plant and delivery operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className="gallery-img-hover relative rounded-2xl overflow-hidden shadow-water group"
              style={{ aspectRatio: "3/2" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.15 0.06 255 / 0.7) 0%, transparent 60%)",
                }}
              >
                <span className="text-white font-bold text-sm">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
