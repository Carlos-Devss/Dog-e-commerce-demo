"use client";

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

const COMPARISONS = [
  {
    area: "Clientes nuevos",
    before:
      "Un cliente llena el formulario o escribe por WhatsApp. Alguien del equipo tiene que responder manualmente — a veces horas después. El cliente ya compró en otro lado.",
    after:
      "El sistema responde en menos de 2 minutos con información del producto, precio y enlace para comprar. Sin que nadie haga nada.",
  },
  {
    area: "Distribuidores",
    before:
      "Un distribuidor llama o escribe por WhatsApp para saber precios o hacer un pedido. El equipo tiene que buscar la lista, confirmar stock y responder uno por uno.",
    after:
      "El distribuidor entra a su portal propio, ve sus precios especiales, hace su pedido y recibe confirmación automática. Nadie del equipo interviene.",
  },
  {
    area: "Ventas perdidas",
    before:
      "Un cliente agrega productos al carrito pero no compra. GoldenDog no sabe quién fue, no puede recuperarlos. Esa venta se pierde para siempre.",
    after:
      "El sistema detecta el carrito abandonado y envía un mensaje automático al cliente. Se recuperan ventas que antes simplemente desaparecían.",
  },
  {
    area: "Pagos y pedidos",
    before:
      "El cliente paga por transferencia, manda el comprobante por WhatsApp y alguien tiene que validarlo, confirmar el pedido y avisar al almacén — todo a mano.",
    after:
      "El cliente paga con tarjeta o transferencia en el sitio. El pedido se registra solo, el equipo recibe una notificación y el cliente recibe su confirmación en segundos.",
  },
  {
    area: "Información del negocio",
    before:
      "Nadie sabe con certeza qué productos venden más, qué días hay más visitas, o cuántos clientes vuelven a comprar. Las decisiones se toman por intuición.",
    after:
      "Un panel muestra en tiempo real qué productos generan más dinero, cuántos clientes nuevos llegan cada día y qué campañas funcionan mejor.",
  },
];

export default function GoldenAntes() {
  return (
    <div
      className="relative w-full h-full flex items-center px-16 lg:px-24 overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      <div className="relative z-10 w-full max-w-6xl">
        <p
          className="slide-tag text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
          style={{ color: "#D4A017" }}
        >
          Antes / Después
        </p>

        <div className="flex items-end justify-between mb-6">
          <h2
            className="slide-heading font-display font-black leading-[1.04] tracking-tight"
            style={{ fontSize: "clamp(24px,3.5vw,42px)", color: "#1A1A1A" }}
          >
            Cómo cambia el día a día
            <br />
            de{" "}
            <em className="not-italic" style={{ color: "#D4A017" }}>
              GoldenDog
            </em>
          </h2>
          <div className="flex-shrink-0 ml-8 text-right">
            <p
              className="font-display font-black text-3xl"
              style={{ color: "#D4A017" }}
            >
              70%
            </p>
            <p className="text-xs font-light" style={{ color: "#6B6560" }}>
              del proceso corre solo
            </p>
          </div>
        </div>

        {/* Column headers */}
        <div
          className="slide-grid grid mb-2"
          style={{ gridTemplateColumns: "140px 1fr 1fr" }}
        >
          <div />
          <div className="px-4">
            <span
              className="text-[10px] font-bold tracking-[0.15em] uppercase"
              style={{ color: "#E02020" }}
            >
              Hoy — sin el sistema
            </span>
          </div>
          <div className="px-4">
            <span
              className="text-[10px] font-bold tracking-[0.15em] uppercase"
              style={{ color: "#D4A017" }}
            >
              Con el sistema de $80,000
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2">
          {COMPARISONS.map((row, i) => (
            <div
              key={row.area}
              className="slide-item grid items-start gap-0 rounded-2xl overflow-hidden"
              style={{
                gridTemplateColumns: "140px 1fr 1fr",
                border: "0.5px solid rgba(26,26,26,0.07)",
              }}
            >
              {/* Area label */}
              <div
                className="px-4 py-3 flex items-center h-full"
                style={{
                  background: "#fff",
                  borderRight: "0.5px solid rgba(26,26,26,0.06)",
                }}
              >
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#1A1A1A" }}
                >
                  {row.area}
                </span>
              </div>

              {/* Before */}
              <div
                className="px-4 py-3 flex items-start gap-2.5"
                style={{
                  background: "#fff",
                  borderRight: "0.5px solid rgba(26,26,26,0.06)",
                }}
              >
                <Cross />
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "#6B6560" }}
                >
                  {row.before}
                </p>
              </div>

              {/* After */}
              <div
                className="px-4 py-3 flex items-start gap-2.5"
                style={{ background: "rgba(212,160,23,0.03)" }}
              >
                <Check />
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "#1A1A1A" }}
                >
                  {row.after}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="slide-line mt-5 pt-4 flex items-center justify-between"
          style={{ borderTop: "0.5px solid rgba(26,26,26,0.08)" }}
        >
          <p
            className="font-display font-bold text-lg"
            style={{ color: "#1A1A1A" }}
          >
            &ldquo;El equipo de GoldenDog deja de operar ventas
            <br />y empieza a crecer el negocio.&rdquo;
          </p>
          <div className="flex-shrink-0 ml-8 text-right">
            <p className="text-xs font-light" style={{ color: "#6B6560" }}>
              Inversión total
            </p>
            <p
              className="font-display font-black text-2xl"
              style={{ color: "#1A1A1A" }}
            >
              $80,000{" "}
              <span
                className="text-base font-sans font-light"
                style={{ color: "#6B6560" }}
              >
                MXN
              </span>
            </p>
          </div>
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
