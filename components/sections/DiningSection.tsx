"use client";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { DINING_DATA } from "@/lib/data/dining";

export function DiningSection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".dining-card",
      { opacity: 0, y: 30, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".dining-cards-grid", start: "top 70%" },
      },
    );

    gsap.fromTo(
      ".dining-stat-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: ".dining-stats", start: "top 75%" },
      },
    );
  }, []);

  return (
    <SectionWrapper
      id="dining"
      className="bg-brand-charcoal justify-center py-24"
    >
      <div className="container-deck">
        <SectionLabel>Dining & Lifestyle</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display font-light text-section-title text-brand-white mb-6">
              {DINING_DATA.headline}.<br />
              <span className="text-gradient-gold">
                {DINING_DATA.subheadline}
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-body text-brand-cream/70 mb-6">
              {DINING_DATA.body}
            </p>
            <div className="glass border border-brand-gold/20 rounded-xl p-5">
              <div className="font-display text-4xl font-semibold text-gradient-gold mb-1">
                4.2 hrs
              </div>
              <div className="text-brand-white text-sm font-medium">
                Average Visitor Dwell Time
              </div>
              <div className="text-brand-white/50 text-xs mt-1">
                Visitors who dine stay significantly longer — and spend more
                across all categories.
              </div>
            </div>
          </div>
        </div>

        <div className="dining-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {DINING_DATA.categories.map((cat) => (
            <div
              key={cat.name}
              className="dining-card group glass rounded-xl border border-white/8 p-6 opacity-0 transition-all duration-500 hover:border-brand-gold/40"
            >
              <div className="text-brand-gold text-2xl mb-4">{cat.icon}</div>
              <h4 className="text-brand-white font-medium text-sm uppercase tracking-wider mb-3">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs text-brand-cream/60 bg-white/5 px-2 py-1 rounded"
                  >
                    {ex}
                  </span>
                ))}
              </div>
              <p className="text-brand-cream/50 text-xs leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <GoldDivider className="mb-12" />

        <div className="dining-stats grid grid-cols-2 md:grid-cols-4 gap-6">
          {DINING_DATA.stats.map((s) => (
            <div
              key={s.label}
              className="dining-stat-item opacity-0 text-center"
            >
              <div className="font-display text-4xl font-semibold text-gradient-gold mb-1">
                {s.value}
              </div>
              <div className="text-brand-white/60 text-xs uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid h-48 grid-cols-3 gap-2 overflow-hidden rounded-xl md:h-64">
          {["Dining moment 1", "Dining moment 2", "Dining moment 3"].map(
            (label, i) => (
              <div
                key={label}
                className="relative min-h-0 overflow-hidden rounded-lg bg-brand-charcoal"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/dining-${i + 1}.png')`,
                  }}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
