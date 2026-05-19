"use client";

const Shield = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A017"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Check = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A017"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PAYMENTS = [
  {
    tag: "Primer pago · 40%",
    amount: "$32,000",
    when: "Al firmar el contrato",
    detail:
      "Arranca el proyecto en 48 horas. Se agenda la primera reunión de arranque y se inicia el desarrollo.",
    featured: true,
  },
  {
    tag: "Segundo pago · 30%",
    amount: "$24,000",
    when: "Al ver y aprobar el sitio",
    detail:
      "GoldenDog revisa el sitio en ambiente de pruebas. Solo pagan cuando están conformes con lo que ven.",
    featured: false,
  },
  {
    tag: "Tercer pago · 30%",
    amount: "$24,000",
    when: "Al publicar el sitio",
    detail:
      "El sitio sale a producción en goldendog.mx. Este pago marca la entrega oficial del proyecto.",
    featured: false,
  },
];

const GUARANTEES = [
  "Sus productos, clientes y pedidos actuales se migran sin pérdida de información",
  "El sitio actual sigue funcionando hasta que el nuevo esté 100% aprobado — sin interrupciones",
  "Su posición en Google (SEO) se preserva con redirecciones correctas",
  "30 días de soporte incluidos después de la entrega — cualquier ajuste sin costo",
];

export default function GoldenInversion() {
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
        className="absolute top-1/2 right-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle,rgba(212,160,23,0.06) 0%,transparent 70%)",
          transform: "translate(30%,-50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Inversión
        </p>

        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-2"
              style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#fff" }}
            >
              $80,000 MXN.
              <br />
              <em className="not-italic" style={{ color: "#D4A017" }}>
                Se paga cuando se ve resultado.
              </em>
            </h2>
            <p
              className="slide-sub text-sm font-light"
              style={{ color: "rgba(255,255,255,0.45)", maxWidth: "480px" }}
            >
              Tres pagos amarrados a entregables reales — no a fechas en el
              calendario. GoldenDog paga cuando está conforme con lo que ve.
            </p>
          </div>
        </div>

        <div className="slide-grid grid grid-cols-2 gap-5">
          {/* LEFT — payment cards */}
          <div className="flex flex-col gap-3">
            {PAYMENTS.map((p) => (
              <div
                key={p.tag}
                className="rounded-2xl p-5"
                style={
                  p.featured
                    ? {
                        background: "rgba(212,160,23,0.06)",
                        border: "2px solid rgba(212,160,23,0.4)",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "0.5px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p
                      className="text-[10px] font-bold tracking-wider uppercase mb-1"
                      style={{
                        color: p.featured ? "#D4A017" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {p.tag}
                    </p>
                    <p
                      className="font-display font-black text-2xl"
                      style={{ color: p.featured ? "#D4A017" : "#fff" }}
                    >
                      {p.amount}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-[10px] font-semibold flex-shrink-0 ml-3"
                    style={
                      p.featured
                        ? {
                            background: "rgba(212,160,23,0.15)",
                            color: "#D4A017",
                            border: "0.5px solid rgba(212,160,23,0.3)",
                          }
                        : {
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.4)",
                            border: "0.5px solid rgba(255,255,255,0.1)",
                          }
                    }
                  >
                    {p.when}
                  </div>
                </div>
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT — guarantees + timeline */}
          <div className="flex flex-col gap-4">
            {/* Garantías */}
            <div
              className="slide-item rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                flex: 1,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield />
                <p
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Lo que está garantizado
                </p>
              </div>
              {GUARANTEES.map((g) => (
                <div key={g} className="flex items-start gap-2.5 mb-3">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(212,160,23,0.12)",
                      border: "0.5px solid rgba(212,160,23,0.25)",
                    }}
                  >
                    <Check />
                  </div>
                  <p
                    className="text-xs font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {g}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline resumen */}
            <div
              className="slide-item rounded-2xl p-5"
              style={{
                background: "rgba(212,160,23,0.04)",
                border: "0.5px solid rgba(212,160,23,0.15)",
              }}
            >
              <p
                className="text-[10px] font-bold tracking-wider uppercase mb-3"
                style={{ color: "#D4A017" }}
              >
                Tiempo de entrega
              </p>
              <div className="flex items-center gap-0">
                {[
                  { label: "Semanas 1–2", desc: "Diseño y desarrollo" },
                  { label: "Semanas 3–4", desc: "Automatizaciones" },
                  { label: "Semanas 5–6", desc: "Revisión y lanzamiento" },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center flex-1">
                    <div className="flex-1">
                      <p
                        className="text-[10px] font-semibold"
                        style={{ color: "#D4A017" }}
                      >
                        {step.label}
                      </p>
                      <p
                        className="text-[10px] font-light"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                    {i < 2 && (
                      <div
                        className="w-4 flex-shrink-0 text-center"
                        style={{
                          color: "rgba(212,160,23,0.3)",
                          fontSize: "16px",
                        }}
                      >
                        ›
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="mt-3 pt-3 flex items-center justify-between"
                style={{ borderTop: "0.5px solid rgba(212,160,23,0.15)" }}
              >
                <p
                  className="text-xs font-light"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Total estimado
                </p>
                <p className="text-sm font-semibold" style={{ color: "#fff" }}>
                  5 a 6 semanas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(255,255,255,0.028)" }}
      >
        07
      </div>
    </div>
  );
}
