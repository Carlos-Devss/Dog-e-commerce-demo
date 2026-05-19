"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

const SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80&fit=crop",
    alt: "Labrador dorado feliz",
    badge: "Higiene premium",
    headline: "Lo mejor para",
    highlight: "tu mejor amigo",
    sub: "Productos de higiene y entrenamiento fabricados en México con 25 años de experiencia.",
    cta: "Ver higiene",
    ctaHref: "#categorias",
    accent: "#D4A017",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&q=80&fit=crop",
    alt: "Golden retriever en entrenamiento",
    badge: "Entrenamiento",
    headline: "Entrena con",
    highlight: "resultados reales",
    sub: "Kits profesionales de entrenamiento positivo recomendados por veterinarios en toda la república.",
    cta: "Ver entrenamiento",
    ctaHref: "#categorias",
    accent: "#E02020",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=900&q=80&fit=crop",
    alt: "Perro siendo bañado",
    badge: "Canal veterinario",
    headline: "Acceso exclusivo",
    highlight: "para veterinarios",
    sub: "Precios mayoristas, productos de prescripción y soporte técnico dedicado para profesionales.",
    cta: "Solicitar acceso",
    ctaHref: "#veterinario",
    accent: "#D4A017",
  },
];

const STATS = [
  { num: "25+", label: "años en México" },
  { num: "8k+", label: "clientes activos" },
  { num: "200+", label: "veterinarios aliados" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  useEffect(() => {
    if (statsRef.current) {
      gsap.from(statsRef.current.querySelectorAll(".stat-item"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.8,
      });
    }
  }, []);

  const slide = SLIDES[current];

  const imgInitial = {
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.05 as number,
    opacity: 0 as number,
  };
  const imgAnimate = { x: "0%", scale: 1 as number, opacity: 1 as number };
  const imgExit = {
    x: direction > 0 ? "-30%" : "30%",
    scale: 0.98 as number,
    opacity: 0 as number,
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={`img-${slide.id}`}
          initial={imgInitial}
          animate={imgAnimate}
          exit={imgExit}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/65 to-ink/25" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/85 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 lg:px-20 pt-28 pb-10">
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 w-fit rounded-full px-4 py-1.5 mb-8 border"
              style={{
                background: `${slide.accent}18`,
                borderColor: `${slide.accent}40`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: slide.accent }}
              />
              <span
                className="text-xs font-bold tracking-[0.12em] uppercase"
                style={{ color: slide.accent }}
              >
                {slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="font-display font-black text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-white mb-4">
                {slide.headline}
                <br />
                <span
                  className="relative inline-block"
                  style={{ color: slide.accent }}
                >
                  {slide.highlight}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 7 Q50 1 100 5 Q150 1 200 7"
                      stroke={slide.accent}
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg mt-6 mb-10">
                {slide.sub}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={slide.ctaHref}
                  className="group inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: slide.accent, color: "#1A1A1A" }}
                >
                  {slide.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
                <a
                  href="#productos"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/18 transition-all duration-200 backdrop-blur-sm"
                >
                  Ver tienda
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-6 pt-8 border-t border-white/8">
          <div ref={statsRef} className="flex gap-8">
            {STATS.map((stat, i) => (
              <div
                key={stat.num}
                className={`stat-item flex flex-col ${
                  i > 0 ? "pl-8 border-l border-white/15" : ""
                }`}
              >
                <span className="font-display font-bold text-2xl text-white leading-none">
                  {stat.num}
                </span>
                <span className="text-white/40 text-xs font-light mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              aria-label="Anterior"
            >
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
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Slide ${i + 1}`}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.5rem",
                    background: "rgba(255,255,255,0.25)",
                  }}
                >
                  {i === current && (
                    <motion.div
                      key={`progress-${current}`}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: slide.accent }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              aria-label="Siguiente"
            >
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <span className="text-white/35 text-xs font-light tabular-nums">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
