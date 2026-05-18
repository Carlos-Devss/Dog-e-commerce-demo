"use client";

import { motion } from "framer-motion";

const FOOTER_LINKS = {
  tienda: [
    { label: "Higiene", href: "#categorias" },
    { label: "Entrenamiento", href: "#categorias" },
    { label: "Accesorios", href: "#categorias" },
    { label: "Suplementos", href: "#categorias" },
    { label: "Canal veterinario", href: "#veterinario" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Historia", href: "#nosotros" },
    { label: "Blog", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Trabaja con nosotros", href: "#" },
  ],
  soporte: [
    { label: "Envíos y entregas", href: "#" },
    { label: "Devoluciones", href: "#" },
    { label: "Preguntas frecuentes", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

const SOCIAL = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
];

const PAYMENT_METHODS = ["Visa", "MC", "AMEX", "MercadoPago", "OXXO"];

export default function Footer() {
  return (
    <footer className="relative bg-ink overflow-hidden">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/8">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-red-brand flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
                  <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Golden<span className="text-gold">Dog</span>
              </span>
            </a>

            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs mb-8">
              Fabricación y comercialización de productos para higiene y
              entrenamiento de mascotas. Orgullosamente mexicanos desde 1999.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/15 hover:border-gold/25 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links cols */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-5">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 font-light hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 border-b border-white/8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4A017"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-lg text-white mb-1">
                Suscríbete a novedades
              </p>
              <p className="text-white/35 text-sm font-light">
                Ofertas exclusivas, consejos de cuidado animal y lanzamientos.
              </p>
            </div>
          </div>

          <div className="flex w-full lg:w-auto gap-2">
            <input
              type="email"
              placeholder="tu@correo.com"
              className="flex-1 lg:w-64 bg-white/6 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-gold/40 transition-all duration-200"
            />
            <button className="bg-gold text-ink font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gold-light transition-all duration-200 whitespace-nowrap flex items-center gap-2">
              Suscribirme
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <p className="text-white/25 text-xs font-light">
              © 2025 GoldenDog. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              {["Privacidad", "Términos", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/20 text-xs font-light hover:text-white/45 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/20"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <p className="text-white/20 text-xs font-light">Pagos seguros:</p>
            </div>
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method}
                className="h-6 px-2 bg-white/6 border border-white/8 rounded-md flex items-center justify-center"
              >
                <span className="text-[10px] font-semibold text-white/35">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/15"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          <p className="text-white/15 text-xs font-light tracking-wide">
            Hecho en México · goldendog.mx
          </p>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/15"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
