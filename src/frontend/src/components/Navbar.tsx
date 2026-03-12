import { Droplets, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onOrderClick }: { onOrderClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-solid" : "glass-nav"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 font-display font-black text-xl md:text-2xl"
            style={{ color: "oklch(var(--primary))" }}
          >
            <Droplets
              className="w-7 h-7"
              style={{ color: "oklch(var(--aqua))" }}
            />
            <span>Aqua</span>
            <span style={{ color: "oklch(var(--aqua))" }}>Pure</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.link.${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-primary text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onOrderClick}
              className="ml-4 px-5 py-2 rounded-full text-sm font-bold text-white water-gradient shadow-water transition-all duration-200 hover:shadow-water-lg hover:scale-105"
            >
              Order Now
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.link.${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-lg font-semibold transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOrderClick();
              }}
              className="mt-2 px-5 py-3 rounded-full font-bold text-white water-gradient text-center"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
