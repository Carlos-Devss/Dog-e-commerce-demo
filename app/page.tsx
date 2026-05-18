"use client";

import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedSection";
import TrustSection from "@/components/home/TrustSection";
import VetBanner from "@/components/home/VetBanner";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <TrustSection />
      <VetBanner />
    </main>
  );
}
