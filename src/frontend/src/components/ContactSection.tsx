import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    colorVar: "--primary",
    content: (
      <a
        href="tel:+15551234567"
        className="text-muted-foreground hover:text-primary transition-colors text-sm"
      >
        +1 (555) 123-4567
      </a>
    ),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    color: "oklch(0.45 0.2 160)",
    content: (
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.button"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white transition-all duration-200 hover:scale-105"
        style={{ background: "oklch(0.55 0.2 155)" }}
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Chat on WhatsApp
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Location",
    colorVar: "--aqua",
    content: (
      <p className="text-muted-foreground text-sm">
        123 Industrial Zone, Water District
      </p>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    colorVar: "--primary",
    content: (
      <a
        href="mailto:hello@aquapure.com"
        className="text-muted-foreground hover:text-primary transition-colors text-sm"
      >
        hello@aquapure.com
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Business Hours",
    colorVar: "--secondary",
    content: (
      <div className="text-sm">
        <p className="text-foreground font-semibold">Mon – Sat</p>
        <p className="text-muted-foreground">6:00 AM – 8:00 PM</p>
      </div>
    ),
  },
];

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const { mutate, isPending, isSuccess, isError, reset } =
    useSubmitContactForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => setForm({ name: "", email: "", phone: "", message: "" }),
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.97 0.012 220)" }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.14 202) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.42 0.18 252) 0%, transparent 70%)",
        }}
      />

      {/* Wave top decoration */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,0 L0,0 Z"
            fill="oklch(0.98 0.008 220)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: "oklch(var(--aqua))",
              background: "oklch(var(--aqua-light))",
            }}
          >
            Get In Touch
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground">
            Contact <span style={{ color: "oklch(var(--primary))" }}>Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Reach out for orders, inquiries, or to become a distributor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-8">
              We're Here to Help
            </h3>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const iconColor = item.color
                  ? item.color
                  : `oklch(var(${item.colorVar}))`;
                const bgColor = item.color
                  ? `${item.color.replace(")", " / 0.1)")}`
                  : `oklch(var(${item.colorVar}) / 0.1)`;
                return (
                  <div
                    key={item.label}
                    className="contact-info-card flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default"
                    style={{
                      background: "oklch(1 0 0 / 0.7)",
                      border: "1px solid oklch(0.42 0.18 252 / 0.1)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow:
                        "0 2px 12px oklch(0.42 0.18 252 / 0.06), inset 0 1px 0 oklch(1 0 0 / 0.8)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: bgColor }}
                    >
                      <Icon className="w-5 h-5" style={{ color: iconColor }} />
                    </div>
                    <div className="pt-0.5">
                      <div className="font-bold text-foreground text-sm mb-1">
                        {item.label}
                      </div>
                      {item.content}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div
              className="mt-6 rounded-2xl overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.06 220) 0%, oklch(0.82 0.09 240) 50%, oklch(0.78 0.12 252) 100%)",
                border: "1px solid oklch(0.42 0.18 252 / 0.15)",
                boxShadow: "0 4px 24px oklch(0.42 0.18 252 / 0.12)",
                height: "160px",
              }}
            >
              {/* Grid lines for map feel */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="oklch(0.42 0.18 252)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              {/* Pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: "oklch(0.42 0.18 252)",
                    boxShadow: "0 0 0 4px oklch(0.42 0.18 252 / 0.25)",
                  }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.map_marker"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:opacity-90"
                  style={{ background: "oklch(0.42 0.18 252)" }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "oklch(1 0 0 / 0.85)",
              border: "1px solid oklch(0.42 0.18 252 / 0.12)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 8px 48px oklch(0.42 0.18 252 / 0.14), 0 2px 12px oklch(0.42 0.18 252 / 0.08), inset 0 1px 0 oklch(1 0 0 / 0.9)",
            }}
          >
            {isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2
                  className="w-16 h-16 mb-4"
                  style={{ color: "oklch(0.55 0.2 155)" }}
                />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="px-6 py-2 rounded-full font-bold text-white water-gradient"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    We reply within 24 hours.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="font-semibold text-foreground mb-1.5 block text-sm"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="font-semibold text-foreground mb-1.5 block text-sm"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-phone"
                      className="font-semibold text-foreground mb-1.5 block text-sm"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="font-semibold text-foreground mb-1.5 block text-sm"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      required
                      rows={4}
                      className="rounded-xl resize-none"
                    />
                  </div>
                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-sm p-3 rounded-lg"
                      style={{
                        color: "oklch(0.4 0.2 25)",
                        background: "oklch(0.95 0.06 25)",
                      }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      Failed to send. Please try again.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isPending}
                    data-ocid="contact.submit_button"
                    className="w-full py-3.5 rounded-xl font-bold text-white water-gradient disabled:opacity-60 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                  >
                    {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px oklch(0.42 0.18 252 / 0.12), inset 0 1px 0 oklch(1 0 0 / 0.9) !important;
          border-color: oklch(0.42 0.18 252 / 0.2) !important;
        }
      `}</style>
    </section>
  );
}
