"use client";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { Navbar } from "@/components/layout/Navbar";
import { SideProgress } from "@/components/layout/SideProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { RetailSection } from "@/components/sections/RetailSection";
import { LuxurySection } from "@/components/sections/LuxurySection";
import { DiningSection } from "@/components/sections/DiningSection";
import { AttractionsSection } from "@/components/sections/AttractionsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function DeckPage() {
  useSectionObserver(); // Auto-detect active section on scroll

  return (
    <main>
      <Navbar />
      <SideProgress />
      <HeroSection />
      <WhySection />
      <RetailSection />
      <LuxurySection />
      <DiningSection />
      <AttractionsSection />
      <EventsSection />
      <CTASection />
    </main>
  );
}
