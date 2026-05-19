"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(price);
}

const IconX = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconTrash = () => (
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);

const IconMinus = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconPlus = () => (
  <svg
    width="12"
    height="12"
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

const IconCart = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-warm-3"
  >
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const IconShield = () => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconTruck = () => (
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
);

export default function CartDrawer() {
  const {
    items,
    isOpen,
    toggleCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCartStore();

  const total = totalPrice();
  const count = totalItems();
  const FREE_SHIPPING_THRESHOLD = 799;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const progressPct = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={toggleCart}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-warm flex flex-col shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-warm-3">
              <div className="flex items-center gap-2">
                <h2 className="font-display font-bold text-xl text-ink tracking-tight">
                  Tu carrito
                </h2>
                {count > 0 && (
                  <span className="w-6 h-6 rounded-full bg-ink text-warm text-xs font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs font-medium text-muted hover:text-red-brand transition-colors duration-200 px-2 py-1"
                  >
                    Vaciar
                  </button>
                )}
                <button
                  onClick={toggleCart}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-ink hover:bg-warm-2 transition-all duration-200"
                  aria-label="Cerrar carrito"
                >
                  <IconX />
                </button>
              </div>
            </div>

            {/* FREE SHIPPING PROGRESS */}
            {items.length > 0 && (
              <div className="px-6 py-4 bg-white border-b border-warm-3">
                {remaining > 0 ? (
                  <p className="text-xs text-muted font-light mb-2">
                    Te faltan{" "}
                    <span className="font-semibold text-ink">
                      {formatPrice(remaining)}
                    </span>{" "}
                    para envío gratis
                  </p>
                ) : (
                  <p className="text-xs font-semibold text-emerald-600 mb-2 flex items-center gap-1">
                    <IconTruck />
                    ¡Tienes envío gratis!
                  </p>
                )}
                <div className="h-1.5 bg-warm-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gold"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            )}

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                /* Empty state */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex flex-col items-center justify-center h-full gap-4 px-8 text-center"
                >
                  <IconCart />
                  <div>
                    <p className="font-display font-bold text-lg text-ink mb-1">
                      Tu carrito está vacío
                    </p>
                    <p className="text-sm text-muted font-light leading-relaxed">
                      Agrega productos desde la tienda o el catálogo.
                    </p>
                  </div>
                  <button
                    onClick={toggleCart}
                    className="mt-2 bg-ink text-warm font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gold hover:text-ink transition-all duration-200"
                  >
                    Explorar tienda →
                  </button>
                </motion.div>
              ) : (
                <ul className="px-6 py-4 flex flex-col gap-4">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{
                          opacity: 0,
                          x: -30,
                          height: 0,
                          marginBottom: 0,
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-4 bg-white rounded-2xl p-4 border border-warm-3"
                      >
                        {/* Image */}
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-warm-2 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-cover object-center"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gold-dark mb-0.5">
                            {item.category}
                          </p>
                          <p className="font-semibold text-sm text-ink leading-snug line-clamp-2 mb-2">
                            {item.name}
                          </p>

                          <div className="flex items-center justify-between">
                            {/* Quantity controls */}
                            <div className="flex items-center gap-0 bg-warm-2 rounded-lg border border-warm-3 overflow-hidden">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink hover:bg-warm-3 transition-colors duration-150"
                                aria-label="Reducir"
                              >
                                <IconMinus />
                              </button>
                              <span className="w-7 text-center text-xs font-semibold text-ink">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink hover:bg-warm-3 transition-colors duration-150"
                                aria-label="Aumentar"
                              >
                                <IconPlus />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <p className="font-display font-bold text-base text-ink">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-[10px] text-muted font-light">
                                  {formatPrice(item.price)} c/u
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="self-start text-muted hover:text-red-brand transition-colors duration-200 p-1 rounded-lg hover:bg-red-brand/8 mt-0.5"
                          aria-label="Eliminar"
                        >
                          <IconTrash />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* FOOTER — summary + checkout */}
            {items.length > 0 && (
              <div className="border-t border-warm-3 bg-white px-6 py-6">
                {/* Summary */}
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted font-light">Subtotal</span>
                    <span className="font-medium text-ink">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted font-light">Envío</span>
                    <span
                      className={`font-medium ${
                        remaining === 0 ? "text-emerald-600" : "text-ink"
                      }`}
                    >
                      {remaining === 0 ? "Gratis" : formatPrice(99)}
                    </span>
                  </div>
                  <div className="h-px bg-warm-3 my-1" />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">Total</span>
                    <span className="font-display font-bold text-2xl text-ink">
                      {formatPrice(remaining === 0 ? total : total + 99)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button className="w-full bg-ink text-warm font-semibold text-sm py-4 rounded-xl hover:bg-gold hover:text-ink transition-all duration-200 shadow-card hover:shadow-gold mb-3">
                  Proceder al pago →
                </button>

                <button
                  onClick={toggleCart}
                  className="w-full text-sm font-medium text-muted hover:text-ink transition-colors duration-200 py-2"
                >
                  Seguir comprando
                </button>

                {/* Trust note */}
                <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-muted font-light">
                  <IconShield />
                  Pago seguro · SSL encriptado
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
