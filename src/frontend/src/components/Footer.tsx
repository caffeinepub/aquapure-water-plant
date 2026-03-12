import { Droplets } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from "react-icons/si";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const products = [
  { label: "20L Water Jar", desc: "Bulk home & office supply" },
  { label: "1L Water Bottle", desc: "On-the-go hydration" },
  { label: "500ml Bottle", desc: "Pocket-sized purity" },
];

const socialLinks = [
  {
    Icon: SiFacebook,
    href: "https://facebook.com",
    label: "Facebook",
    hoverColor: "oklch(0.48 0.22 264)",
    hoverGlow: "oklch(0.48 0.22 264 / 0.4)",
  },
  {
    Icon: SiInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    hoverColor: "oklch(0.58 0.25 15)",
    hoverGlow: "oklch(0.58 0.25 15 / 0.4)",
  },
  {
    Icon: SiX,
    href: "https://x.com",
    label: "Twitter/X",
    hoverColor: "oklch(0.25 0 0)",
    hoverGlow: "oklch(0.6 0 0 / 0.3)",
  },
  {
    Icon: SiWhatsapp,
    href: "https://wa.me/15551234567",
    label: "WhatsApp",
    hoverColor: "oklch(0.55 0.2 155)",
    hoverGlow: "oklch(0.55 0.2 155 / 0.4)",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="navy-gradient text-white relative overflow-hidden">
      {/* Wave divider at top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: "64px" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C180,64 360,0 540,28 C720,56 900,8 1080,30 C1260,52 1350,20 1440,32 L1440,0 L0,0 Z"
            fill="oklch(0.97 0.012 220)"
          />
        </svg>
      </div>

      {/* Decorative aqua glow blob */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.14 202) 0%, transparent 70%)",
        }}
      />

      {/* Newsletter / tagline strip */}
      <div
        className="relative z-10 border-b"
        style={{ borderColor: "oklch(1 0 0 / 0.08)", paddingTop: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-1"
                style={{ color: "oklch(0.78 0.14 198)" }}
              >
                Stay Refreshed
              </p>
              <h4 className="font-display font-bold text-xl text-white">
                Pure water, delivered to your door — every day.
              </h4>
            </div>
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              data-ocid="footer.primary_button"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.7 0.17 198), oklch(0.55 0.2 218))",
                boxShadow: "0 4px 20px oklch(0.62 0.18 205 / 0.4)",
              }}
            >
              <Droplets className="w-4 h-4" />
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-display font-black text-2xl mb-4">
              <Droplets
                className="w-7 h-7"
                style={{ color: "oklch(0.78 0.14 198)" }}
              />
              <span>Aqua</span>
              <span style={{ color: "oklch(0.78 0.14 198)" }}>Pure</span>
            </div>
            <p className="text-white/55 leading-relaxed text-sm mb-6">
              Delivering pure, safe, and hygienic drinking water to homes and
              businesses since 2009. Quality you can taste, trust you can feel.
            </p>
            {/* Social icons with color glow */}
            <div className="flex items-center gap-3">
              {socialLinks.map(
                ({ Icon, href, label, hoverColor, hoverGlow }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "oklch(1 0 0 / 0.1)",
                      border: "1px solid oklch(1 0 0 / 0.15)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = hoverColor;
                      el.style.borderColor = hoverColor;
                      el.style.boxShadow = `0 0 16px ${hoverGlow}, 0 0 6px ${hoverGlow}`;
                      el.style.transform = "scale(1.15) translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "oklch(1 0 0 / 0.1)";
                      el.style.borderColor = "oklch(1 0 0 / 0.15)";
                      el.style.boxShadow = "";
                      el.style.transform = "";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display font-bold text-base mb-5"
              style={{ color: "oklch(0.78 0.14 198)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    data-ocid={`nav.${link.label.toLowerCase()}.link`}
                    className="text-white/55 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 group-hover:scale-125"
                      style={{ background: "oklch(0.62 0.14 202 / 0.5)" }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3
              className="font-display font-bold text-base mb-5"
              style={{ color: "oklch(0.78 0.14 198)" }}
            >
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <button
                    type="button"
                    onClick={() => handleNav("#products")}
                    data-ocid="footer.products.button"
                    className="text-left group"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.62 0.14 202)" }}
                      />
                      {product.label}
                    </span>
                    <span className="text-xs text-white/40 ml-3.5">
                      {product.desc}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display font-bold text-base mb-5"
              style={{ color: "oklch(0.78 0.14 198)" }}
            >
              Contact Info
            </h3>
            <div className="space-y-3 text-white/55 text-sm">
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">📞</span>
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">📧</span>
                <a
                  href="mailto:hello@aquapure.com"
                  className="hover:text-white transition-colors"
                >
                  hello@aquapure.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">📍</span>
                <span>123 Industrial Zone, Water District</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">🕐</span>
                <span>Mon–Sat: 6:00 AM – 8:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10">
        {/* Gradient line */}
        <div
          aria-hidden="true"
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.62 0.14 202 / 0.5) 30%, oklch(0.42 0.18 252 / 0.6) 50%, oklch(0.62 0.14 202 / 0.5) 70%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <p>© {year} AquaPure Water Plant. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hover:text-white/70 transition-colors"
                data-ocid="footer.secondary_button"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true" className="text-white/20">
                |
              </span>
              <button
                type="button"
                className="hover:text-white/70 transition-colors"
                data-ocid="footer.secondary_button"
              >
                Terms of Service
              </button>
              <span aria-hidden="true" className="text-white/20">
                |
              </span>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                Built with ❤️ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
