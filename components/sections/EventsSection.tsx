"use client";
import { useState } from "react";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EVENTS_DATA } from "@/lib/data/events";
import { cn } from "@/lib/utils";

export function EventsSection() {
  const [activeVenue, setActiveVenue] = useState(EVENTS_DATA.venues[0]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".events-headline",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#events", start: "top 65%" },
      },
    );

    gsap.fromTo(
      ".event-type-card",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".event-types-grid", start: "top 75%" },
      },
    );
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".venue-visual-layer",
        { opacity: 0, scale: 1.04, filter: "blur(6px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
        },
      );
    },
    { dependencies: [activeVenue.id], revertOnUpdate: true },
  );

  return (
    <SectionWrapper
      id="events"
      className="bg-brand-charcoal justify-center py-24"
    >
      <div className="container-deck">
        <SectionLabel>Events & Venue Platform</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="events-headline opacity-0 font-display font-light text-section-title text-brand-white mb-6">
              {EVENTS_DATA.headline}.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-body text-brand-cream/70 mb-6">
              {EVENTS_DATA.body}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {EVENTS_DATA.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass border border-brand-gold/20 rounded-xl p-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-gradient-gold">
                    {s.value}
                  </div>
                  <div className="text-brand-white/60 text-xs uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <SectionLabel>Our Venues</SectionLabel>

          <div className="flex flex-wrap gap-2 mb-8">
            {EVENTS_DATA.venues.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setActiveVenue(venue)}
                className={cn(
                  "px-5 py-2.5 text-xs uppercase tracking-widest font-medium border transition-all duration-300 rounded-sm",
                  activeVenue.id === venue.id
                    ? "bg-brand-gold text-brand-black border-brand-gold"
                    : "bg-transparent text-brand-white/60 border-white/20 hover:border-brand-gold/40 hover:text-brand-white",
                )}
              >
                {venue.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
            <div className="venue-visual-layer relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal lg:h-[400px]">
              <div
                key={activeVenue.id}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ backgroundImage: `url('${activeVenue.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 to-transparent" />
              <div className="absolute top-4 right-4 glass border border-brand-gold/40 px-4 py-2 rounded-full">
                <span className="text-brand-gold font-display text-xl font-semibold">
                  {activeVenue.capacity}
                </span>
                <span className="text-brand-white/60 text-xs ml-2">
                  capacity
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-display font-light text-3xl text-brand-white mb-2">
                {activeVenue.name}
              </h3>
              <p className="text-brand-gold text-xs uppercase tracking-widest mb-6">
                {activeVenue.type}
              </p>
              <ul className="space-y-3 mb-8">
                {activeVenue.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 text-brand-cream/70 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-brand-gold text-brand-gold text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-300 w-fit"
              >
                Inquire About This Venue
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 mt-12">
          <SectionLabel>What We Host</SectionLabel>
          <div className="event-types-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {EVENTS_DATA.eventTypes.map((et) => (
              <div
                key={et.name}
                className="event-type-card opacity-0 glass border border-white/8 hover:border-brand-gold/30 rounded-xl p-4 text-center group transition-all duration-300"
              >
                <div className="text-3xl mb-3">{et.icon}</div>
                <div className="text-brand-white text-xs font-medium uppercase tracking-wider mb-2">
                  {et.name}
                </div>
                <div className="space-y-1">
                  {et.examples.map((ex) => (
                    <div key={ex} className="text-brand-white/30 text-xs">
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 glass border border-brand-gold/20 rounded-2xl p-8">
          <h4 className="font-display text-xl text-brand-white mb-6">
            Built for Events. Designed for Impact.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {EVENTS_DATA.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-3 text-brand-cream/70 text-sm"
              >
                <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
