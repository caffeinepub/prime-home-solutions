import {
  CheckCircle2,
  ChevronRight,
  Hammer,
  Instagram,
  Layers,
  LayoutGrid,
  Menu,
  Paintbrush,
  PanelTop,
  Phone,
  Ruler,
  Shield,
  ShowerHead,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SERVICES = [
  {
    num: "01",
    icon: Hammer,
    title: "Carpentry & Finish Work",
    sub: "Molding • Door Installation",
    desc: "Expert craftsmanship for all your carpentry needs, from custom molding to door installation.",
  },
  {
    num: "02",
    icon: Paintbrush,
    title: "Interior & Exterior Painting",
    sub: "Residential & Commercial",
    desc: "Professional painting services that transform spaces with clean lines, lasting finishes, and premium-grade materials.",
  },
  {
    num: "03",
    icon: LayoutGrid,
    title: "Custom Closets & Shelving",
    sub: "Built-to-Fit Storage",
    desc: "Maximize every inch with custom-built closets and shelving solutions designed around your lifestyle.",
  },
  {
    num: "04",
    icon: PanelTop,
    title: "Cabinet Painting & Refinishing",
    sub: "Kitchen Cabinets • Vanities • Built-ins",
    desc: "Give your cabinets a fresh look without the cost of replacement. Smooth finishes, lasting color.",
  },
  {
    num: "05",
    icon: ShowerHead,
    title: "Kitchen & Bathroom Remodeling",
    sub: "Renovations • Upgrades • Custom Finishes",
    desc: "Full kitchen and bathroom transformations — from layout redesign to custom tile, cabinetry, and premium fixtures. Built to last, finished to impress.",
  },
  {
    num: "06",
    icon: Layers,
    title: "Drywall Repair & Finishing",
    sub: "Patch · Texture · Smooth",
    desc: "From minor patches to full wall finishing, we leave every surface flawless and ready to paint.",
  },
  {
    num: "07",
    icon: Ruler,
    title: "Baseboards & Trim Installation",
    sub: "Crown Molding · Chair Rail",
    desc: "Precision trim work that adds character and polish to any room — installed clean and level every time.",
  },
  {
    num: "08",
    icon: Layers,
    title: "Flooring Installation",
    sub: "Tile • Laminate • Wood Flooring",
    desc: "Quality flooring installation for every style and budget — from elegant hardwood to durable tile and laminate.",
  },
];

const LOGO =
  "/assets/specialized_in_2-019d4561-8663-70ad-aa18-ed4c1c919278.png";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* ── NAVBAR — WHITE ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-sm"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid oklch(0 0 0 / 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0">
              <img
                src={LOGO}
                alt="Prime Home Solutions"
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {(["Home", "Services", "Contact"] as const).map((label, i) => {
                const hrefs = ["#home", "#services", "#contact"];
                return (
                  <a
                    key={label}
                    href={hrefs[i]}
                    data-ocid={`nav.${label.toLowerCase()}.link`}
                    className="relative text-sm font-medium tracking-widest uppercase transition-colors duration-200 group"
                    style={{ color: "oklch(0.3 0.04 242)" }}
                  >
                    {label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: "oklch(0.48 0.14 242)" }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Phone CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:5619550411"
                data-ocid="nav.phone.button"
                className="hidden md:inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110"
                style={{ background: "oklch(0.48 0.14 242)" }}
              >
                <Phone size={13} />
                561 955 0411
              </a>
              <button
                type="button"
                className="md:hidden p-2 transition-colors"
                style={{ color: "oklch(0.3 0.04 242)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                data-ocid="nav.menu.toggle"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "#ffffff",
                borderTop: "1px solid oklch(0 0 0 / 0.07)",
              }}
            >
              <div className="px-5 py-6 flex flex-col gap-5">
                {(["Home", "Services", "Contact"] as const).map((label, i) => {
                  const hrefs = ["#home", "#services", "#contact"];
                  return (
                    <a
                      key={label}
                      href={hrefs[i]}
                      data-ocid={`nav.mobile.${label.toLowerCase()}.link`}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium tracking-widest uppercase transition-colors"
                      style={{ color: "oklch(0.3 0.04 242)" }}
                    >
                      {label}
                    </a>
                  );
                })}
                <a
                  href="tel:5619550411"
                  data-ocid="nav.mobile.phone.button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-5 py-3.5 rounded-lg"
                  style={{ background: "oklch(0.48 0.14 242)" }}
                >
                  <Phone size={14} />
                  561 955 0411
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO — WHITE ── */}
      <section id="home" className="pt-20" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-24 lg:py-32">
            {/* Logo — large focal point */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 flex items-center justify-center"
            >
              <img
                src={LOGO}
                alt="Prime Home Solutions"
                className="w-full object-contain"
                style={{ maxWidth: "520px" }}
              />
            </motion.div>

            {/* Divider on desktop */}
            <div
              className="hidden lg:block flex-shrink-0 w-px self-stretch"
              style={{ background: "oklch(0 0 0 / 0.1)" }}
            />
            <div
              className="lg:hidden w-24 h-px"
              style={{ background: "oklch(0 0 0 / 0.1)" }}
            />

            {/* Right — text + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="flex-1 flex flex-col justify-center"
            >
              <h1
                className="font-bold leading-tight mb-4"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  color: "oklch(0.12 0.04 242)",
                }}
              >
                Quality You Can{" "}
                <span
                  style={{
                    color: "oklch(0.48 0.14 242)",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Trust.
                </span>
                <br />
                Results You Can{" "}
                <span
                  style={{
                    color: "oklch(0.48 0.14 242)",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  See.
                </span>
              </h1>

              <p
                className="text-base sm:text-lg leading-relaxed mb-10 max-w-md"
                style={{ color: "oklch(0.4 0.03 242)" }}
              >
                From precision carpentry to flawless paint finishes —
                craftsmanship, care, and integrity on every project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  data-ocid="hero.services.button"
                  onClick={() => scrollTo("#services")}
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold tracking-wide px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg text-sm"
                  style={{ background: "oklch(0.48 0.14 242)" }}
                >
                  Explore Services
                  <ChevronRight size={16} />
                </button>
                <a
                  href="tel:5619550411"
                  data-ocid="hero.phone.button"
                  className="inline-flex items-center justify-center gap-2 font-semibold tracking-wide px-8 py-4 rounded-lg hover:brightness-95 transition-all duration-200 text-sm"
                  style={{
                    background: "oklch(0 0 0 / 0.05)",
                    color: "oklch(0.2 0.04 242)",
                    border: "1px solid oklch(0 0 0 / 0.12)",
                  }}
                >
                  <Phone size={15} />
                  561 955 0411
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave transition to dark */}
        <div style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 80"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%" }}
          >
            <path
              d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
              fill="oklch(11% 4% 242)"
            />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="py-28 lg:py-36"
        style={{ background: "oklch(0.11 0.04 242)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="h-px w-10 flex-shrink-0"
                style={{ background: "oklch(0.72 0.12 75)" }}
              />
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                What We Do
              </p>
            </div>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Our Services
            </h2>
            <p className="text-white/45 text-base sm:text-lg mt-4 max-w-lg">
              From finishing touches to full renovations — every job, every
              time, with care and precision.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
            data-ocid="services.list"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  data-ocid={`services.item.${i + 1}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="rounded-xl p-7 flex flex-col gap-5 group cursor-default transition-colors duration-200"
                  style={{
                    background: "oklch(0.13 0.04 242 / 0.8)",
                    border: "1px solid oklch(1 0 0 / 0.06)",
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(1 0 0 / 0.12)";
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.15 0.045 242 / 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(1 0 0 / 0.06)";
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.13 0.04 242 / 0.8)";
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{ background: "oklch(0.48 0.14 242 / 0.15)" }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        style={{ color: "oklch(0.68 0.14 242)" }}
                      />
                    </div>
                    <span
                      className="font-bold text-3xl leading-none"
                      style={{ color: "oklch(0.72 0.12 75 / 0.35)" }}
                    >
                      {service.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white text-base leading-snug mb-1">
                      {service.title}
                    </h3>
                    <p
                      className="text-xs font-medium tracking-wide mb-3"
                      style={{ color: "oklch(0.72 0.12 75 / 0.8)" }}
                    >
                      {service.sub}
                    </p>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-28 lg:py-36 relative overflow-hidden"
        style={{ background: "oklch(0.09 0.04 242)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, oklch(1 0 0 / 0.012) 40px, oklch(1 0 0 / 0.012) 41px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.48 0.14 242 / 0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px w-10 flex-shrink-0"
                  style={{ background: "oklch(0.72 0.12 75)" }}
                />
                <p
                  className="text-xs font-bold tracking-[0.3em] uppercase"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  Get In Touch
                </p>
              </div>

              <h2
                className="font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Ready to start your{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "oklch(0.72 0.12 75)",
                  }}
                >
                  project?
                </span>
              </h2>

              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8">
                Call or text us for a no-obligation estimate. We&apos;re ready
                to bring your vision to life.
              </p>

              <div className="flex items-center gap-3">
                <Shield size={13} style={{ color: "oklch(0.72 0.12 75)" }} />
                <span className="text-white/35 text-sm tracking-wide">
                  Licensed &amp; Insured
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <a
                href="tel:5619550411"
                data-ocid="contact.phone.button"
                className="group block"
              >
                <div
                  className="rounded-2xl p-8 transition-all duration-300"
                  style={{
                    background: "oklch(0.13 0.04 242 / 0.6)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-3">
                    Call or Text
                  </p>
                  <div
                    className="font-bold leading-none group-hover:opacity-75 transition-opacity"
                    style={{
                      color: "oklch(0.72 0.12 75)",
                      fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    }}
                  >
                    561 955 0411
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:5619550411"
                  data-ocid="contact.call.primary_button"
                  className="inline-flex items-center justify-center gap-2.5 text-white font-semibold tracking-wide px-8 rounded-xl hover:brightness-110 transition-all duration-200 shadow-xl text-sm"
                  style={{
                    background: "oklch(0.48 0.14 242)",
                    paddingTop: "1.1rem",
                    paddingBottom: "1.1rem",
                  }}
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="sms:5619550411"
                  data-ocid="contact.sms.secondary_button"
                  className="inline-flex items-center justify-center gap-2.5 text-white/65 font-semibold tracking-wide px-8 py-4 rounded-xl hover:text-white transition-all duration-200 text-sm"
                  style={{
                    background: "oklch(0.13 0.04 242 / 0.6)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                >
                  Send a Text Message
                </a>
                <a
                  href="https://www.instagram.com/primehomesolutions.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.instagram.button"
                  className="inline-flex items-center justify-center gap-2.5 text-white/65 font-semibold tracking-wide px-8 py-4 rounded-xl hover:text-white transition-all duration-200 text-sm"
                  style={{
                    background: "oklch(0.13 0.04 242 / 0.6)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                >
                  <Instagram size={16} />
                  @primehomesolutions.us
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={13}
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                  <span className="text-white/40 text-xs font-medium tracking-wide">
                    Licensed &amp; Insured
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-7"
        style={{
          background: "oklch(0.07 0.03 242)",
          borderTop: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <img
              src={LOGO}
              alt="Prime Home Solutions"
              className="h-8 w-auto object-contain opacity-60"
              style={{ filter: "brightness(0) invert(1)" }}
            />

            <p className="text-white/25 text-xs tracking-wide text-center">
              &copy; {new Date().getFullYear()} Prime Home Solutions. All rights
              reserved.
            </p>

            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Built with caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
