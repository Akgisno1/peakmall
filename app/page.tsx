"use client";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { Navbar } from "@/components/layout/Navbar";
import { SideProgress } from "@/components/layout/SideProgress";
// import { HeroSection } from "@/components/sections/HeroSection";
// ... import all sections

export default function DeckPage() {
  useSectionObserver();  // Auto-detect active section on scroll

  return (
    <main>
      <Navbar />
      <SideProgress />
      {/* <HeroSection />
      <WhySection />
      <RetailSection />
      <LuxurySection />
      <DiningSection />
      <AttractionsSection />
      <EventsSection />
      <CTASection /> */}
    </main>
  );
}