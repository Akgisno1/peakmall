"use client";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { LUXURY_DATA } from "@/lib/data/luxury";

export function LuxurySection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.to(".luxury-bg-img", {
        y: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: "#luxury",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.fromTo(
      ".luxury-text-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#luxury", start: "top 60%" },
      },
    );

    gsap.fromTo(
      ".luxury-feature",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".luxury-features", start: "top 70%" },
      },
    );

    gsap.fromTo(
      ".brand-name-item",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        stagger: 0.07,
        scrollTrigger: { trigger: ".luxury-brands-grid", start: "top 75%" },
      },
    );
  }, []);

  return (
    <SectionWrapper id="luxury" className="overflow-hidden">
      <div className="relative flex h-[70vh] items-end overflow-hidden">
        <div className="luxury-bg-img absolute inset-0 h-[120%] w-full origin-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/luxury-interior.png')",
              top: "-10%",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

        <div className="relative z-10 container-deck pb-16">
          <SectionLabel>The Luxury Wing</SectionLabel>
          <h2 className="luxury-text-reveal opacity-0 font-display font-light text-section-title text-brand-white mb-4">
            Curated for
            <br />
            <span className="text-gradient-gold italic">those who know.</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 bg-brand-black">
        <div className="container-deck py-20">
          <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="luxury-text-reveal opacity-0 text-body text-xl leading-relaxed text-brand-cream/70 mb-8">
                {LUXURY_DATA.body}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {LUXURY_DATA.stats.map((s) => (
                  <div key={s.label} className="luxury-text-reveal opacity-0">
                    <div className="font-display text-2xl font-semibold text-gradient-gold">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-brand-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-features space-y-6">
              {LUXURY_DATA.features.map((feat) => (
                <div
                  key={feat.title}
                  className="luxury-feature group flex gap-4 opacity-0"
                >
                  <div className="w-px flex-shrink-0 bg-brand-gold/30 transition-colors duration-500 group-hover:bg-brand-gold" />
                  <div className="pl-4">
                    <h4 className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-white">
                      {feat.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-brand-cream/60">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <GoldDivider className="mb-16" />

          <div>
            <SectionLabel>Current Luxury Tenants</SectionLabel>
            <div className="luxury-brands-grid mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {LUXURY_DATA.currentBrands.map((brand) => (
                <div
                  key={brand}
                  className="brand-name-item group overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-black/40 opacity-0 transition-colors duration-300 hover:border-brand-gold/55"
                >
                  <BrandLogo
                    tenantName={brand}
                    aspectClass="aspect-[5/3]"
                    className="rounded-none border-0 border-b border-white/10"
                  />
                  <div className="px-3 py-2.5 text-center font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-white/85 group-hover:text-brand-gold">
                    {brand}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-brand-white/30">
              + Additional announcements forthcoming
            </p>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand-gold/20 p-8 glass md:flex-row md:items-center">
            <div>
              <h4 className="mb-2 font-display text-xl text-brand-white">
                Interested in the Luxury Wing?
              </h4>
              <p className="text-sm text-brand-cream/60">
                Speak directly with our luxury leasing team. Confidential, no
                obligation.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 border border-brand-gold px-8 py-4 text-xs font-medium uppercase tracking-widest text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-brand-black"
            >
              Request Private Consultation
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

