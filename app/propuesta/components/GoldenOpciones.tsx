"use client";

import { useState } from "react";

const Check = ({ color = "#D4A017" }: { color?: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Cross = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E02020"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const OPTIONS = [
  {
    id: "glowup",
    tag: "Opción básica",
    tagStyle: {
      background: "rgba(255,255,255,0.07)",
      color: "rgba(255,255,255,0.4)",
      border: "0.5px solid rgba(255,255,255,0.1)",
    },
    name: "Rediseño del sitio actual",
    price: "$25,000",
    time: "3 semanas",
    scheme: "50 / 50",
    desc: "Le damos una nueva cara a goldendog.mx sin cambiar cómo funciona por dentro. Más bonito, mismo sistema.",
    pros: [
      "Sitio visualmente renovado",
      "Más rápido en celular",
      "Se ve profesional desde el primer día",
    ],
    cons: [
      "Los leads siguen perdiéndose igual",
      "Sin respuesta automática a clientes",
      "Sin portal para distribuidores",
      "Sin datos de qué productos venden más",
      "En 12 meses el problema regresa",
    ],
    warning: "Resuelve la apariencia, no el negocio.",
    dim: true,
    featured: false,
    accentColor: "rgba(255,255,255,0.5)",
  },
  {
    id: "n3",
    tag: "Opción intermedia",
    tagStyle: {
      background: "rgba(16,185,129,0.1)",
      color: "#065F46",
      border: "0.5px solid rgba(16,185,129,0.2)",
    },
    name: "Tienda nueva con migración",
    price: "$50,000",
    time: "4–5 semanas",
    scheme: "40 / 30 / 30",
    desc: "Reconstruimos la tienda desde cero, más rápida y profesional. Se migran todos sus productos y clientes actuales sin perder nada.",
    pros: [
      "Tienda nueva, rápida y profesional",
      "Todos los productos migrados sin pérdida",
      "Historial de clientes conservado",
      "Pagos en línea con MercadoPago",
      "Portal básico para distribuidores",
      "Posicionamiento en Google mejorado",
    ],
    cons: [
      "Sin respuesta automática por WhatsApp",
      "Los carritos abandonados siguen perdiéndose",
      "Sin notificaciones automáticas al equipo",
      "Sin panel para ver ventas en tiempo real",
    ],
    warning: null,
    dim: false,
    featured: false,
    accentColor: "#10B981",
  },
  {
    id: "n4",
    tag: "⭐ Recomendado",
    tagStyle: {
      background: "rgba(212,160,23,0.12)",
      color: "#A07810",
      border: "0.5px solid rgba(212,160,23,0.25)",
    },
    name: "Sistema completo automatizado",
    price: "$80,000",
    time: "5–6 semanas",
    scheme: "40 / 30 / 30",
    desc: "Todo lo de la opción intermedia más un sistema que trabaja por GoldenDog las 24 horas: responde clientes, recupera ventas perdidas y avisa al equipo solo.",
    pros: [
      "Tienda nueva, rápida y profesional",
      "Todos los productos migrados sin pérdida",
      "Respuesta automática por WhatsApp en 2 min",
      "Recuperación de carritos abandonados",
      "Portal exclusivo para distribuidores con precios propios",
      "El equipo recibe notificaciones de cada venta",
      "Panel para ver qué vende más cada día",
      "Pagos con tarjeta y transferencia",
      "30 días de soporte incluidos",
    ],
    cons: [],
    warning: null,
    dim: false,
    featured: true,
    accentColor: "#D4A017",
  },
];

export default function GoldenOpciones() {
  const [active, setActive] = useState("n4");
  const selected = OPTIONS.find((o) => o.id === active)!;

  return (
    <div
      className="relative w-full h-full flex items-center px-16 lg:px-24 overflow-hidden"
      style={{ background: "#1A1A1A" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(212,160,23,0.07) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Las opciones
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-2"
          style={{ fontSize: "clamp(24px,3.5vw,42px)", color: "#fff" }}
        >
          Tres caminos.
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            Uno resuelve el negocio.
          </em>
        </h2>

        <p
          className="slide-sub text-sm font-light mb-6"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Toca cada opción para ver qué cambia en GoldenDog.
        </p>

        <div className="slide-grid grid grid-cols-5 gap-5">
          {/* LEFT — cards */}
          <div className="col-span-2 flex flex-col gap-3">
            {OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActive(opt.id)}
                className="text-left rounded-2xl p-4 transition-all duration-300 w-full"
                style={{
                  background:
                    active === opt.id
                      ? opt.featured
                        ? "rgba(212,160,23,0.08)"
                        : "rgba(255,255,255,0.07)"
                      : "rgba(255,255,255,0.02)",
                  border:
                    active === opt.id
                      ? opt.featured
                        ? "2px solid rgba(212,160,23,0.5)"
                        : "1px solid rgba(255,255,255,0.2)"
                      : "0.5px solid rgba(255,255,255,0.06)",
                  opacity: opt.dim && active !== opt.id ? 0.4 : 1,
                }}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-md"
                    style={opt.tagStyle}
                  >
                    {opt.tag}
                  </span>
                  <p
                    className="font-display font-bold text-base ml-2 flex-shrink-0"
                    style={{
                      color: opt.featured
                        ? "#D4A017"
                        : active === opt.id
                        ? "#fff"
                        : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {opt.price}
                  </p>
                </div>

                <p
                  className="font-semibold text-sm leading-tight mb-1"
                  style={{
                    color: active === opt.id ? "#fff" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {opt.name}
                </p>

                <p
                  className="text-[10px] font-light"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {opt.time} · {opt.scheme}
                </p>

                {active === opt.id && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: opt.accentColor }}
                    />
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: opt.accentColor }}
                    >
                      Ver detalle →
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT — detail */}
          <div
            className="col-span-3 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
            style={{
              background: selected.featured
                ? "rgba(212,160,23,0.05)"
                : "rgba(255,255,255,0.04)",
              border: selected.featured
                ? "1.5px solid rgba(212,160,23,0.35)"
                : "0.5px solid rgba(255,255,255,0.1)",
            }}
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-4">
                  <p
                    className="font-display font-bold text-lg mb-1"
                    style={{ color: "#fff" }}
                  >
                    {selected.name}
                  </p>
                  <p
                    className="text-xs font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {selected.desc}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className="font-display font-black text-2xl"
                    style={{ color: selected.featured ? "#D4A017" : "#fff" }}
                  >
                    {selected.price}
                  </p>
                  <p
                    className="text-[10px] font-light mt-0.5"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {selected.time}
                  </p>
                </div>
              </div>

              <div
                className="h-px mb-4"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />

              {/* Pros / Cons */}
              <div
                className={`grid gap-4 ${
                  selected.cons.length > 0 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                <div>
                  <p
                    className="text-[10px] font-bold tracking-wider uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    Qué gana GoldenDog
                  </p>
                  {selected.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 mb-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: `${selected.accentColor}20`,
                          border: `0.5px solid ${selected.accentColor}50`,
                        }}
                      >
                        <Check color={selected.accentColor} />
                      </div>
                      <span
                        className="text-xs font-light leading-snug"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        {p}
                      </span>
                    </div>
                  ))}
                </div>

                {selected.cons.length > 0 && (
                  <div>
                    <p
                      className="text-[10px] font-bold tracking-wider uppercase mb-3"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      Qué sigue igual
                    </p>
                    {selected.cons.map((c) => (
                      <div key={c} className="flex items-start gap-2 mb-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: "rgba(224,32,32,0.08)",
                            border: "0.5px solid rgba(224,32,32,0.2)",
                          }}
                        >
                          <Cross />
                        </div>
                        <span
                          className="text-xs font-light leading-snug"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {selected.cons.length === 0 && (
                  <div
                    className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(212,160,23,0.08)",
                      border: "0.5px solid rgba(212,160,23,0.2)",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>🏆</span>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "#D4A017" }}
                      >
                        Sistema completo
                      </p>
                      <p
                        className="text-xs font-light"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Sin limitaciones. GoldenDog crece sin cambiar de
                        sistema.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Warning */}
            {selected.warning && (
              <div
                className="mt-4 px-3 py-2 rounded-xl text-xs font-light"
                style={{
                  background: "rgba(212,160,23,0.06)",
                  border: "0.5px solid rgba(212,160,23,0.15)",
                  color: "rgba(212,160,23,0.65)",
                }}
              >
                ⚠ {selected.warning}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(255,255,255,0.028)" }}
      >
        03
      </div>
    </div>
  );
}
