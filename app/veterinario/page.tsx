"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ─── ICONS ───────────────────────────────────────────────────────────────────

const IconCheck = () => (
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
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconChevron = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Precios mayoristas",
    desc: "Descuentos de hasta 35% sobre precio de lista. Escala por volumen de compra mensual.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Productos de prescripción",
    desc: "Acceso a líneas de manejo clínico no disponibles al público general.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Soporte técnico dedicado",
    desc: "Línea directa con nuestro equipo técnico para asesoría en casos clínicos.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Facturación fiscal",
    desc: "Facturas CFDI automáticas en cada pedido. Compatible con cualquier régimen fiscal.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Envío prioritario",
    desc: "Despacho en 24h y entrega en 48h a todo México sin monto mínimo de compra.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Crédito disponible",
    desc: "Línea de crédito a 30 días para clínicas con historial de compra activo.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Solicita tu acceso",
    desc: "Llena el formulario con tus datos profesionales y cédula veterinaria activa.",
  },
  {
    num: "02",
    title: "Verificamos tu perfil",
    desc: "Nuestro equipo verifica tu información en 24–48h hábiles y activa tu cuenta.",
  },
  {
    num: "03",
    title: "Accede al catálogo exclusivo",
    desc: "Entra a tu portal con precios mayoristas, productos de prescripción y más.",
  },
];

const TESTIMONIALS = [
  {
    name: "Dra. Mariana López",
    role: "Médico Veterinario · CDMX",
    clinic: "Clínica Veterinaria Pedregal",
    avatar: "ML",
    color: "bg-gold/15 text-gold-dark",
    text: "El canal veterinario de GoldenDog cambió la forma en que manejo mis pedidos. Los precios y el soporte técnico son incomparables.",
    since: "Cliente desde 2021",
  },
  {
    name: "Dr. Roberto Sánchez",
    role: "Especialista en Dermatología · GDL",
    clinic: "Hospital Veterinario Las Flores",
    avatar: "RS",
    color: "bg-red-brand/10 text-red-brand",
    text: "Los productos de prescripción para dermatología son exactamente lo que necesitaba. La línea de crédito me ayuda a mantener inventario sin problemas de flujo.",
    since: "Cliente desde 2020",
  },
  {
    name: "Dra. Sofía Reyes",
    role: "Entrenadora y Veterinaria · MTY",
    clinic: "Centro Canino Reyes",
    avatar: "SR",
    color: "bg-emerald-100 text-emerald-700",
    text: "La verificación fue rápida y desde el primer pedido sentí la diferencia. Envío puntual, factura automática y atención real cuando la necesito.",
    since: "Cliente desde 2022",
  },
];

const FAQS = [
  {
    q: "¿Quiénes pueden acceder al canal veterinario?",
    a: "Médicos veterinarios con cédula profesional activa, técnicos en veterinaria, clínicas y hospitales veterinarios registrados en México.",
  },
  {
    q: "¿Cuánto tiempo tarda la verificación?",
    a: "Revisamos tu información en un plazo de 24 a 48 horas hábiles. Te contactamos por correo con la confirmación y tus credenciales de acceso.",
  },
  {
    q: "¿Hay un monto mínimo de compra?",
    a: "No hay mínimo para el primer pedido. A partir del segundo mes se establecen rangos de compra para mantener los descuentos por volumen.",
  },
  {
    q: "¿Cómo funciona la línea de crédito?",
    a: "Después de 3 pedidos consecutivos con pago puntual, puedes solicitar una línea de crédito a 30 días naturales.",
  },
  {
    q: "¿Los productos de prescripción requieren receta?",
    a: "Sí. Para líneas de manejo clínico específico solicitamos receta veterinaria digital o en fotografía al momento del pedido.",
  },
];

interface IVetForm {
  name: string;
  email: string;
  phone: string;
  clinic: string;
  cedula: string;
  city: string;
  speciality: string;
}

