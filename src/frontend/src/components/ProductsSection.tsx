import { ShoppingCart } from "lucide-react";
import { useEffect, useRef } from "react";

const products = [
  {
    id: "jar20L",
    name: "20L Water Jar",
    description:
      "Perfect for home & office dispensers. Our most popular product — economical and long-lasting freshness.",
    price: "Best Value",
    image: "/assets/generated/product-20l-jar.dim_400x500.jpg",
    badge: "Most Popular",
  },
  {
    id: "bottle1L",
    name: "1L Water Bottle",
    description:
      "Ideal for daily hydration on the go. Premium mineral-balanced water in a convenient carry size.",
    price: "Daily Carry",
    image: "/assets/generated/product-1l-bottle.dim_400x500.jpg",
    badge: null,
  },
  {
    id: "bottle500ml",
    name: "500ml Water Bottle",
    description:
      "Compact & travel-friendly. Pure hydration in a lightweight format, perfect for outdoor activities.",
    price: "Travel Size",
    image: "/assets/generated/product-500ml-bottle.dim_400x500.jpg",
    badge: null,
  },
];

export function ProductsSection({
  onOrderClick,
}: { onOrderClick: () => void }) {
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
      id="products"
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
            What We Offer
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground">
            Our <span style={{ color: "oklch(var(--primary))" }}>Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Every bottle and jar is sealed fresh with our 5-stage purification
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.id}
              data-ocid={`products.item.${i + 1}`}
              className="product-card-hover bg-white rounded-3xl overflow-hidden shadow-water relative"
            >
              {product.badge && (
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "oklch(var(--aqua))" }}
                >
                  {product.badge}
                </div>
              )}
              <div
                className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
                style={{ height: "280px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "oklch(var(--aqua))" }}
                >
                  {product.price}
                </span>
                <h3 className="font-display font-bold text-xl mt-1 mb-2 text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <button
                  type="button"
                  onClick={onOrderClick}
                  data-ocid={`products.button.${i + 1}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white water-gradient transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
