export default function GoldenProblema() {
  const items = [
    {
      tag: "Captación",
      title: "Leads sin respuesta",
      desc: "Sin flujo automático. Un lead espera horas o no recibe respuesta nunca.",
    },
    {
      tag: "Canal B2B",
      title: "Distribuidores por WhatsApp",
      desc: "Sin portal, sin precios diferenciados, sin control ni escalabilidad.",
    },
    {
      tag: "Técnico",
      title: "WordPress con deuda",
      desc: "jQuery 2016, PHP en Apache. Cada plugin nuevo es un riesgo de seguridad.",
    },
    {
      tag: "Datos",
      title: "Sin métricas reales",
      desc: "GA4 instalado pero sin eventos. No saben qué producto vende más.",
    },
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
          El problema
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-3"
          style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#1A1A1A" }}
        >
          Así se escapa dinero
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            todos los días
          </em>
        </h2>

        <p
          className="slide-sub text-base font-light leading-relaxed mb-8"
          style={{ color: "#6B6560" }}
        >
          goldendog.mx hoy — lo que encontramos al analizar el sitio.
        </p>

        <div className="slide-grid grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5"
              style={{
                background: "#fff",
                border: "0.5px solid rgba(26,26,26,0.07)",
              }}
            >
              <span
                className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg mb-3"
                style={{
                  background: "rgba(224,32,32,0.08)",
                  color: "#B01818",
                  border: "0.5px solid rgba(224,32,32,0.15)",
                }}
              >
                {item.tag}
              </span>
              <p
                className="font-semibold text-sm mb-1.5"
                style={{ color: "#1A1A1A" }}
              >
                {item.title}
              </p>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "#6B6560" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="slide-line mt-6 pt-5"
          style={{ borderTop: "0.5px solid rgba(26,26,26,0.08)" }}
        >
          <p className="text-sm font-light" style={{ color: "#6B6560" }}>
            No es falta de demanda. Es falta de sistema — y tiene solución.
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(26,26,26,0.04)" }}
      >
        02
      </div>
    </div>
  );
}
