"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CATEGORIES } from "../../data/product";

gsap.registerPlugin(ScrollTrigger);

const CATEGORY_COLORS: Record<string, { border: string; dot: string }> = {
  higiene: { border: "border-amber-200", dot: "bg-gold" },
  entrenamiento: { border: "border-red-200", dot: "bg-red-brand" },
  accesorios: { border: "border-rose-200", dot: "bg-rose-400" },
  suplementos: { border: "border-emerald-200", dot: "bg-emerald-500" },
};

const TRUST_ITEMS = [
  {
    text: "Fabricación mexicana",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    text: "Calidad garantizada",
    icon: (
      <svg
        width="15"
        height="15"
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
  },
  {
    text: "Envío a todo México",
    icon: (
      <svg
        width="15"
        height="15"
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
  },
  {
    text: "Respaldado por veterinarios",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Esperar a que el DOM esté completamente pintado
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Title reveal letra por letra
        if (titleRef.current) {
          const text = titleRef.current.innerText;
          titleRef.current.innerHTML = text
            .split("")
            .map((char) =>
              char === " "
                ? '<span style="display:inline-block">&nbsp;</span>'
                : `<span style="display:inline-block;opacity:0;transform:translateY(40px)">${char}</span>`
            )
            .join("");

          gsap.to(titleRef.current.querySelectorAll("span"), {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        // Cards stagger
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll(".cat-card");

          // Setear estado inicial visible pero abajo
          gsap.set(cards, { y: 60, opacity: 0 });

          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categorias"
      className="relative bg-warm py-24 px-8 lg:px-16 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-brand/3 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3"
            >
              Explora
            </motion.p>
            <h2
              ref={titleRef}
              className="font-display font-bold text-4xl lg:text-5xl text-ink tracking-tight leading-tight"
            >
              Categorías
            </h2>
          </div>

          <motion.a
            href="#productos"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors duration-200"
          >
            Ver todos los productos
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </motion.a>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {CATEGORIES.map((cat) => {
            const colors = CATEGORY_COLORS[cat.id];
            return (
              <div
                key={cat.id}
                className={`cat-card group relative rounded-3xl overflow-hidden border ${colors.border} bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover`}
              >
                {/* Image area */}
                <div className="relative h-48 overflow-hidden bg-warm-2">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />

                  {/* Label chip over image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-ink border border-white/60">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                      />
                      {cat.label}
                    </span>
                  </div>

                  {/* Corner arrow on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-xs text-ink opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110">
                    →
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 py-4 border-t border-inherit">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-ink mb-0.5">
                        {cat.label}
                      </p>
                      <p className="text-xs text-muted font-light">
                        {cat.count} productos
                      </p>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${colors.dot} group-hover:scale-150 transition-transform duration-300`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 py-6 border-y border-warm-3"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm text-muted font-light"
            >
              <span className="text-muted">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
