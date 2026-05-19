"use client";

// ─── SHARED ───────────────────────────────────────────────────────────────────

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

// ─── GoldenEntregables — slide 5 dark ────────────────────────────────────────

const PAGES = [
  {
    title: "Página principal",
    desc: "La cara del negocio — con hero, productos destacados y categorías.",
  },
  {
    title: "Catálogo completo",
    desc: "Todos los productos con filtros, búsqueda y ordenamiento.",
  },
  {
    title: "Página de producto",
    desc: "Galería de fotos, descripción, precio y botón de compra.",
  },
  {
    title: "Portal distribuidores",
    desc: "Acceso exclusivo con precios especiales para el canal veterinario.",
  },
  {
    title: "Checkout y pagos",
    desc: "Pago con tarjeta y transferencia. Confirmación automática.",
  },
  {
    title: "Cuenta del cliente",
    desc: "Historial de pedidos, datos y seguimiento de envíos.",
  },
];

const AUTOS = [
  {
    title: "Respuesta inmediata a leads",
    desc: "WhatsApp automático en menos de 2 minutos a cualquier cliente nuevo.",
  },
  {
    title: "Confirmación de cada pedido",
    desc: "El cliente recibe su comprobante al instante — sin intervención del equipo.",
  },
  {
    title: "Aviso interno de ventas",
    desc: "El equipo de GoldenDog recibe una notificación cada vez que entra un pedido.",
  },
  {
    title: "Recuperación de carritos",
    desc: "Mensaje automático a clientes que casi compraron pero no terminaron.",
  },
  {
    title: "Registro de distribuidores",
    desc: "Alta automática de nuevos distribuidores al canal veterinario.",
  },
  {
    title: "Seguimiento post-compra",
    desc: "Mensaje al cliente 3 días después para verificar su experiencia.",
  },
];

