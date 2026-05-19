"use client";

export default function GoldenProblema() {
  const items = [
    {
      tag: "Captación",
      title: "Leads sin respuesta",
      desc: "Sin flujo automático. Un lead espera horas o no recibe respuesta nunca.",
      new: false,
    },
    {
      tag: "Canal B2B",
      title: "Distribuidores por WhatsApp",
      desc: "Sin portal, sin precios diferenciados, sin control ni escalabilidad.",
      new: false,
    },
    {
      tag: "Técnico",
      title: "WordPress con deuda",
      desc: "jQuery 2016, PHP en Apache. Cada plugin nuevo es un riesgo de seguridad.",
      new: false,
    },
    {
      tag: "Datos",
      title: "Sin métricas reales",
      desc: "GA4 instalado pero sin eventos. No saben qué producto vende más.",
      new: false,
    },
    {
      tag: "Ventas perdidas",
      title: "Sin carrito abandonado",
      desc: "Pierden clientes que casi compraron. Sin sistema de recuperación, ese dinero se va para siempre.",
      new: true,
    },
    {
      tag: "Canal Vet",
      title: "Canal veterinario invisible",
      desc: "Sus mejores clientes B2B no tienen portal propio. Compran por teléfono o no compran.",
      new: true,
    },
    {
      tag: "Diseño",
      title: "Identidad genérica",
      desc: "WordPress con temas y plugins = diseño igual al de miles de tiendas. Imposible diferenciarse.",
      new: true,
    },
    {
      tag: "Futuro",
      title: "Sin escalabilidad real",
      desc: "WordPress tiene un techo técnico claro. Cuando GoldenDog crezca, el sistema no aguanta.",
      new: true,
    },
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
          El problema
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-2"
          style={{ fontSize: "clamp(24px,3.5vw,42px)", color: "#1A1A1A" }}
        >
          Así se escapa dinero
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            todos los días
          </em>
        </h2>

        <p
          className="slide-sub text-sm font-light leading-relaxed mb-5"
          style={{ color: "#6B6560" }}
        >
          goldendog.mx hoy — lo que encontramos al analizar el sitio.
        </p>

        <div className="slide-grid grid grid-cols-4 gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-4"
              style={{
                background: item.new ? "rgba(212,160,23,0.04)" : "#fff",
                border: item.new
                  ? "0.5px solid rgba(212,160,23,0.2)"
                  : "0.5px solid rgba(26,26,26,0.07)",
              }}
            >
              <span
                className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-1 rounded-lg mb-2.5"
                style={
                  item.new
                    ? {
                        background: "rgba(212,160,23,0.1)",
                        color: "#A07810",
                        border: "0.5px solid rgba(212,160,23,0.2)",
                      }
                    : {
                        background: "rgba(224,32,32,0.08)",
                        color: "#B01818",
                        border: "0.5px solid rgba(224,32,32,0.15)",
                      }
                }
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
          className="slide-line mt-4 pt-4"
          style={{ borderTop: "0.5px solid rgba(26,26,26,0.08)" }}
        >
          <p className="text-sm font-light" style={{ color: "#6B6560" }}>
            No es falta de demanda. Es falta de sistema — y WordPress no puede
            resolverlo.
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
