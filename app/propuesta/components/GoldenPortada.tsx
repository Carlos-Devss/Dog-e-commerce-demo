"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GoldenPortada() {
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // ── gather elements ──────────────────────────────────────────
    const tag = root.querySelector(".p-tag");
    const numWrap = root.querySelector(".p-num");
    const lineSvg = root.querySelector(".p-line-svg");
    const sub = root.querySelector(".p-sub");
    const heading = root.querySelector(".p-heading");
    const body = root.querySelector(".p-body");
    const tags = root.querySelector(".p-tags");
    const hint = root.querySelector(".p-hint");

    // ── set everything invisible before animating ────────────────
    gsap.set([tag, numWrap, lineSvg, sub, heading, body, tags, hint], {
      opacity: 0,
      y: 0,
    });
    gsap.set([numWrap, sub, heading, body, tags], { y: 32 });
    gsap.set(tag, { y: -16 });

    // ── line draw setup ──────────────────────────────────────────
    if (lineRef.current) {
      const len = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, {
        strokeDasharray: len,
        strokeDashoffset: len,
      });
    }

    // ── timeline ─────────────────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.15 });

    // tag drops in
    tl.to(tag, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });

    // counter + number wrapper rise
    tl.to(
      numWrap,
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.1"
    );

    // counter counts 0 → 70 simultaneously
    if (counterRef.current) {
      const obj = { val: 0 };
      tl.to(
        obj,
        {
          val: 70,
          duration: 1.8,
          ease: "power2.out",
          onUpdate() {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(obj.val).toString();
            }
          },
        },
        "<"
      );
    }

    // line draws itself
    if (lineRef.current) {
      tl.to(lineSvg, { opacity: 1, duration: 0.1 }, "<0.2");
      tl.to(
        lineRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      );
    }

    // sub + heading + body stagger in
    tl.to(
      sub,
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      "-=0.8"
    );
    tl.to(
      heading,
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      "-=0.4"
    );
    tl.to(
      body,
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      "-=0.35"
    );
    tl.to(
      tags,
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
      "-=0.3"
    );
    tl.to(hint, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex items-center px-16 lg:px-24 overflow-hidden"
      style={{ background: "#1A1A1A" }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(212,160,23,0.07) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle,rgba(212,160,23,0.09) 0%,transparent 65%)",
          transform: "translate(25%,-25%)",
        }}
      />

      {/* Glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle,rgba(212,160,23,0.04) 0%,transparent 70%)",
          transform: "translate(-30%,30%)",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full">
        {/* Tag */}
        <div
          className="p-tag slide-tag inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10"
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

        {/* Counter */}
        <div
          className="p-num flex items-end gap-0 mb-2"
          style={{ lineHeight: 1 }}
        >
          <span
            ref={counterRef}
            className="font-display font-black"
            style={{
              fontSize: "clamp(100px,13vw,160px)",
              color: "#D4A017",
              lineHeight: 1,
            }}
          >
            0
          </span>
          <span
            className="font-display font-black pb-4"
            style={{
              fontSize: "clamp(60px,8vw,100px)",
              color: "#D4A017",
              lineHeight: 1,
            }}
          >
            %
          </span>
        </div>

        {/* Animated gold SVG line */}
        <div
          className="p-line-svg mb-4"
          style={{ width: "100%", maxWidth: "540px" }}
        >
          <svg
            width="100%"
            height="10"
            viewBox="0 0 540 10"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              ref={lineRef}
              d="M0 5 Q135 1 270 6 Q405 1 540 5"
              stroke="#D4A017"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Sub under counter */}
        <p
          className="p-sub text-base font-light mb-8"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          del proceso de venta de GoldenDog puede correr solo
        </p>

        {/* Headline */}
        <h1
          className="p-heading font-display font-black leading-[1.04] tracking-tight mb-3"
          style={{ fontSize: "clamp(32px,4.5vw,54px)", color: "#fff" }}
        >
          El sistema que GoldenDog
          <br />
          necesita para{" "}
          <em className="not-italic" style={{ color: "#D4A017" }}>
            crecer
          </em>
        </h1>

        {/* Body */}
        <p
          className="p-body text-base font-light leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: "480px" }}
        >
          E-commerce + automatizaciones + canal distribuidores.
          <br />
          Un sistema que trabaja cuando tu equipo no puede.
        </p>

        {/* Tags row */}
        <div className="p-tags slide-cta flex gap-2 flex-wrap">
          {[
            { label: "$80,000 MXN", gold: true },
            { label: "5–6 semanas", gold: false },
            { label: "40 / 30 / 30", gold: false },
          ].map((t) => (
            <span
              key={t.label}
              className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg"
              style={
                t.gold
                  ? {
                      background: "rgba(212,160,23,0.12)",
                      color: "#A07810",
                      border: "0.5px solid rgba(212,160,23,0.25)",
                    }
                  : {
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.4)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                    }
              }
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="p-hint absolute bottom-5 left-16 lg:left-24 flex items-center gap-2.5"
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

      {/* Bg number */}
      <div
        className="absolute bottom-0 right-8 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "150px", color: "rgba(255,255,255,0.028)" }}
      >
        01
      </div>
    </div>
  );
}
