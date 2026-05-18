"use client";

export default function GoldenInversion() {
  const payments = [
    {
      tag: "Primer pago · 40%",
      amount: "$32,000",
      desc: "Al firmar el contrato.\nArranca el proyecto.",
      featured: true,
    },
    {
      tag: "Segundo pago · 30%",
      amount: "$24,000",
      desc: "Al aprobar la\nRevisión 2 (semana 4).",
      featured: false,
    },
    {
      tag: "Tercer pago · 30%",
      amount: "$24,000",
      desc: "Al go live del sitio\nen producción.",
      featured: false,
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
        className="absolute top-1/2 right-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle,rgba(212,160,23,0.06) 0%,transparent 70%)",
          transform: "translate(30%,-50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Inversión
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-3"
          style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#fff" }}
        >
          $80,000 MXN en tres pagos.
        </h2>

        <p
          className="slide-sub text-base font-light mb-10"
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: "480px" }}
        >
          Se paga cuando se ve resultado — no por fechas en el calendario.
        </p>

        <div className="slide-grid grid grid-cols-3 gap-4 mb-6">
          {payments.map((p) => (
            <div
              key={p.tag}
              className="rounded-2xl p-5 text-center"
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
              <p
                className="text-[10px] font-bold tracking-wider uppercase mb-3"
                style={{
                  color: p.featured ? "#D4A017" : "rgba(255,255,255,0.3)",
                }}
              >
                {p.tag}
              </p>
              <p
                className="font-display font-black text-3xl mb-3"
                style={{ color: p.featured ? "#D4A017" : "#fff" }}
              >
                {p.amount}
              </p>
              <p
                className="text-xs font-light leading-relaxed whitespace-pre-line"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="slide-item flex items-start gap-4 rounded-xl px-5 py-4"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.08)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 mt-0.5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Datos migrados. SEO preservado. Sin downtime.
            </p>
            <p
              className="text-sm font-light"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              El sitio actual permanece activo hasta que el nuevo esté 100%
              aprobado.
            </p>
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
