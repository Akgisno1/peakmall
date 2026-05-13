"use client";
import { useState } from "react";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ATTRACTIONS, ENTERTAINMENT_IMPACT } from "@/lib/data/attractions";
import { cn } from "@/lib/utils";

export function AttractionsSection() {
  const [activeAttraction, setActiveAttraction] = useState(ATTRACTIONS[0]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".attraction-headline",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#attractions", start: "top 65%" },
      },
    );

    gsap.fromTo(
      ".impact-card",
      { opacity: 0, scale: 0.95, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".impact-grid", start: "top 75%" },
      },
    );
  }, []);

  return (
    <SectionWrapper
      id="attractions"
      className="justify-center py-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-15"
          style={{ backgroundImage: "url('/images/attractions-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black" />
      </div>

      <div className="relative z-10 container-deck">
        <SectionLabel>Entertainment Platform</SectionLabel>
        <h2 className="attraction-headline opacity-0 font-display font-light text-section-title text-brand-white mb-4 max-w-3xl">
          Not just a mall.
          <br />
          <span className="text-gradient-gold">
            A destination that competes with Disney.
          </span>
        </h2>
        <p className="text-body text-brand-cream/70 max-w-2xl mb-16">
          American Dream&apos;s 16 world-class attractions are what transform
          foot traffic into dwell time — and dwell time into spend. No other
          retail property in North America can match this.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mb-20">
          <div className="space-y-2">
            {ATTRACTIONS.map((attraction) => (
              <button
                key={attraction.id}
                onClick={() => setActiveAttraction(attraction)}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border",
                  activeAttraction.id === attraction.id
                    ? "bg-white/8 border-brand-gold/50 text-brand-white"
                    : "bg-transparent border-white/5 text-brand-white/50 hover:bg-white/5 hover:text-brand-white hover:border-white/20",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{attraction.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{attraction.name}</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">
                      {attraction.category}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[400px] border border-white/10">
            <div
              key={activeAttraction.id}
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 transition-all duration-700"
              style={{ backgroundImage: `url('${activeAttraction.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium mb-3"
                style={{
                  backgroundColor: `${activeAttraction.color}30`,
                  color: activeAttraction.color,
                }}
              >
                {activeAttraction.category}
              </div>
              <h3 className="font-display font-light text-3xl text-brand-white mb-3">
                {activeAttraction.name}
              </h3>
              <p className="text-brand-cream/70 text-sm leading-relaxed mb-4 max-w-lg">
                {activeAttraction.description}
              </p>
              {Object.keys(activeAttraction.stats).length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {Object.entries(activeAttraction.stats).map(([key, val]) => (
                    <div
                      key={key}
                      className="glass px-4 py-2 rounded-lg text-center"
                    >
                      <div className="text-brand-white font-medium text-sm">
                        {String(val)}
                      </div>
                      <div className="text-brand-white/40 text-xs capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <SectionLabel>Why Entertainment Drives Revenue</SectionLabel>
          <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {ENTERTAINMENT_IMPACT.map((item) => (
              <div
                key={item.label}
                className="impact-card opacity-0 glass border border-brand-gold/20 hover:border-brand-gold/50 rounded-xl p-6 transition-all duration-300"
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <div className="font-display text-3xl font-semibold text-gradient-gold mb-2">
                  {item.value}
                </div>
                <div className="text-brand-cream/60 text-xs leading-relaxed">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
