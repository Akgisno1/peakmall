"use client";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LUXURY_DATA } from "@/lib/data/luxury";

export function LuxurySection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check if mobile to disable parallax
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
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
    }

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
      <div className="relative h-[70vh] overflow-hidden flex items-end">
        <div
          className="luxury-bg-img absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/luxury-interior.jpg')",
            top: "-10%",
          }}
        />
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

      <div className="bg-brand-black relative z-10">
        <div className="container-deck py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="luxury-text-reveal opacity-0 text-body text-brand-cream/70 text-xl leading-relaxed mb-8">
                {LUXURY_DATA.body}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {LUXURY_DATA.stats.map((s) => (
                  <div key={s.label} className="luxury-text-reveal opacity-0">
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

            <div className="luxury-features space-y-6">
              {LUXURY_DATA.features.map((feat) => (
                <div
                  key={feat.title}
                  className="luxury-feature opacity-0 flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-px bg-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-500" />
                  <div className="pl-4">
                    <h4 className="text-brand-white font-medium text-sm uppercase tracking-widest mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-brand-cream/60 text-sm leading-relaxed">
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
            <div className="luxury-brands-grid flex flex-wrap gap-4 mt-6">
              {LUXURY_DATA.currentBrands.map((brand) => (
                <div
                  key={brand}
                  className="brand-name-item opacity-0 border border-brand-gold/20 px-5 py-2.5 text-brand-white/80 hover:text-brand-gold hover:border-brand-gold/60 transition-all duration-300 text-sm tracking-widest uppercase font-medium cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
            <p className="text-brand-white/30 text-xs mt-6 uppercase tracking-widest">
              + Additional announcements forthcoming
            </p>
          </div>

          <div className="mt-16 glass border border-brand-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-xl text-brand-white mb-2">
                Interested in the Luxury Wing?
              </h4>
              <p className="text-brand-cream/60 text-sm">
                Speak directly with our luxury leasing team. Confidential, no
                obligation.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 border border-brand-gold text-brand-gold text-xs uppercase tracking-widest font-medium hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
            >
              Request Private Consultation
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