export function GoldenEntregables() {
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
          Qué incluye el sistema
        </p>
        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-2"
          style={{ fontSize: "clamp(24px,3.5vw,42px)", color: "#fff" }}
        >
          Todo lo que GoldenDog recibe
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            el día del lanzamiento
          </em>
        </h2>
        <p
          className="slide-sub text-sm font-light mb-6"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Sin módulos extra, sin costos ocultos. Todo incluido en los $80,000
          MXN.
        </p>

        <div className="slide-grid grid grid-cols-2 gap-5 mb-5">
          {/* Páginas */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(212,160,23,0.12)",
                  border: "0.5px solid rgba(212,160,23,0.25)",
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                6 páginas de la tienda
              </p>
            </div>
            {PAGES.map((p) => (
              <div key={p.title} className="flex items-start gap-2.5 mb-2.5">
                <Check />
                <div>
                  <span
                    className="text-sm font-semibold block"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {p.title}
                  </span>
                  <span
                    className="text-xs font-light"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {p.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Automatizaciones */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(212,160,23,0.12)",
                  border: "0.5px solid rgba(212,160,23,0.25)",
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                6 automatizaciones activas
              </p>
            </div>
            {AUTOS.map((a) => (
              <div key={a.title} className="flex items-start gap-2.5 mb-2.5">
                <Check />
                <div>
                  <span
                    className="text-sm font-semibold block"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {a.title}
                  </span>
                  <span
                    className="text-xs font-light"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {a.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="slide-line"
          style={{
            height: "0.5px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: "16px",
          }}
        />

        <div className="slide-metric grid grid-cols-4 gap-5">
          {[
            ["6", "Páginas completas"],
            ["6", "Automatizaciones"],
            ["2", "Formas de pago"],
            ["30 días", "Soporte incluido"],
          ].map(([n, l]) => (
            <div key={l}>
              <p
                className="font-display font-black leading-none mb-1"
                style={{ fontSize: "32px", color: "#D4A017" }}
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

const WEEKS = [
  {
    week: "Semana 1",
    title: "Entendemos el negocio",
    desc: "Revisamos a fondo goldendog.mx, exportamos todos los productos y clientes, y definimos juntos cómo quedará el sitio nuevo.",
    badge: "",
  },
  {
    week: "Semana 2",
    title: "La tienda toma forma",
    desc: "Construimos la página principal, el catálogo y las páginas de producto. GoldenDog puede verlo en vivo en un ambiente de pruebas.",
    badge: "GoldenDog revisa",
  },
  {
    week: "Semana 3",
    title: "Portal distribuidores y pagos",
    desc: "Activamos el portal exclusivo para el canal veterinario y conectamos MercadoPago para recibir pagos en línea.",
    badge: "",
  },
  {
    week: "Semana 4",
    title: "El sistema trabaja solo",
    desc: "Configuramos todos los mensajes automáticos de WhatsApp, notificaciones al equipo y la recuperación de carritos abandonados.",
    badge: "GoldenDog revisa",
  },
  {
    week: "Semana 5",
    title: "Revisión y ajustes finales",
    desc: "Probamos todo de principio a fin. Ajustamos cualquier detalle. El sitio queda listo para salir al público.",
    badge: "",
  },
  {
    week: "Semana 6",
    title: "Lanzamiento y capacitación",
    desc: "El sitio sale en goldendog.mx. Capacitamos al equipo para usar el panel de pedidos y métricas. Empieza el soporte de 30 días.",
    badge: "Entrega final",
  },
];

export function GoldenTimeline() {
  return (
    <div
      className="relative w-full h-full flex items-center px-16 lg:px-24 overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      <div className="relative z-10 w-full max-w-5xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Cómo se construye
        </p>
        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-2"
          style={{ fontSize: "clamp(24px,3.5vw,42px)", color: "#1A1A1A" }}
        >
          6 semanas con entregables
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            concretos cada una
          </em>
        </h2>
        <p
          className="slide-sub text-sm font-light mb-6"
          style={{ color: "#6B6560" }}
        >
          GoldenDog puede ver el avance en todo momento. El sitio actual no se
          toca hasta que el nuevo esté aprobado.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {WEEKS.map((w) => (
            <div
              key={w.week}
              className="slide-item rounded-2xl px-4 py-3.5"
              style={{
                background: "#fff",
                border: "0.5px solid rgba(26,26,26,0.07)",
              }}
            >
              <div className="flex items-start justify-between mb-1.5">
                <span
                  className="text-[10px] font-bold"
                  style={{ color: "#D4A017" }}
                >
                  {w.week}
                </span>
                {w.badge && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap ml-2"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#065F46",
                      border: "0.5px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    ✓ {w.badge}
                  </span>
                )}
              </div>
              <p
                className="font-semibold text-sm mb-1"
                style={{ color: "#1A1A1A" }}
              >
                {w.title}
              </p>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "#6B6560" }}
              >
                {w.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="slide-line mt-4 pt-4 flex items-center gap-2.5"
          style={{
            borderTop: "0.5px solid rgba(26,26,26,0.08)",
            color: "#6B6560",
          }}
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
            El sitio actual de GoldenDog sigue funcionando sin interrupciones
            durante todo el proceso
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

const REASONS = [
  "Cada semana sin sistema es dinero que se va — leads sin respuesta, carritos abandonados, distribuidores sin portal",
  "El sitio actual no se interrumpe mientras construimos el nuevo",
  "Si algo no queda como se acordó, no se paga hasta que quede bien",
];

export function GoldenCTA() {
  const steps = [
    {
      n: "1",
      title: "GoldenDog dice que sí",
      desc: "Acordamos fecha de arranque y firmamos el contrato — listo en menos de 24 horas.",
    },
    {
      n: "2",
      title: "Primer pago de $32,000",
      desc: "El proyecto arranca en 48 horas. Se agenda la reunión de inicio.",
    },
    {
      n: "3",
      title: "En 5–6 semanas, listo",
      desc: "GoldenDog estrena su sistema. El equipo deja de operar ventas y empieza a crecer.",
    },
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

      <div className="relative z-10 w-full max-w-5xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          El siguiente paso
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.02] tracking-tight mb-3"
          style={{ fontSize: "clamp(30px,4.5vw,54px)", color: "#fff" }}
        >
          Cada semana sin el sistema
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            es dinero que se pierde.
          </em>
        </h2>

        <p
          className="slide-sub text-base font-light mb-8"
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: "520px" }}
        >
          GoldenDog lleva años construyendo una base de clientes. El sistema los
          captura, los atiende y los retiene — sin que el equipo tenga que hacer
          nada extra.
        </p>

        <div className="slide-grid grid grid-cols-2 gap-6">
          {/* LEFT — pasos */}
          <div>
            <p
              className="text-[10px] font-bold tracking-wider uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Tres pasos para arrancar
            </p>
            {steps.map((s) => (
              <div key={s.n} className="slide-item flex items-start gap-4 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(212,160,23,0.4)",
                    color: "#D4A017",
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "#fff" }}
                  >
                    {s.title}
                  </p>
                  <p
                    className="text-xs font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="slide-cta flex flex-wrap gap-3 mt-6">
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
                Quiero arrancar
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

          {/* RIGHT — razones */}
          <div>
            <p
              className="text-[10px] font-bold tracking-wider uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Por qué no esperar más
            </p>
            {REASONS.map((r, i) => (
              <div
                key={i}
                className="slide-item flex items-start gap-3 mb-4 p-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(212,160,23,0.12)",
                    border: "0.5px solid rgba(212,160,23,0.25)",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A017"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {r}
                </p>
              </div>
            ))}

            <div
              className="p-4 rounded-2xl mt-2"
              style={{
                background: "rgba(212,160,23,0.06)",
                border: "1px solid rgba(212,160,23,0.2)",
              }}
            >
              <p
                className="font-display font-bold text-2xl mb-1"
                style={{ color: "#D4A017" }}
              >
                $80,000 MXN
              </p>
              <p
                className="text-xs font-light"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Tres pagos · Solo se paga cuando se ve resultado · 30 días de
                soporte incluidos
              </p>
            </div>
          </div>
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
