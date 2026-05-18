"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/catalogo" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Distribuidores", href: "/veterinario" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCartStore();
  const pathname = usePathname();
  const count = totalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú móvil al cambiar de página
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || pathname !== "/"
            ? "bg-warm/95 backdrop-blur-md shadow-card border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-red-brand flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 2-1 2-1" />
                <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-2-1-2-1" />
                <path d="M8 14v.5M16 14v.5" />
                <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
                <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.177C10.1 5.027 10.69 5 12 5c1.31 0 1.9.027 2.736.07" />
              </svg>
            </div>
            <span
              className={`font-display font-bold text-xl tracking-tight transition-colors duration-200 ${
                scrolled || pathname !== "/" ? "text-ink" : "text-white"
              }`}
            >
              Golden<span className="text-gold">Dog</span>
            </span>
          </Link>

          {/* NAV LINKS — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative group ${
                    scrolled || pathname !== "/"
                      ? active
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                      : active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Canal Vet badge */}
            <Link
              href="/veterinario"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-gold-dark bg-gold/10 border border-gold/20 rounded-full px-3 py-1.5 hover:bg-gold/20 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Canal Vet
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                scrolled || pathname !== "/"
                  ? "text-ink hover:bg-warm-2"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir carrito"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-brand text-white text-[10px] font-bold flex items-center justify-center"
                >
                  {count}
                </motion.span>
              )}
            </button>

            {/* CTA */}
            <Link
              href="/catalogo"
              className="hidden sm:flex items-center gap-1.5 bg-ink text-warm text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gold hover:text-ink transition-all duration-200"
            >
              Ver tienda
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                scrolled || pathname !== "/"
                  ? "hover:bg-warm-2 text-ink"
                  : "hover:bg-white/10 text-white"
              }`}
              aria-label="Menú"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-warm border-b border-gold/10 shadow-card md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium py-3 border-b border-warm-3 last:border-0 transition-colors ${
                      active
                        ? "text-ink font-semibold"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {active && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-2 mb-0.5" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/veterinario"
                className="mt-3 text-center text-sm font-semibold text-gold-dark bg-gold/10 border border-gold/20 rounded-xl py-3"
              >
                Canal Veterinario
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
