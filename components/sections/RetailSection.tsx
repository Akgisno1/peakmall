"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { BrandLogo } from "@/components/ui/BrandLogo";
import {
  TENANT_CATEGORIES,
  RETAIL_STATS,
  AVAILABLE_SPACES,
} from "@/lib/data/tenants";
import { cn } from "@/lib/utils";

export function RetailSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionBgRef = useRef<HTMLDivElement>(null);
  const panelBgRef = useRef<HTMLDivElement>(null);
  const skipBgFade = useRef(true);

  const category = TENANT_CATEGORIES[activeCategory];

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

  useEffect(() => {
    gsap.fromTo(
      ".tenant-tile",
      { opacity: 0, y: 22, rotateX: -8 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.045,
        ease: "power3.out",
      },
    );
  }, [activeCategory]);

  useEffect(() => {
    const url = category.bgImage;
    if (skipBgFade.current) {
      skipBgFade.current = false;
      if (sectionBgRef.current) {
        sectionBgRef.current.style.backgroundImage = `url('${url}')`;
      }
      if (panelBgRef.current) {
        panelBgRef.current.style.backgroundImage = `url('${url}')`;
      }
      return;
    }

    const fadeSwap = (el: HTMLDivElement | null, targetOpacity: number) => {
      if (!el) return;
      gsap.to(el, {
        opacity: 0,
        duration: 0.22,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.backgroundImage = `url('${url}')`;
          gsap.to(el, {
            opacity: targetOpacity,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    };

    fadeSwap(sectionBgRef.current, 0.22);
    fadeSwap(panelBgRef.current, 1);
  }, [activeCategory, category.bgImage]);

  return (
    <SectionWrapper id="retail" className="justify-center py-24">
      <div className="absolute inset-0 z-0">
        <div
          ref={sectionBgRef}
          className="h-full w-full bg-cover bg-center opacity-[0.22]"
          style={{ backgroundImage: `url('${category.bgImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black" />
      </div>

      <div className="relative z-10 container-deck">
        <SectionLabel>Retail Environment</SectionLabel>
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="retail-headline mb-6 opacity-0 font-display text-section-title font-light text-brand-white">
              The most coveted
              <br />
              <span className="text-gradient-gold">retail address</span>
              <br />
              in North America.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-body mb-6 text-brand-cream/70">
              American Dream offers a retail environment unlike any other —
              where entertainment-driven foot traffic delivers shoppers who
              aren&apos;t just browsing. They&apos;re spending. Your brand sits
              alongside the world&apos;s most recognized names, in front of an
              affluent, engaged audience.
            </p>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-gold">
              Spaces available from 100 sq ft to 50,000 sq ft
            </p>
          </div>
        </div>

        <div className="retail-stats-row mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {RETAIL_STATS.map((s) => (
            <div
              key={s.label}
              className="retail-stat glass rounded-xl border border-brand-gold/20 p-5 text-center opacity-0"
            >
              <div className="mb-1 font-display text-3xl font-semibold text-gradient-gold">
                {s.value}
              </div>
              <div className="mb-0.5 text-xs font-medium uppercase tracking-wider text-brand-white">
                {s.label}
              </div>
              <div className="text-xs text-brand-white/40">{s.sub}</div>
            </div>
          ))}
        </div>

        <GoldDivider className="mb-12" />

        <div className="mb-16">
          <SectionLabel>Tenant Mix</SectionLabel>
          <h3 className="mb-8 font-display text-2xl font-light text-brand-white">
            A curated ecosystem of world-class brands.
          </h3>

          <div className="mb-8 flex flex-wrap gap-2">
            {TENANT_CATEGORIES.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategory(i)}
                className={cn(
                  "border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300",
                  activeCategory === i
                    ? "border-brand-gold bg-brand-gold text-brand-black"
                    : "border-white/20 bg-transparent text-brand-white/60 hover:border-brand-gold/50 hover:text-brand-white",
                )}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          <div className="perspective-[1200px] grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:auto-rows-[minmax(7.5rem,1fr)]">
            <div className="tenant-tile col-span-2 row-span-2 min-h-[16rem] opacity-0 md:min-h-0">
              <div className="relative h-full min-h-[16rem] w-full overflow-hidden rounded-xl border border-white/15 md:min-h-full">
                <div
                  ref={panelBgRef}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${category.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/35 to-brand-black/20" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-brand-gold">
                      {category.name}
                    </p>
                    <p className="mt-1 font-display text-xl font-light text-brand-white">
                      Retail environment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {category.tenants.map((tenant) => (
              <div
                key={tenant}
                className="tenant-tile flex flex-col gap-2 rounded-xl border border-white/10 bg-brand-black/30 p-2 opacity-0"
              >
                <BrandLogo tenantName={tenant} />
                <p className="text-center font-body text-[11px] font-medium uppercase tracking-wider text-brand-cream/75">
                  {tenant}
                </p>
              </div>
            ))}

            <div className="tenant-tile flex flex-col justify-center rounded-xl border border-brand-gold/25 bg-brand-gold/5 p-3 text-center opacity-0">
              <span className="font-display text-2xl font-light text-brand-gold">
                +{category.count - category.tenants.length}
              </span>
              <span className="mt-1 font-body text-[10px] uppercase tracking-widest text-brand-cream/50">
                more brands
              </span>
            </div>
          </div>
        </div>

        <div>
          <SectionLabel>Available Spaces</SectionLabel>
          <h3 className="mb-8 font-display text-2xl font-light text-brand-white">
            Find your footprint.
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {AVAILABLE_SPACES.map((space) => (
              <div
                key={space.type}
                className="group glass cursor-pointer rounded-xl border border-white/8 p-6 transition-all duration-500 hover:border-brand-gold/40"
              >
                <div className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-gold">
                  {space.type}
                </div>
                <div className="mb-2 font-display text-xl font-light text-brand-white">
                  {space.size}
                </div>
                <div className="text-xs text-brand-cream/50">{space.ideal}</div>
                <div className="mt-4 text-xs uppercase tracking-widest text-brand-gold/0 transition-all duration-300 group-hover:text-brand-gold">
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
