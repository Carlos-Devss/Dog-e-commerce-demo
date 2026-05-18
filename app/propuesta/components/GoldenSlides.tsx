"use client";

// ─── GoldenEntregables — slide 5 dark ────────────────────────────────────────

const Check = () => (
  <div
    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
    style={{
      background: "rgba(212,160,23,0.12)",
      border: "0.5px solid rgba(212,160,23,0.25)",
    }}
  >
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4A017"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

export function GoldenEntregables() {
  const pages = [
    "Home con hero y categorías",
    "Catálogo con filtros y búsqueda",
    "Página de producto con galería",
    "Landing canal distribuidores",
    "Checkout MercadoPago + Stripe",
    "Panel de cuenta del cliente",
  ];
  const autos = [
    "WhatsApp a lead nuevo (< 2 min)",
    "Confirmación de pedido automática",
    "Notificación interna al equipo",
    "Seguimiento post-compra a 3 días",
    "Registro canal distribuidores",
    "Alerta de carrito abandonado",
  ];

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
      <div className="relative z-10 w-full max-w-4xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Entregables del N4
        </p>
        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-8"
          style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#fff" }}
        >
          Qué se entrega
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            exactamente
          </em>
        </h2>
        <div className="slide-grid grid grid-cols-2 gap-8 mb-6">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              6 páginas
            </p>
            {pages.map((p) => (
              <div key={p} className="flex items-start gap-2.5 mb-2.5">
                <Check />
                <span
                  className="text-sm font-light leading-snug"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              6 automatizaciones
            </p>
            {autos.map((a) => (
              <div key={a} className="flex items-start gap-2.5 mb-2.5">
                <Check />
                <span
                  className="text-sm font-light leading-snug"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {a}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="slide-line"
          style={{
            height: "0.5px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: "20px",
          }}
        />
        <div className="slide-metric grid grid-cols-4 gap-5">
          {[
            ["6", "Páginas"],
            ["6", "Automatizaciones"],
            ["2", "Pasarelas"],
            ["30d", "Soporte"],
          ].map(([n, l]) => (
            <div key={l}>
              <p
                className="font-display font-black leading-none mb-1"
                style={{ fontSize: "38px", color: "#D4A017" }}
              >
                {n}
              </p>
              <p
                className="text-xs font-light"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(255,255,255,0.028)" }}
      >
        05
      </div>
    </div>
  );
}

// ─── GoldenTimeline — slide 6 light ──────────────────────────────────────────

export function GoldenTimeline() {
  const weeks: [string, string, string][] = [
    [
      "Semana 1",
      "Auditoría · exportación WooCommerce · arquitectura · diseño",
      "",
    ],
    ["Semana 2", "Home + Catálogo + Producto en staging", "Revisión 1"],
    ["Semana 3", "Canal distribuidores + Checkout + MercadoPago", ""],
    ["Semana 4", "Automatizaciones Make + WhatsApp 360dialog", "Revisión 2"],
    ["Semana 5", "QA completo + ajustes + migración → producción", ""],
    [
      "Semana 6",
      "Go live + capacitación del equipo + soporte activo",
      "Entrega final",
    ],
  ];

  return (
    <div
      className="relative w-full h-full flex items-center px-16 lg:px-24 overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      <div className="relative z-10 w-full max-w-4xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Timeline
        </p>
        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-8"
          style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#1A1A1A" }}
        >
          6 semanas.
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            Cada entrega tiene nombre.
          </em>
        </h2>
        <div className="flex flex-col gap-2">
          {weeks.map(([s, d, r]) => (
            <div
              key={s}
              className="slide-item flex items-center gap-4 rounded-xl px-5 py-3.5"
              style={{
                background: "#fff",
                border: "0.5px solid rgba(26,26,26,0.07)",
              }}
            >
              <span
                className="text-xs font-bold min-w-[76px]"
                style={{ color: "#D4A017" }}
              >
                {s}
              </span>
              <span
                className="text-sm font-light flex-1"
                style={{ color: "#1A1A1A" }}
              >
                {d}
              </span>
              {r && (
                <span
                  className="text-[10px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    color: "#065F46",
                    border: "0.5px solid rgba(16,185,129,0.2)",
                  }}
                >
                  ✓ {r}
                </span>
              )}
            </div>
          ))}
        </div>
        <div
          className="slide-line mt-5 flex items-center gap-2.5"
          style={{ color: "#6B6560" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <p className="text-xs font-light">
            Sin interrumpir la operación actual de GoldenDog
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(26,26,26,0.04)" }}
      >
        06
      </div>
    </div>
  );
}

// ─── GoldenCTA — slide 8 dark ─────────────────────────────────────────────────

export function GoldenCTA() {
  const steps = [
    ["1", "GoldenDog confirma el N4 y se acuerda la fecha de arranque"],
    ["2", "STRING envía contrato en menos de 24 horas"],
    ["3", "Primer pago de $32,000 → el proyecto arranca en 48 horas"],
  ];

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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%,rgba(212,160,23,0.06) 0%,transparent 60%)",
        }}
      />
      <div className="relative z-10 w-full max-w-4xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Confirmar
        </p>
        <h2
          className="slide-heading font-display font-black leading-[1.02] tracking-tight mb-4"
          style={{ fontSize: "clamp(34px,5vw,58px)", color: "#fff" }}
        >
          ¿Cuántos pedidos perdió
          <br />
          GoldenDog{" "}
          <em className="not-italic" style={{ color: "#D4A017" }}>
            esta semana?
          </em>
        </h2>
        <p
          className="slide-sub text-base font-light mb-10"
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: "440px" }}
        >
          Tres pasos para arrancar. Sin promesas genéricas.
        </p>
        <div
          className="flex flex-col gap-2.5 mb-8"
          style={{ maxWidth: "500px" }}
        >
          {steps.map(([n, t]) => (
            <div
              key={n}
              className="slide-item flex items-center gap-4 rounded-xl px-5 py-3.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(212,160,23,0.3)",
                  color: "#D4A017",
                }}
              >
                {n}
              </div>
              <p
                className="text-sm font-light"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {t}
              </p>
            </div>
          ))}
        </div>
        <div className="slide-cta flex flex-wrap gap-3">
          <a
            href="https://wa.me/5215545524847?text=Hola%2C%20quiero%20confirmar%20el%20proyecto%20GoldenDog%20N4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm rounded-xl"
            style={{
              background: "#D4A017",
              color: "#1A1A1A",
              padding: "13px 26px",
            }}
          >
            Confirmar el N4
            <svg
              width="16"
              height="16"
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
          </a>
          <a
            href="mailto:hola@stringwebs.com?subject=Propuesta%20GoldenDog%20N4"
            className="inline-flex items-center gap-2 font-semibold text-sm rounded-xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.7)",
              padding: "13px 26px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Tengo preguntas
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(255,255,255,0.028)" }}
      >
        08
      </div>
    </div>
  );
}
