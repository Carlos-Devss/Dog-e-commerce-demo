"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IconTrophy = () => (
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
    <polyline points="14 9 19 4 19 4" />
    <path d="M17 4h3v5a4 4 0 01-4 4h-1" />
    <path d="M7 4H4v5a4 4 0 004 4h1" />
    <path d="M12 15v4" />
    <path d="M8 19h8" />
    <path d="M8 4h8v6a4 4 0 01-8 0V4z" />
  </svg>
);

const IconDog = () => (
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
    <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 2-1 2-1" />
    <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-2-1-2-1" />
    <path d="M8 14v.5M16 14v.5" />
    <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309" />
    <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
  </svg>
);

const IconStethoscope = () => (
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
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const IconStar = () => (
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
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const STATS = [
  {
    num: 25,
    suffix: "+",
    label: "Años en el mercado",
    sub: "Fundados en México en 1999",
    Icon: IconTrophy,
  },
  {
    num: 8,
    suffix: "k+",
    label: "Clientes activos",
    sub: "Familias que confían en GoldenDog",
    Icon: IconDog,
  },
  {
    num: 200,
    suffix: "+",
    label: "Veterinarios aliados",
    sub: "Red profesional en toda la república",
    Icon: IconStethoscope,
  },
  {
    num: 4.9,
    suffix: "",
    label: "Calificación promedio",
    sub: "Basada en +2,400 reseñas verificadas",
    Icon: IconStar,
  },
];

const TESTIMONIALS = [
  {
    name: "Dra. Mariana López",
    role: "Médico Veterinario · CDMX",
    text: "GoldenDog es mi primera recomendación a los dueños de mis pacientes. La calidad de sus productos de higiene es consistente y los resultados son notables.",
    avatar: "ML",
    color: "bg-gold/15 text-gold-dark",
  },
  {
    name: "Carlos Mendoza",
    role: "Cliente desde 2018 · Guadalajara",
    text: "Llevo 6 años comprando el shampoo y los productos de entrenamiento para mis golden retrievers. No cambiaría nada — envío rápido y calidad de primera.",
    avatar: "CM",
    color: "bg-red-brand/10 text-red-brand",
  },
  {
    name: "Sofía Reyes",
    role: "Entrenadora canina · Monterrey",
    text: "El kit de entrenamiento TrainPro es lo mejor que he probado. Mis clientes ven resultados en la primera semana. Totalmente respaldado.",
    avatar: "SR",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (!statsRef.current) return;

        // Stat cards — set inicial invisible, luego animar
        const cards = statsRef.current.querySelectorAll(".stat-card");
        gsap.set(cards, { y: 50, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Contadores animados
        const counters = statsRef.current.querySelectorAll(".counter-num");
        counters.forEach((el) => {
          const target = parseFloat(el.getAttribute("data-target") || "0");
          const isDecimal = target % 1 !== 0;

          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = isDecimal
                    ? obj.val.toFixed(1)
                    : Math.round(obj.val).toString();
                },
              });
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative bg-ink overflow-hidden py-24 px-8 lg:px-16"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold/5 -translate-y-1/2 pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-red-brand/5 translate-y-1/2 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-4"
          >
            Por qué elegirnos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            25 años de <em className="not-italic text-gold">confianza</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 font-light text-base max-w-lg mx-auto leading-relaxed"
          >
            La opción favorita de veterinarios y familias mexicanas que no
            negocian el bienestar de sus mascotas.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-card group relative bg-white/4 border border-white/8 rounded-3xl p-6 hover:bg-white/7 hover:border-gold/20 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.Icon />
              </div>
              <div className="flex items-baseline justify-center gap-0.5 mb-1">
                <span
                  className="counter-num font-display font-bold text-4xl text-gold leading-none"
                  data-target={stat.num}
                >
                  0
                </span>
                <span className="font-display font-bold text-2xl text-gold leading-none">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/80 text-sm font-semibold mb-1">
                {stat.label}
              </p>
              <p className="text-white/35 text-xs font-light leading-relaxed">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gold/60">
            Lo que dicen nuestros clientes
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-white/4 border border-white/8 rounded-3xl p-6 hover:bg-white/7 hover:border-white/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#D4A017"
                    stroke="#D4A017"
                    strokeWidth="1"
                    className="flex-shrink-0"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/65 text-sm font-light leading-relaxed mb-6 line-clamp-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#productos"
            className="inline-flex items-center gap-2 bg-gold text-ink font-semibold text-sm px-8 py-4 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
          >
            Conocer productos
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
