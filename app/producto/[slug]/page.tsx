"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS } from "../../../data/product";
import { useCartStore } from "@/store/cartStore";

const BENEFITS = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Calidad garantizada",
    desc: "Formulación probada y aprobada por veterinarios mexicanos.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Hecho en México",
    desc: "25 años de fabricación nacional con estándares internacionales.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Envío rápido",
    desc: "Entrega en 48h a todo México. Gratis en pedidos +$799.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Devolución sin costo",
    desc: "30 días para devolver si no estás satisfecho.",
  },
];

const GALLERY_EXTRAS = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&q=80&fit=crop",
];

const BADGE_STYLES: Record<string, string> = {
  "Más vendido": "bg-gold text-ink",
  Nuevo: "bg-ink text-gold",
  "Vet Choice": "bg-red-brand text-white",
  Oferta: "bg-gold text-ink",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) notFound();

  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCartStore();

  const gallery = [
    product.image,
    ...GALLERY_EXTRAS.filter((img) => img !== product.image).slice(0, 3),
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (infoRef.current) {
        gsap.from(infoRef.current.querySelectorAll(".info-line"), {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
      if (galleryRef.current) {
        gsap.from(galleryRef.current, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-warm pt-16">
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5">
        <nav className="flex items-center gap-2 text-xs text-muted font-light flex-wrap">
          <a href="/" className="hover:text-ink transition-colors">
            Inicio
          </a>
          <span>/</span>
          <a href="/catalogo" className="hover:text-ink transition-colors">
            Catálogo
          </a>
          <span>/</span>
          <span className="text-ink font-medium capitalize">
            {product.category}
          </span>
          <span>/</span>
          <span className="text-ink font-medium line-clamp-1">
            {product.name}
          </span>
        </nav>
      </div>

      {/* PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT — Gallery */}
          <div ref={galleryRef}>
            {/* Main image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-warm-2 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[activeImg]}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {product.badge && (
                <span
                  className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-xl ${
                    BADGE_STYLES[product.badge] ?? "bg-gold text-ink"
                  }`}
                >
                  {product.badge}
                </span>
              )}

              <button
                onClick={() => setWishlist(!wishlist)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 border border-warm-3 flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  wishlist ? "text-red-brand" : "text-muted"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={wishlist ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === i
                      ? "border-gold shadow-gold"
                      : "border-transparent hover:border-warm-3"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Vista ${i + 1}`}
                    fill
                    sizes="100px"
                    className="object-cover object-center"
                  />
                  {activeImg === i && (
                    <div className="absolute inset-0 bg-gold/10" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div ref={infoRef} className="flex flex-col justify-start pt-2">
            <div className="info-line">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-2">
                {product.category}
              </p>
              <h1 className="font-display font-black text-3xl lg:text-4xl text-ink tracking-tight leading-tight mb-3">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="info-line flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#D4A017"
                    stroke="#D4A017"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">4.9</span>
              <span className="text-sm text-muted font-light">
                (128 reseñas)
              </span>
            </div>

            {/* Price */}
            <div className="info-line flex items-baseline gap-3 mb-6 pb-6 border-b border-warm-3">
              <span className="font-display font-black text-4xl text-ink">
                {formatPrice(product.price)}
              </span>
              {product.priceOld && (
                <>
                  <span className="text-lg text-muted line-through font-light">
                    {formatPrice(product.priceOld)}
                  </span>
                  <span className="text-sm font-bold text-red-brand bg-red-brand/8 px-2 py-0.5 rounded-lg">
                    {Math.round((1 - product.price / product.priceOld) * 100)}%
                    OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <div className="info-line mb-6">
              <p className="text-muted font-light text-base leading-relaxed">
                {product.shortDesc}
              </p>
            </div>

            {/* Quantity + Add to cart */}
            <div className="info-line flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center gap-0 bg-warm-2 rounded-xl border border-warm-3 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-warm-3 transition-colors duration-150 text-xl font-light"
                >
                  −
                </button>
                <span className="w-10 text-center font-semibold text-sm text-ink">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-warm-3 transition-colors duration-150 text-xl font-light"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-xl transition-all duration-200 ${
                  added
                    ? "bg-gold text-ink"
                    : "bg-ink text-white hover:bg-gold hover:text-ink hover:shadow-gold"
                }`}
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Agregado al carrito
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                      Agregar al carrito
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Shipping note */}
            <div className="info-line flex items-center gap-2 text-xs text-muted font-light mb-8 pb-8 border-b border-warm-3">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              Envío gratis en pedidos +$799 · Entrega en 48h a todo México
            </div>

            {/* Benefits */}
            <div className="info-line grid grid-cols-2 gap-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink mb-0.5">
                      {b.title}
                    </p>
                    <p className="text-xs text-muted font-light leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-2">
                  También te puede gustar
                </p>
                <h2 className="font-display font-bold text-2xl text-ink tracking-tight">
                  Productos relacionados
                </h2>
              </div>
              <a
                href="/catalogo"
                className="text-sm font-semibold text-muted hover:text-ink transition-colors duration-200"
              >
                Ver todos →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={`/producto/${p.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-warm-3 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative h-44 overflow-hidden bg-warm-2">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold-dark mb-1">
                      {p.category}
                    </p>
                    <p className="font-semibold text-sm text-ink leading-snug mb-2 line-clamp-2">
                      {p.name}
                    </p>
                    <p className="font-display font-bold text-lg text-ink">
                      {formatPrice(p.price)}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
