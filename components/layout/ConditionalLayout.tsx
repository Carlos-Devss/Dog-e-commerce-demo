"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPropuesta = pathname?.startsWith("/propuesta");

  return (
    <>
      {!isPropuesta && <Navbar />}
      {!isPropuesta && <CartDrawer />}
      {children}
      {!isPropuesta && <Footer />}
    </>
  );
}
