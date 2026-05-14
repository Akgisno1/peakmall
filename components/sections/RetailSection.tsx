"use client";
import { useState } from "react";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import {
  TENANT_CATEGORIES,
  RETAIL_STATS,
  AVAILABLE_SPACES,
} from "@/lib/data/tenants";
import { cn } from "@/lib/utils";

export function RetailSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".retail-headline",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#retail", start: "top 65%" },
      },
    );

    gsap.fromTo(
      ".retail-stat",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: ".retail-stats-row", start: "top 75%" },
      },
    );
  }, []);

  const category = TENANT_CATEGORIES[activeCategory];

  return (
    <SectionWrapper id="retail" className="justify-center py-24">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/retail-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black" />
      </div>

      <div className="relative z-10 container-deck">
        <SectionLabel>Retail Environment</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="retail-headline opacity-0 font-display font-light text-section-title text-brand-white mb-6">
              The most coveted
              <br />
              <span className="text-gradient-gold">retail address</span>
              <br />
              in North America.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-body text-brand-cream/70 mb-6">
              American Dream offers a retail environment unlike any other —
              where entertainment-driven foot traffic delivers shoppers who
              aren&apos;t just browsing. They&apos;re spending. Your brand sits
              alongside the world&apos;s most recognized names, in front of an
              affluent, engaged audience.
            </p>
            <p className="text-brand-gold text-sm uppercase tracking-widest font-medium">
              Spaces available from 100 sq ft to 50,000 sq ft
            </p>
          </div>
        </div>

        <div className="retail-stats-row grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {RETAIL_STATS.map((s) => (
            <div
              key={s.label}
              className="retail-stat opacity-0 glass rounded-xl p-5 border border-brand-gold/20 text-center"
            >
              <div className="font-display text-3xl font-semibold text-gradient-gold mb-1">
                {s.value}
              </div>
              <div className="text-brand-white text-xs font-medium uppercase tracking-wider mb-0.5">
                {s.label}
              </div>
              <div className="text-brand-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        <GoldDivider className="mb-12" />

        <div className="mb-16">
          <SectionLabel>Tenant Mix</SectionLabel>
          <h3 className="font-display font-light text-2xl text-brand-white mb-8">
            A curated ecosystem of world-class brands.
          </h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {TENANT_CATEGORIES.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-widest font-medium border transition-all duration-300",
                  activeCategory === i
                    ? "bg-brand-gold text-brand-black border-brand-gold"
                    : "bg-transparent text-brand-white/60 border-white/20 hover:border-brand-gold/50 hover:text-brand-white",
                )}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {category.tenants.map((tenant) => (
              <div
                key={tenant}
                className="glass border border-white/8 rounded-lg px-4 py-3 text-center text-sm text-brand-white/70 hover:text-brand-white hover:border-brand-gold/30 transition-all duration-300"
              >
                {tenant}
              </div>
            ))}
            <div className="glass border border-brand-gold/20 rounded-lg px-4 py-3 text-center text-sm text-brand-gold">
              +{category.count - category.tenants.length} more
            </div>
          </div>
        </div>

        <div>
          <SectionLabel>Available Spaces</SectionLabel>
          <h3 className="font-display font-light text-2xl text-brand-white mb-8">
            Find your footprint.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AVAILABLE_SPACES.map((space) => (
              <div
                key={space.type}
                className="group glass cursor-pointer rounded-xl border border-white/8 p-6 transition-all duration-500 hover:border-brand-gold/40"
              >
                <div className="text-brand-gold font-medium text-sm uppercase tracking-widest mb-2">
                  {space.type}
                </div>
                <div className="text-brand-white font-display text-xl font-light mb-2">
                  {space.size}
                </div>
                <div className="text-brand-cream/50 text-xs">{space.ideal}</div>
                <div className="mt-4 text-brand-gold/0 group-hover:text-brand-gold text-xs uppercase tracking-widest transition-all duration-300">
                  Inquire →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
