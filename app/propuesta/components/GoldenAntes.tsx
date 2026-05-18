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

const Cross = () => (
  <div
    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
    style={{
      background: "rgba(224,32,32,0.08)",
      border: "0.5px solid rgba(224,32,32,0.18)",
    }}
  >
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E02020"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
);

export default function GoldenAntes() {
  const before = [
    "Lead llega → nadie responde → se pierde",
    "Distribuidor pide por WhatsApp → espera manual",
    "Pedido por transferencia → confirmación a mano",
    "Sin saber qué productos generan más ingresos",
    "Cada venta requiere intervención del equipo",
  ];
  const after = [
    "Lead llega → WhatsApp automático en < 2 min",
    "Distribuidor en su portal — nadie levanta el teléfono",
    "Pago en línea → confirmación automática",
    "Dashboard con métricas en tiempo real",
  ];

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
          Antes / Después
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-8"
          style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#1A1A1A" }}
        >
          Cómo cambia la operación
          <br />
          de{" "}
          <em className="not-italic" style={{ color: "#D4A017" }}>
            GoldenDog
          </em>
        </h2>

        <div className="slide-grid grid grid-cols-2 gap-5">
          <div
            className="rounded-2xl p-5"
            style={{
              background: "#fff",
              border: "0.5px solid rgba(26,26,26,0.07)",
            }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: "#E02020" }}
            >
              Hoy
            </p>
            {before.map((t) => (
              <div key={t} className="flex items-start gap-2.5 mb-2.5">
                <Cross />
                <span
                  className="text-sm font-light leading-snug"
                  style={{ color: "#6B6560" }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(212,160,23,0.04)",
              border: "0.5px solid rgba(212,160,23,0.2)",
            }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: "#D4A017" }}
            >
              Con el N4
            </p>
            {after.map((t) => (
              <div key={t} className="flex items-start gap-2.5 mb-2.5">
                <Check />
                <span
                  className="text-sm font-light leading-snug"
                  style={{ color: "#1A1A1A" }}
                >
                  {t}
                </span>
              </div>
            ))}
            <div
              className="flex items-baseline gap-2 mt-3 pt-3"
              style={{ borderTop: "0.5px solid rgba(212,160,23,0.15)" }}
            >
              <span
                className="font-display font-black text-2xl"
                style={{ color: "#D4A017" }}
              >
                70%
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#1A1A1A" }}
              >
                del proceso de venta corre solo
              </span>
            </div>
          </div>
        </div>

        <div
          className="slide-line mt-8 pt-6"
          style={{ borderTop: "0.5px solid rgba(26,26,26,0.08)" }}
        >
          <p
            className="font-display font-bold text-xl"
            style={{ color: "#1A1A1A" }}
          >
            "El equipo de GoldenDog se enfoca en lo que
            <br />
            ningún sistema puede hacer."
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(26,26,26,0.04)" }}
      >
        04
      </div>
    </div>
  );
}
