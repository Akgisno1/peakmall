"use client";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { StatCard } from "@/components/ui/StatCard";
import { PROPERTY_STATS } from "@/lib/data/stats";

export function WhySection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Headline reveal
    gsap.fromTo(
      ".why-headline",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#why",
          start: "top 65%",
        },
      },
    );

    // Stat cards stagger
    gsap.fromTo(
      ".stat-card-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 70%",
        },
      },
    );

    // Demographic bars
    gsap.fromTo(
      ".demo-bar-fill",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".demo-section",
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <SectionWrapper id="why" className="bg-brand-charcoal justify-center py-24">
      <div className="container-deck">
        {/* Header */}
        <SectionLabel>The Opportunity</SectionLabel>
        <h2 className="why-headline opacity-0 font-display font-light text-section-title text-brand-white mb-4 max-w-3xl">
          Not a mall. <br />
          <span className="text-gradient-gold">A national destination.</span>
        </h2>
        <p className="text-body text-brand-cream/70 max-w-2xl mb-16">
          American Dream is the most ambitious mixed-use destination ever built
          in North America — a convergence of retail, entertainment,
          hospitality, and culture that no single brand or venue can replicate.
        </p>

        <GoldDivider className="mb-16" />

        {/* Scale Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {PROPERTY_STATS.scale.map((stat) => (
            <div key={stat.label} className="stat-card-item opacity-0">
              <StatCard
                value={`${stat.value}${stat.suffix}`}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        {/* Location + Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <SectionLabel>Strategic Location</SectionLabel>
            <h3 className="font-display font-light text-3xl text-brand-white mb-6">
              At the center of the world&apos;s most valuable retail market.
            </h3>
            <div className="space-y-4">
              {[
                [
                  "12 miles from Manhattan",
                  "Direct access to the world's luxury capital",
                ],
                [
                  "120M people within 2 hours",
                  "The largest drive-to retail catchment in America",
                ],
                [
                  "Direct rail + express bus",
                  "No car required — transit-accessible at scale",
                ],
                ["20 min to Newark EWR", "International visitor gateway"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-brand-white font-medium text-sm">
                      {title}
                    </div>
                    <div className="text-brand-cream/60 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-brand-black lg:aspect-auto lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/aerial-map.png')" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold">
                📍 American Dream · East Rutherford, NJ
              </div>
            </div>
          </div>
        </div>

        {/* Demographics Section */}
        <div className="demo-section">
          <SectionLabel>Audience Intelligence</SectionLabel>
          <h3 className="font-display font-light text-3xl text-brand-white mb-10">
            High-value visitors. Premium intent.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROPERTY_STATS.demographics.map((d) => (
              <div
                key={d.label}
                className="glass rounded-xl p-6 border border-white/8"
              >
                <div className="text-stat text-gradient-gold font-display mb-1">
                  {d.value}
                </div>
                <div className="text-brand-white font-medium text-sm mb-1">
                  {d.label}
                </div>
                <div className="text-brand-white/40 text-xs">{d.note}</div>
                {/* Animated bar */}
                <div className="mt-4 h-0.5 bg-white/10 rounded">
                  <div
                    className="demo-bar-fill h-full bg-brand-gold rounded origin-left"
                    style={{ width: d.value.includes("%") ? d.value : "80%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
