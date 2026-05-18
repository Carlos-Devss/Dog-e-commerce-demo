"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { PRODUCTS } from "../../data/product";
import { useCartStore } from "@/store/cartStore";
import { TProductCategory } from "@/types/product";

gsap.registerPlugin(ScrollTrigger);

const FILTER_TABS: { label: string; value: TProductCategory | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Higiene", value: "higiene" },
  { label: "Entrenamiento", value: "entrenamiento" },
  { label: "Suplementos", value: "suplementos" },
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

const IconHeart = ({ filled }: { filled: boolean }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const IconPlus = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconCheck = () => (
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
);

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<TProductCategory | "todos">(
    "todos"
  );
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCartStore();

  const filtered =
    activeFilter === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (titleRef.current) {
          gsap.from(titleRef.current.querySelectorAll(".reveal-line"), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      }, sectionRef);
      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  function handleAddToCart(product: (typeof PRODUCTS)[0]) {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  }

  function toggleWishlist(id: string) {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <section
      ref={sectionRef}
      id="productos"
      className="relative bg-warm-2 py-24 px-8 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-gold/6 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div ref={titleRef} className="overflow-hidden">
            <p className="reveal-line text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
              Más vendidos
            </p>
            <h2 className="reveal-line font-display font-bold text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
              Productos destacados
            </h2>
            <p className="reveal-line text-muted font-light text-base mt-3 max-w-md leading-relaxed">
              Selección premium de higiene, entrenamiento y bienestar para tu
              mascota.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === tab.value
                    ? "bg-ink text-warm border-ink"
                    : "bg-transparent text-muted border-warm-3 hover:border-ink/30 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-warm-3 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-warm-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />

                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg ${
                        BADGE_STYLES[product.badge] ?? "bg-gold text-ink"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-warm-3 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 ${
                      wishlist.has(product.id) ? "text-red-brand" : "text-muted"
                    }`}
                    aria-label="Agregar a favoritos"
                  >
                    <IconHeart filled={wishlist.has(product.id)} />
                  </button>

                  {/* Vet only */}
                  {product.isVetOnly && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-red-brand/10 border border-red-brand/20 rounded-full px-2.5 py-1">
                      <span className="w-1 h-1 rounded-full bg-red-brand" />
                      <span className="text-[10px] font-semibold text-red-brand tracking-wide">
                        Solo canal vet
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold-dark mb-1.5">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-sm text-ink leading-snug mb-1.5 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted font-light leading-relaxed mb-5 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Price + Add */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-xl text-ink">
                        {formatPrice(product.price)}
                      </span>
                      {product.priceOld && (
                        <span className="text-xs text-muted line-through font-light">
                          {formatPrice(product.priceOld)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                        addedId === product.id
                          ? "bg-gold text-ink scale-110"
                          : "bg-ink text-white hover:bg-gold hover:text-ink hover:scale-105"
                      }`}
                      aria-label="Agregar al carrito"
                    >
                      <AnimatePresence mode="wait">
                        {addedId === product.id ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconCheck />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconPlus />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-11 overflow-hidden transition-all duration-300 bg-gradient-to-t from-gold/10 to-transparent flex items-end justify-center pb-2">
                  <a
                    href={`/producto/${product.slug}`}
                    className="text-xs font-semibold text-gold-dark hover:text-ink transition-colors duration-200"
                  >
                    Ver detalles →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-ink text-warm font-semibold text-sm px-8 py-4 rounded-xl hover:bg-gold hover:text-ink transition-all duration-200 shadow-card hover:shadow-gold"
          >
            Ver catálogo completo
            <span>→</span>
          </a>
          <p className="text-xs text-muted font-light mt-3">
            +47 productos disponibles · Envío gratis en pedidos +$799
          </p>
        </motion.div>
      </div>
    </section>
  );
}