const INITIAL_FORM: IVetForm = {
  name: "",
  email: "",
  phone: "",
  clinic: "",
  cedula: "",
  city: "",
  speciality: "",
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function VeterinarioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<IVetForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero lines
        if (heroRef.current) {
          gsap.from(heroRef.current.querySelectorAll(".hero-line"), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          });
        }

        // Benefits cards
        if (benefitsRef.current) {
          const cards = benefitsRef.current.querySelectorAll(".benefit-card");
          gsap.set(cards, { y: 50, opacity: 0 });
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }

        // Steps
        if (stepsRef.current) {
          const steps = stepsRef.current.querySelectorAll(".step-item");
          gsap.set(steps, { x: -40, opacity: 0 });
          gsap.to(steps, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      });
      return () => ctx.revert();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  }

  return (
    <main className="min-h-screen bg-warm pt-16">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden min-h-[85vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1400&q=80&fit=crop"
            alt="Veterinario con mascota"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </div>

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
          style={{
            backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div
          ref={heroRef}
          className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-24"
        >
          <div className="max-w-2xl">
            <div className="hero-line inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-bold text-gold tracking-[0.12em] uppercase">
                Canal exclusivo para profesionales
              </span>
            </div>

            <h1 className="hero-line font-display font-black text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.02] tracking-tight mb-6">
              El canal que los{" "}
              <em className="not-italic text-gold">veterinarios</em> merecen
            </h1>

            <p className="hero-line text-white/55 text-lg font-light leading-relaxed max-w-lg mb-10">
              Precios mayoristas, productos de prescripción y soporte técnico
              dedicado. Diseñado exclusivamente para profesionales de la salud
              animal en México.
            </p>

            <div className="hero-line flex flex-wrap gap-3">
              <a
                href="#registro"
                className="group inline-flex items-center gap-2 bg-gold text-ink font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Solicitar acceso ahora
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  <IconArrow />
                </span>
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/18 transition-all duration-200 backdrop-blur-sm"
              >
                Ver beneficios
              </a>
            </div>

            {/* Trust row */}
            <div className="hero-line flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
              {[
                { num: "200+", label: "veterinarios activos" },
                { num: "35%", label: "descuento máximo" },
                { num: "48h", label: "verificación de cuenta" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    i > 0 ? "pl-6 border-l border-white/15" : ""
                  }`}
                >
                  <span className="font-display font-bold text-2xl text-gold leading-none">
                    {s.num}
                  </span>
                  <span className="text-white/40 text-xs font-light mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────── */}
      <section id="beneficios" className="py-24 px-8 lg:px-16 bg-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3"
            >
              Por qué unirte
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl lg:text-5xl text-ink tracking-tight leading-tight"
            >
              Beneficios del canal{" "}
              <em className="not-italic text-gold">profesional</em>
            </motion.h2>
          </div>

          <div
            ref={benefitsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="benefit-card group bg-white rounded-3xl p-6 border border-warm-3 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-base text-ink mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-24 px-8 lg:px-16 bg-warm-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="https://images.unsplash.com/photo-1581888227599-779811939961?w=800&q=80&fit=crop"
                alt="Veterinario en consulta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-warm-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center text-xs font-bold text-gold-dark flex-shrink-0">
                    ML
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink leading-none mb-0.5">
                      Dra. Mariana López
                    </p>
                    <p className="text-xs text-muted font-light">
                      Cuenta activada · hace 2 días
                    </p>
                  </div>
                  <div className="ml-auto w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <IconCheck />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — steps */}
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
                Proceso
              </p>
              <h2 className="font-display font-bold text-4xl text-ink tracking-tight leading-tight mb-12">
                Tres pasos para
                <br />
                <em className="not-italic text-gold">acceder al canal</em>
              </h2>

              <div ref={stepsRef} className="flex flex-col gap-8">
                {STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className="step-item flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-ink flex items-center justify-center">
                      <span className="font-display font-bold text-sm text-gold">
                        {step.num}
                      </span>
                    </div>
                    <div className="pt-1">
                      {i < STEPS.length - 1 && (
                        <div className="absolute ml-[-2.75rem] mt-12 w-px h-8 bg-warm-3" />
                      )}
                      <p className="font-semibold text-base text-ink mb-1">
                        {step.title}
                      </p>
                      <p className="text-sm text-muted font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#registro"
                className="mt-10 inline-flex items-center gap-2 bg-gold text-ink font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Comenzar ahora <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 px-8 lg:px-16 bg-ink overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3"
            >
              Lo que dicen
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl text-white tracking-tight"
            >
              Veterinarios que ya{" "}
              <em className="not-italic text-gold">confían en nosotros</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white/4 border border-white/8 rounded-3xl p-6 hover:bg-white/7 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#D4A017"
                      stroke="#D4A017"
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/65 text-sm font-light leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white/85 text-sm font-semibold leading-none mb-0.5">
                      {t.name}
                    </p>
                    <p className="text-white/35 text-xs font-light">{t.role}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-medium text-gold/60 bg-gold/10 px-2 py-0.5 rounded-full">
                    {t.since}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER FORM ────────────────────────────────────────── */}
      <section id="registro" className="py-24 px-8 lg:px-16 bg-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — info */}
            <div className="lg:sticky lg:top-24">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3"
              >
                Solicitud de acceso
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display font-bold text-4xl text-ink tracking-tight leading-tight mb-4"
              >
                Únete al canal
                <br />
                <em className="not-italic text-gold">veterinario</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted font-light text-base leading-relaxed mb-8"
              >
                Completa el formulario con tus datos profesionales. Verificamos
                tu cédula y activamos tu cuenta en 24–48h hábiles.
              </motion.p>

              {/* Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3"
              >
                {[
                  "Sin costo de membresía",
                  "Acceso inmediato al catálogo mayorista",
                  "Soporte técnico desde el primer pedido",
                  "Cancelación sin penalización",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                      <IconCheck />
                    </div>
                    <span className="text-sm text-muted font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl border border-warm-3 p-8 shadow-card"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          name: "name",
                          label: "Nombre completo",
                          placeholder: "Dr. Juan García",
                          type: "text",
                        },
                        {
                          name: "email",
                          label: "Correo electrónico",
                          placeholder: "juan@clinica.com",
                          type: "email",
                        },
                        {
                          name: "phone",
                          label: "Teléfono",
                          placeholder: "+52 55 1234 5678",
                          type: "tel",
                        },
                        {
                          name: "cedula",
                          label: "Cédula profesional",
                          placeholder: "12345678",
                          type: "text",
                        },
                        {
                          name: "clinic",
                          label: "Clínica u hospital",
                          placeholder: "Clínica Veterinaria López",
                          type: "text",
                        },
                        {
                          name: "city",
                          label: "Ciudad",
                          placeholder: "Ciudad de México",
                          type: "text",
                        },
                      ].map((field) => (
                        <div
                          key={field.name}
                          className={
                            field.name === "clinic" ? "sm:col-span-2" : ""
                          }
                        >
                          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={form[field.name as keyof IVetForm]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-warm border border-warm-3 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 outline-none focus:border-gold/50 focus:bg-white transition-all duration-200"
                          />
                        </div>
                      ))}

                      {/* Speciality select */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          Especialidad
                        </label>
                        <select
                          name="speciality"
                          value={form.speciality}
                          onChange={handleChange}
                          required
                          className="w-full bg-warm border border-warm-3 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-gold/50 focus:bg-white transition-all duration-200 cursor-pointer"
                        >
                          <option value="">Selecciona tu especialidad</option>
                          <option value="general">Medicina general</option>
                          <option value="cirugia">Cirugía</option>
                          <option value="dermatologia">Dermatología</option>
                          <option value="nutricion">Nutrición clínica</option>
                          <option value="comportamiento">Comportamiento</option>
                          <option value="oncologia">Oncología</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-ink text-warm font-semibold text-sm py-4 rounded-xl hover:bg-gold hover:text-ink transition-all duration-200 shadow-card hover:shadow-gold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-warm/30 border-t-warm animate-spin" />
                          Enviando solicitud...
                        </>
                      ) : (
                        <>
                          Enviar solicitud de acceso
                          <IconArrow />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-muted font-light">
                      Al enviar confirmas que eres profesional veterinario con
                      cédula activa.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12 flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold text-2xl">
                      <IconCheck />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-ink mb-2">
                        ¡Solicitud enviada!
                      </h3>
                      <p className="text-sm text-muted font-light leading-relaxed max-w-xs">
                        Revisaremos tu información y te contactaremos en{" "}
                        <strong className="text-ink">24–48h hábiles</strong> al
                        correo que nos proporcionaste.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL_FORM);
                      }}
                      className="mt-2 text-xs text-muted hover:text-ink transition-colors duration-200"
                    >
                      Enviar otra solicitud
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-8 lg:px-16 bg-warm-2">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
              FAQ
            </p>
            <h2 className="font-display font-bold text-4xl text-ink tracking-tight">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-warm-3 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-warm/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-sm text-ink pr-4">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-muted">
                    <IconChevron open={openFaq === i} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted font-light leading-relaxed border-t border-warm-3 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted font-light mb-4">
              ¿Tienes más preguntas? Escríbenos directamente.
            </p>
            <a
              href="#registro"
              className="inline-flex items-center gap-2 bg-ink text-warm font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gold hover:text-ink transition-all duration-200 shadow-card hover:shadow-gold"
            >
              Solicitar acceso <IconArrow />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
