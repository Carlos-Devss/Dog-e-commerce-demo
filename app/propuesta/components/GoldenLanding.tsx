"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoldenPortada from "./GoldenPortada";
import GoldenProblema from "./GoldenProblema";
import GoldenOpciones from "./GoldenOpciones";
import GoldenAntes from "./GoldenAntes";
import GoldenInversion from "./GoldenInversion";
import { GoldenEntregables, GoldenTimeline, GoldenCTA } from "./GoldenSlides";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  { id: "portada", Component: GoldenPortada },
  { id: "problema", Component: GoldenProblema },
  { id: "opciones", Component: GoldenOpciones },
  { id: "antes", Component: GoldenAntes },
  { id: "entregables", Component: GoldenEntregables },
  { id: "timeline", Component: GoldenTimeline },
  { id: "inversion", Component: GoldenInversion },
  { id: "cta", Component: GoldenCTA },
];

const TOTAL = SLIDES.length;
// Total scroll distance = (TOTAL - 1) viewports worth of scrolling
// Each slide gets one full viewport height to scroll through
const VH_PER_SLIDE = 100;

const LABELS = [
  "01 · Portada",
  "02 · El problema",
  "03 · Las opciones",
  "04 · Antes / Después",
  "05 · Entregables",
  "06 · Timeline",
  "07 · Inversión",
  "08 · Confirmar",
];

export default function GoldenLanding() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animatedSlides = useRef(new Set<number>());
  const progressRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let ctx: gsap.Context;

    const init = () => {
      ctx = gsap.context(() => {
        const track = trackRef.current;
        if (!track) return;

        const slides = Array.from(track.querySelectorAll(".golden-slide"));

        // hide all except first
        slides.forEach((slide, i) => {
          if (i === 0) return;
          gsap.set(getAnimatables(slide as HTMLElement), { opacity: 0, y: 44 });
        });

        // animate hero immediately
        animateSlide(slides[0] as HTMLElement);
        animatedSlides.current.add(0);

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const totalDist = (TOTAL - 1) * vw;
        // scroll space = TOTAL viewports, but we only need TOTAL-1 to scroll through
        // end = total scroll space minus one viewport (the last one stays visible)
        const scrollEnd = (TOTAL - 1) * vh;

        gsap.to(track, {
          x: -totalDist,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: false,
            scrub: 0.8,
            start: "top top",
            end: `+=${scrollEnd}`,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const idx = Math.min(
                Math.floor(self.progress * TOTAL),
                TOTAL - 1
              );

              if (!animatedSlides.current.has(idx)) {
                animatedSlides.current.add(idx);
                animateSlide(slides[idx] as HTMLElement);
              }

              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }

              dotRefs.current.forEach((dot, i) => {
                if (!dot) return;
                dot.style.background =
                  i === idx ? "#D4A017" : "rgba(255,255,255,0.2)";
                dot.style.width = i === idx ? "20px" : "6px";
                dot.style.opacity = i === idx ? "1" : "0.5";
              });

              if (labelRef.current) labelRef.current.textContent = LABELS[idx];
            },
          },
        });
      }, wrapperRef);
    };

    const t = setTimeout(init, 150);

    return () => {
      clearTimeout(t);
      ctx?.revert();
      animatedSlides.current.clear();
    };
  }, [mounted]);

  // Total height of the wrapper = TOTAL viewports
  // This gives exactly one full viewport per slide to scroll through
  const wrapperHeight = mounted
    ? `${TOTAL * window.innerHeight}px`
    : `${TOTAL * 100}vh`;

  return (
    <>
      {/* ── TOP BAR ── */}
      <div
        className="fixed left-0 right-0 z-50 flex items-center justify-between px-6"
        style={{
          top: 0,
          height: "44px",
          background: "rgba(26,26,26,0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: "#E02020" }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 2-1 2-1" />
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-2-1-2-1" />
              <path d="M8 14v.5M16 14v.5" />
              <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.177C10.1 5.027 10.69 5 12 5c1.31 0 1.9.027 2.736.07" />
            </svg>
          </div>
          <span
            className="font-display font-bold text-sm"
            style={{ color: "#fff" }}
          >
            Golden<span style={{ color: "#D4A017" }}>Dog</span>
            <span
              className="font-sans font-light text-xs ml-2"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              × STRING
            </span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {LABELS.map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              style={{
                display: "inline-block",
                height: "5px",
                width: i === 0 ? "20px" : "6px",
                borderRadius: "3px",
                background: i === 0 ? "#D4A017" : "rgba(255,255,255,0.2)",
                opacity: i === 0 ? 1 : 0.5,
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          ))}
        </div>

        <span
          ref={labelRef}
          className="text-[10px] font-light hidden sm:block"
          style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}
        >
          {LABELS[0]}
        </span>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div
        className="fixed left-0 right-0 z-50"
        style={{
          top: "44px",
          height: "1px",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            background: "#D4A017",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            transition: "none",
          }}
        />
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 pointer-events-none"
        style={{
          border: "0.5px solid rgba(255,255,255,0.1)",
          background: "rgba(26,26,26,0.8)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="text-[10px] font-mono uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Scroll
        </span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path
            d="M1 5h14M10 1l4 4-4 4"
            stroke="#D4A017"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── WRAPPER: total scroll height = TOTAL viewports ── */}
      <div
        ref={wrapperRef}
        style={{ height: wrapperHeight, marginTop: "45px" }}
      >
        <div
          className="sticky overflow-hidden"
          style={{ top: "45px", height: "calc(100vh - 45px)" }}
        >
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ height: "100%", width: `${TOTAL * 100}vw` }}
          >
            {SLIDES.map(({ id, Component }) => (
              <div
                key={id}
                className="golden-slide flex-shrink-0 overflow-hidden"
                style={{ width: "100vw", height: "100%" }}
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function animateSlide(slide: HTMLElement) {
  if (!slide) return;
  const els = getAnimatables(slide);
  if (!els.length) return;
  gsap.to(els, {
    opacity: 1,
    y: 0,
    stagger: 0.09,
    duration: 0.7,
    ease: "power3.out",
    overwrite: "auto",
  });
}

function getAnimatables(slide: HTMLElement): Element[] {
  const els: Element[] = [];
  const selectors = [
    ".slide-tag",
    ".slide-line",
    ".slide-heading",
    ".slide-sub",
    ".slide-item",
    ".slide-cta",
    ".slide-grid",
    ".slide-metric",
  ];
  selectors.forEach((sel) =>
    slide.querySelectorAll(sel).forEach((el) => els.push(el))
  );
  return els;
}
