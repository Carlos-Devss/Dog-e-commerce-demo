"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { PRODUCTS } from "../../data/product";
import { useCartStore } from "@/store/cartStore";
import { TProductCategory, IProduct } from "@/types/product";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES: { label: string; value: TProductCategory | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Higiene", value: "higiene" },
  { label: "Entrenamiento", value: "entrenamiento" },
  { label: "Suplementos", value: "suplementos" },
  { label: "Accesorios", value: "accesorios" },
];

const SORT_OPTIONS = [
  { label: "Relevancia", value: "relevance" },
  { label: "Menor precio", value: "price-asc" },
  { label: "Mayor precio", value: "price-desc" },
  { label: "Nombre A–Z", value: "name-asc" },
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

const IconSearch = () => (
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
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconX = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

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

const IconGrid = () => (
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
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const IconList = () => (
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
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<
    TProductCategory | "todos"
  >("todos");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [addedId, setAddedId] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.querySelectorAll(".header-line"), {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== "todos") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [activeCategory, search, sort]);

  function handleAddToCart(product: IProduct) {
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
    <main className="min-h-screen bg-warm pt-16">
      {/* PAGE HEADER */}
      <div className="relative bg-ink overflow-hidden py-16 px-8 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl" />

        <div ref={headerRef} className="max-w-7xl mx-auto relative z-10">
          <p className="header-line text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
            Tienda
          </p>
          <h1 className="header-line font-display font-black text-4xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            Catálogo de <em className="not-italic text-gold">productos</em>
          </h1>
          <p className="header-line text-white/45 font-light text-base max-w-lg leading-relaxed">
            Higiene, entrenamiento y bienestar animal. Fabricación mexicana con
            25 años de experiencia.
          </p>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="sticky top-16 z-30 bg-warm/95 backdrop-blur-md border-b border-warm-3 px-8 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
              <IconSearch />
            </span>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-warm-3 rounded-xl pl-10 pr-9 py-2.5 text-sm text-ink placeholder:text-muted/60 outline-none focus:border-gold/50 transition-all duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors"
              >
                <IconX />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Category filters */}
            <div className="flex gap-1.5 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "bg-ink text-warm border-ink"
                      : "bg-white text-muted border-warm-3 hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs font-semibold text-ink bg-white border border-warm-3 rounded-xl px-3 py-2 outline-none focus:border-gold/50 transition-all duration-200 cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>

            {/* View mode */}
            <div className="flex gap-1 bg-white border border-warm-3 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink"
                }`}
                aria-label="Vista cuadrícula"
              >
                <IconGrid />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink"
                }`}
                aria-label="Vista lista"
              >
                <IconList />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-10">
        {/* Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted font-light">
            <span className="font-semibold text-ink">{filtered.length}</span>{" "}
            {filtered.length === 1
              ? "producto encontrado"
              : "productos encontrados"}
            {search && (
              <span className="ml-1">
                para <span className="font-medium text-ink">"{search}"</span>
              </span>
            )}
          </p>
          {(search || activeCategory !== "todos") && (
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("todos");
              }}
              className="text-xs font-semibold text-muted hover:text-red-brand transition-colors duration-200 flex items-center gap-1"
            >
              <IconX /> Limpiar filtros
            </button>
          )}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <div className="w-16 h-16 rounded-full bg-warm-2 flex items-center justify-center mx-auto mb-4">
              <IconSearch />
            </div>
            <p className="font-display font-bold text-xl text-ink mb-2">
              Sin resultados
            </p>
            <p className="text-sm text-muted font-light">
              No encontramos productos para "{search}".
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("todos");
              }}
              className="mt-6 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200"
            >
              Ver todos los productos →
            </button>
          </motion.div>
        )}

        {/* GRID VIEW */}
        {viewMode === "grid" && filtered.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-warm-3 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-warm-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />

                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg ${
                          BADGE_STYLES[product.badge] ?? "bg-gold text-ink"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-warm-3 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 ${
                        wishlist.has(product.id)
                          ? "text-red-brand"
                          : "text-muted"
                      }`}
                      aria-label="Favorito"
                    >
                      <IconHeart filled={wishlist.has(product.id)} />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold-dark mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-sm text-ink leading-snug mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted font-light leading-relaxed mb-4 line-clamp-2">
                      {product.shortDesc}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display font-bold text-lg text-ink">
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
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
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
                              transition={{ duration: 0.15 }}
                            >
                              <IconCheck />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="plus"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              <IconPlus />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-10 overflow-hidden transition-all duration-300 bg-gradient-to-t from-gold/10 to-transparent flex items-end justify-center pb-2">
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
        )}

        {/* LIST VIEW */}
        {viewMode === "list" && filtered.length > 0 && (
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group bg-white rounded-2xl border border-warm-3 hover:border-gold/30 hover:shadow-card transition-all duration-300 flex overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative w-32 h-32 lg:w-48 lg:h-48 flex-shrink-0 overflow-hidden bg-warm-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="192px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold-dark mb-1">
                            {product.category}
                          </p>
                          <h3 className="font-semibold text-base text-ink leading-snug">
                            {product.name}
                          </h3>
                        </div>
                        {product.badge && (
                          <span
                            className={`flex-shrink-0 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg ${
                              BADGE_STYLES[product.badge] ?? "bg-gold text-ink"
                            }`}
                          >
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted font-light leading-relaxed mt-1 line-clamp-2">
                        {product.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-xl text-ink">
                          {formatPrice(product.price)}
                        </span>
                        {product.priceOld && (
                          <span className="text-sm text-muted line-through font-light">
                            {formatPrice(product.priceOld)}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`/producto/${product.slug}`}
                          className="text-xs font-semibold text-muted hover:text-ink transition-colors duration-200 px-3 py-2 rounded-xl border border-warm-3 hover:border-ink/20"
                        >
                          Ver detalles
                        </a>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                            addedId === product.id
                              ? "bg-gold text-ink"
                              : "bg-ink text-white hover:bg-gold hover:text-ink"
                          }`}
                        >
                          <AnimatePresence mode="wait">
                            {addedId === product.id ? (
                              <motion.span
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                              >
                                <IconCheck />
                              </motion.span>
                            ) : (
                              <motion.span
                                key="plus"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                              >
                                <IconPlus />
                              </motion.span>
                            )}
                          </AnimatePresence>
                          {addedId === product.id ? "Agregado" : "Agregar"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
