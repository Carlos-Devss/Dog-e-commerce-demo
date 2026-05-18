export default function GoldenPortada() {
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
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle,rgba(212,160,23,0.08) 0%,transparent 65%)",
          transform: "translate(25%,-25%)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <div
          className="slide-tag inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{
            background: "rgba(212,160,23,0.08)",
            border: "0.5px solid rgba(212,160,23,0.2)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#D4A017" }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.1em] uppercase"
            style={{ color: "#A07810" }}
          >
            Propuesta comercial · STRING para GoldenDog · 2025
          </span>
        </div>

        <div
          className="slide-heading font-display font-black leading-none mb-2"
          style={{ fontSize: "clamp(80px,11vw,140px)", color: "#D4A017" }}
        >
          70%
        </div>
        <div
          className="slide-line text-base font-light mb-6"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          del proceso de venta puede correr solo
        </div>

        <h1
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-3"
          style={{ fontSize: "clamp(34px,5vw,58px)", color: "#fff" }}
        >
          El sistema que GoldenDog
          <br />
          necesita para{" "}
          <em className="not-italic" style={{ color: "#D4A017" }}>
            crecer
          </em>
        </h1>

        <p
          className="slide-sub text-base font-light leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: "480px" }}
        >
          E-commerce + automatizaciones + canal distribuidores.
          <br />
          Un sistema que trabaja cuando tu equipo no puede.
        </p>

        <div className="slide-cta flex gap-2 flex-wrap">
          <span
            className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(212,160,23,0.12)",
              color: "#A07810",
              border: "0.5px solid rgba(212,160,23,0.25)",
            }}
          >
            $80,000 MXN
          </span>
          <span
            className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.4)",
              border: "0.5px solid rgba(255,255,255,0.1)",
            }}
          >
            5–6 semanas
          </span>
          <span
            className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.4)",
              border: "0.5px solid rgba(255,255,255,0.1)",
            }}
          >
            40 / 30 / 30
          </span>
        </div>
      </div>

      <div
        className="absolute bottom-5 left-16 lg:left-24 flex items-center gap-2.5"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        <div
          className="w-px h-8"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
        <span className="text-[10px] tracking-[0.15em] uppercase font-light">
          scroll para continuar
        </span>
      </div>
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(255,255,255,0.028)" }}
      >
        01
      </div>
    </div>
  );
}
