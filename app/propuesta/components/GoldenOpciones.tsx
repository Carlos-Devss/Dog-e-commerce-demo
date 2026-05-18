export default function GoldenOpciones() {
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
          Las opciones
        </p>

        <h2
          className="slide-heading font-display font-black leading-[1.04] tracking-tight mb-3"
          style={{ fontSize: "clamp(26px,3.8vw,46px)", color: "#fff" }}
        >
          Elige el sistema que
          <br />
          <em className="not-italic" style={{ color: "#D4A017" }}>
            necesita GoldenDog
          </em>
        </h2>

        <p
          className="slide-sub text-base font-light mb-8"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Cada nivel resuelve un problema distinto.
        </p>

        <div className="flex flex-col gap-3">
          {/* Glowup */}
          <div
            className="slide-item rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "0.5px solid rgba(255,255,255,0.05)",
              opacity: 0.45,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg mb-2"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.4)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Sin migración
                </span>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Glowup WordPress
                </p>
              </div>
              <p
                className="font-display font-bold text-xl"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                $25,000
              </p>
            </div>
            <p
              className="text-xs font-light px-3 py-2 rounded-xl"
              style={{
                color: "rgba(212,160,23,0.55)",
                background: "rgba(212,160,23,0.05)",
                border: "0.5px solid rgba(212,160,23,0.12)",
              }}
            >
              Resuelve el diseño, no el sistema. En 12 meses estarán aquí de
              nuevo.
            </p>
          </div>

          {/* N3 */}
          <div
            className="slide-item rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg mb-2"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    color: "#065F46",
                    border: "0.5px solid rgba(16,185,129,0.2)",
                  }}
                >
                  Migración completa
                </span>
                <p
                  className="font-semibold text-base"
                  style={{ color: "#fff" }}
                >
                  N3 — Migración a Next.js
                </p>
                <p
                  className="text-xs font-light mt-1"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Next.js + Supabase + Canal distribuidores básico · 4–5 semanas
                </p>
              </div>
              <p
                className="font-display font-bold text-2xl ml-4 flex-shrink-0"
                style={{ color: "#fff" }}
              >
                $50,000
              </p>
            </div>
          </div>

          {/* N4 */}
          <div
            className="slide-item relative overflow-hidden rounded-2xl p-5"
            style={{
              background: "rgba(212,160,23,0.05)",
              border: "2px solid rgba(212,160,23,0.4)",
            }}
          >
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle,rgba(212,160,23,0.08) 0%,transparent 70%)",
                transform: "translate(30%,-30%)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg mb-2"
                    style={{
                      background: "rgba(212,160,23,0.12)",
                      color: "#A07810",
                      border: "0.5px solid rgba(212,160,23,0.25)",
                    }}
                  >
                    ⭐ Recomendado · máximo retorno
                  </span>
                  <p
                    className="font-display font-bold text-xl"
                    style={{ color: "#fff" }}
                  >
                    N4 — Sistema Automatizado
                  </p>
                  <p
                    className="text-xs font-light mt-1"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Todo lo del N3 + Make + 360dialog + panel de métricas · 5–6
                    semanas
                  </p>
                </div>
                <p
                  className="font-display font-black text-3xl ml-4 flex-shrink-0"
                  style={{ color: "#D4A017" }}
                >
                  $80,000
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {[
                  "Next.js",
                  "Supabase",
                  "Make",
                  "WhatsApp 360d",
                  "MercadoPago",
                  "Stripe",
                  "Canal B2B",
                  "Métricas",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-xs font-light"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#D4A017" }}
                    />
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
