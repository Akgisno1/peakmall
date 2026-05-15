"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

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

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.5",
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      );

      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.2",
      );

      gsap.to(".scroll-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: false,
        repeatDelay: 0.5,
      });

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".hero-parallax", {
        y: 56,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".hero-video-depth", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      id="hero"
      className="items-center justify-center overflow-hidden"
    >
      <div className="hero-video-depth absolute inset-0 z-0 origin-center overflow-hidden">
        <VideoBackground
          src="/videos/hero-bg.mp4"
          overlay
          overlayOpacity={0.5}
        />
      </div>

      {/* Noise texture overlay for depth - optional */}
      {/* <div
                className="absolute inset-0 z-1 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/noise.png')",
                    backgroundRepeat: "repeat",
                }}
            /> */}

      {/* Content */}
      <div className="hero-parallax relative z-10 flex min-h-[100dvh] w-full flex-col will-change-transform">
        <div className="container-deck flex flex-1 flex-col justify-center pb-8 pt-28 lg:pt-36">
          {/* Eyebrow */}
          <p className="hero-eyebrow opacity-0 text-sub mb-6 tracking-[0.3em] text-brand-gold">
            East Rutherford, New Jersey · USA
          </p>

          {/* Headline */}
          <h1 className="mb-6 overflow-hidden">
            <span className="hero-headline-line block opacity-0 font-display text-hero font-light leading-[0.95] text-brand-white">
              Where the World
            </span>
            <span className="hero-headline-line block opacity-0 font-display text-hero font-light leading-[0.95] text-gradient-gold">
              Comes to Dream.
            </span>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="text-body opacity-0 mb-10 max-w-xl text-lg leading-relaxed text-brand-cream/80"
          >
            3 million square feet. 450+ retailers. 16 world-class attractions.
            The most visited destination on the East Coast — now open for
            partnerships that define the future of retail.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="opacity-0 flex flex-wrap gap-4">
            <CTAButton href="#contact">Become a Partner</CTAButton>
            <CTAButtonGhost href="#why">Explore the Opportunity</CTAButtonGhost>
          </div>
        </div>

        <div className="container-deck pb-28 pt-4 lg:pb-32">
          <HeroStatsBar />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="opacity-0 absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-8"
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
