"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { CTAButton } from "@/components/ui/CTAButton";
import { HeroStatsBar } from "./HeroStatsBar";
import { CTAButtonGhost } from "../ui/CTAButtonGhost";

export function HeroSection() {
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Eyebrow text
    tl.fromTo(
      ".hero-eyebrow",
      { opacity: 0, y: 20, letterSpacing: "0.3em" },
      {
        opacity: 1,
        y: 0,
        letterSpacing: "0.15em",
        duration: 1.2,
        ease: "power3.out",
      },
    );

    // Headline — character by character would use SplitText; here we do line by line
    tl.fromTo(
      ".hero-headline-line",
      { opacity: 0, y: 60, skewY: 3 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      },
      "-=0.8",
    );

    // Subheadline
    tl.fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.5",
    );

    // CTAs
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4",
    );

    // Scroll indicator
    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.2",
    );

    // Pulsing scroll indicator
    gsap.to(".scroll-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: false,
      repeatDelay: 0.5,
    });
  }, []);

  return (
    <SectionWrapper
      id="hero"
      className="items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <VideoBackground src="/videos/hero-bg.mp4" overlay overlayOpacity={0.5} />

      {/* Noise texture overlay for depth - optional */}
      {/* <div
                className="absolute inset-0 z-1 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/noise.png')",
                    backgroundRepeat: "repeat",
                }}
            /> */}

      {/* Content */}
      <div className="relative z-10 container-deck flex flex-col items-start justify-center min-h-screen py-32">
        {/* Eyebrow */}
        <p className="hero-eyebrow opacity-0 text-sub text-brand-gold mb-6 tracking-[0.3em]">
          East Rutherford, New Jersey · USA
        </p>

        {/* Headline */}
        <h1 className="overflow-hidden mb-6">
          <span className="hero-headline-line block opacity-0 font-display font-light text-hero text-brand-white leading-[0.95]">
            Where the World
          </span>
          <span className="hero-headline-line block opacity-0 font-display font-light text-hero text-gradient-gold leading-[0.95]">
            Comes to Dream.
          </span>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="opacity-0 max-w-xl text-body text-brand-cream/80 mb-10 text-lg leading-relaxed"
        >
          3 million square feet. 450+ retailers. 16 world-class attractions. The
          most visited destination on the East Coast — now open for partnerships
          that define the future of retail.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="opacity-0 flex flex-wrap gap-4">
          <CTAButton href="#contact">Become a Partner</CTAButton>
          <CTAButtonGhost href="#why">Explore the Opportunity</CTAButtonGhost>
        </div>

        {/* Stats bar — appears below CTAs */}
        <div className="absolute bottom-16 left-0 right-0 container-deck">
          <HeroStatsBar />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-brand-white/40 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-brand-gold/30 overflow-hidden">
          <div className="scroll-line w-full h-full bg-brand-gold" />
        </div>
      </div>
    </SectionWrapper>
  );
}
