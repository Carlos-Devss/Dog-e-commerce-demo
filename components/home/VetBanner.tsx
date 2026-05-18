"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  { icon: "💰", text: "Precios mayoristas con descuento hasta 35%" },
  { icon: "💊", text: "Productos de prescripción disponibles" },
  { icon: "🎯", text: "Soporte técnico y atención prioritaria" },
  { icon: "📦", text: "Pedidos a consignación y crédito disponible" },
  { icon: "🚚", text: "Envío express sin costo mínimo de compra" },
  { icon: "📋", text: "Facturas y comprobantes fiscales digitales" },
];

interface IVetForm {
  name: string;
  email: string;
  clinic: string;
  cedula: string;
}

export default function VetBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<IVetForm>({
    name: "",
    email: "",
    clinic: "",
    cedula: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        });

        gsap.from(cardRef.current.querySelectorAll(".benefit-item"), {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.clinic || !form.cedula) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  return (
    <section
      ref={sectionRef}
      id="veterinario"
      className="relative bg-warm py-24 px-8 lg:px-16 overflow-hidden"
    >
      {/* Bg accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold/6 -translate-y-1/2 pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-red-brand/4 translate-x-1/3 translate-y-1/3 pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
            Canal exclusivo
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
            Acceso <em className="not-italic text-gold">veterinario</em>{" "}
            preferencial
          </h2>
        </motion.div>

        {/* Main card */}
        <div
          ref={cardRef}
          className="relative bg-ink rounded-4xl overflow-hidden"
        >
          {/* Card bg texture */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-red-brand/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* LEFT — benefits */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/25 rounded-full px-4 py-1.5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-xs font-bold text-gold tracking-widest uppercase">
                    Canal profesional
                  </span>
                </div>

                <h3 className="font-display font-bold text-3xl lg:text-4xl text-white leading-tight tracking-tight mb-4">
                  Un canal diseñado
                  <br />
                  para <em className="not-italic text-gold">profesionales</em>
                </h3>

                <p className="text-white/50 font-light text-base leading-relaxed mb-10 max-w-sm">
                  Acceso exclusivo para médicos veterinarios y clínicas con
                  precios especiales, productos de prescripción y soporte
                  dedicado.
                </p>

                {/* Benefits list */}
                <div className="flex flex-col gap-3">
                  {BENEFITS.map((b) => (
                    <div
                      key={b.text}
                      className="benefit-item flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                        {b.icon}
                      </div>
                      <p className="text-white/65 text-sm font-light leading-relaxed pt-1.5">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom trust note */}
              <div className="mt-10 flex items-center gap-3 pt-8 border-t border-white/8">
                <div className="flex -space-x-2">
                  {["ML", "CA", "SR"].map((init, i) => (
                    <div
                      key={init}
                      className="w-8 h-8 rounded-full bg-gold/20 border-2 border-ink flex items-center justify-center text-[10px] font-bold text-gold"
                      style={{ zIndex: 3 - i }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-xs font-light">
                  +200 veterinarios ya tienen acceso
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="relative p-8 lg:p-12 lg:border-l border-white/8 flex items-center">
              <div className="w-full">
                {!submitted ? (
                  <>
                    <h4 className="font-display font-bold text-xl text-white mb-1">
                      Solicita tu acceso
                    </h4>
                    <p className="text-white/40 text-sm font-light mb-8">
                      Verificamos tu información en 24–48h hábiles.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      {[
                        {
                          name: "name",
                          label: "Nombre completo",
                          placeholder: "Dr. Juan García",
                          type: "text",
                        },
                        {
                          name: "email",
                          label: "Correo institucional",
                          placeholder: "juan@clinica.com",
                          type: "email",
                        },
                        {
                          name: "clinic",
                          label: "Clínica / Hospital veterinario",
                          placeholder: "Clínica Veterinaria López",
                          type: "text",
                        },
                        {
                          name: "cedula",
                          label: "Cédula profesional",
                          placeholder: "12345678",
                          type: "text",
                        },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={form[field.name as keyof IVetForm]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-200"
                          />
                        </div>
                      ))}

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full bg-gold text-ink font-semibold text-sm py-3.5 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-gold-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-ink/30 border-t-ink animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          "Solicitar acceso →"
                        )}
                      </button>

                      <p className="text-center text-white/25 text-xs font-light">
                        Solo para profesionales con cédula activa
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center text-3xl mx-auto mb-6">
                      ✓
                    </div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">
                      ¡Solicitud enviada!
                    </h4>
                    <p className="text-white/45 text-sm font-light leading-relaxed max-w-xs mx-auto">
                      Revisaremos tu información y te contactaremos en 24–48h
                      hábiles al correo que nos proporcionaste.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          clinic: "",
                          cedula: "",
                        });
                      }}
                      className="mt-6 text-xs text-gold/60 hover:text-gold transition-colors duration-200"
                    >
                      Enviar otra solicitud
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
