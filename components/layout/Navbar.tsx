"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigation } from "@/lib/context/NavigationContext";
import { SECTIONS } from "@/lib/data/sections";
import { cn } from "@/lib/utils";
import { EASINGS, DURATIONS } from "@/lib/gsap/easings";

export function Navbar() {
  const { activeSection, scrollToSection } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const barRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const moveIndicator = useCallback((index: number) => {
    const nav = desktopNavRef.current;
    const indicator = indicatorRef.current;
    const btn = linkRefs.current[index];
    if (!nav || !indicator || !btn) return;

    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const left = btnRect.left - navRect.left;
    const width = btnRect.width;

    gsap.to(indicator, {
      x: left,
      width,
      duration: DURATIONS.fast,
      ease: EASINGS.luxury,
    });
  }, []);

  useLayoutEffect(() => {
    const idx = SECTIONS.findIndex((s) => s.id === activeSection);
    if (idx < 0) return;
    requestAnimationFrame(() => moveIndicator(idx));
  }, [activeSection, moveIndicator]);

  useEffect(() => {
    const onResize = () => {
      const idx = SECTIONS.findIndex((s) => s.id === activeSection);
      if (idx >= 0) moveIndicator(idx);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeSection, moveIndicator]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bar = barRef.current;
    const main = document.querySelector("main");
    if (!bar || !main) return;

    const st = ScrollTrigger.create({
      trigger: main,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const p = Math.min(self.scroll() / 200, 1);
        gsap.to(bar, {
          paddingTop: 12 + p * 6,
          paddingBottom: 12 + p * 6,
          backgroundColor: `rgba(10,10,10,${0.76 + p * 0.2})`,
          borderColor: `rgba(255,255,255,${0.07 + p * 0.06})`,
          duration: 0.25,
          ease: EASINGS.luxury,
          overwrite: "auto",
        });
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleSection = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        ref={barRef}
        className="border-b border-white/[0.08] bg-brand-black/75 px-4 py-3 backdrop-blur-xl sm:px-6 md:px-8 lg:py-4"
      >
        <div className="container-deck flex items-center justify-between gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => handleSection("hero")}
            className="group relative shrink-0 text-left"
            aria-label="Go to start"
          >
            <span className="font-display text-base font-light tracking-[0.12em] text-brand-white transition-colors duration-300 group-hover:text-brand-gold-light sm:text-lg lg:text-xl">
              American
              <span className="text-brand-gold">Dream</span>
            </span>
            <span className="mt-0.5 block font-body text-[8px] uppercase tracking-[0.26em] text-brand-cream/50 sm:text-[9px]">
              Sales deck
            </span>
          </button>

          {/* Desktop */}
          <nav
            ref={desktopNavRef}
            className="relative hidden flex-1 items-center justify-center gap-1 lg:flex lg:gap-2 xl:gap-3"
            aria-label="Primary"
          >
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold"
              style={{ width: 0, transform: "translateX(0)" }}
              aria-hidden
            />
            {SECTIONS.map((section, i) => (
              <button
                key={section.id}
                type="button"
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                onClick={() => handleSection(section.id)}
                className={cn(
                  "relative shrink-0 whitespace-nowrap px-1.5 py-2 font-body text-[10px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 xl:px-2.5 xl:tracking-[0.16em] 2xl:text-[11px]",
                  activeSection === section.id
                    ? "text-brand-gold"
                    : "text-brand-cream/65 hover:text-brand-white",
                )}
              >
                <span className="mr-1 hidden font-body text-[9px] tabular-nums text-brand-white/25 2xl:inline">
                  {section.shortLabel}
                </span>
                {section.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {/* Mobile + tablet: hamburger drawer */}
            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded border border-white/10 bg-brand-charcoal text-brand-white lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-deck-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={cn(
                  "block h-[2px] w-5 rounded-full bg-brand-gold transition-transform duration-300",
                  menuOpen && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-5 rounded-full bg-brand-cream/80 transition-opacity duration-200",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-5 rounded-full bg-brand-gold transition-transform duration-300",
                  menuOpen && "-translate-y-[5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & tablet drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[55] lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 bg-brand-black/60 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          id="mobile-deck-nav"
          className={cn(
            "absolute right-0 top-0 flex h-[100dvh] w-[min(85vw,320px)] flex-col border-l border-brand-gold/30 bg-brand-black shadow-[-20px_0_60px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[60%] md:max-w-md",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Navigation menu"
        >
          <div className="flex h-full flex-col px-5 pb-10 pt-[5.5rem]">
            <p className="font-body text-[10px] uppercase tracking-[0.28em] text-brand-gold">
              Navigate
            </p>
            <p className="mt-1 font-display text-2xl font-light text-brand-white">
              Chapters
            </p>

            <ul className="mt-8 flex flex-1 flex-col gap-2 overflow-y-auto overscroll-contain">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleSection(section.id)}
                    className={cn(
                      "flex w-full items-stretch overflow-hidden rounded-lg border text-left",
                      activeSection === section.id
                        ? "border-brand-gold bg-brand-gold/15"
                        : "border-white/15 bg-brand-charcoal hover:border-brand-gold/40",
                    )}
                  >
                    <span className="flex w-12 shrink-0 items-center justify-center border-r border-white/10 bg-brand-black font-body text-xs font-semibold tabular-nums text-brand-gold">
                      {section.shortLabel}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col justify-center px-3 py-3">
                      <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-brand-white">
                        {section.label}
                      </span>
                      <span className="mt-0.5 font-body text-[10px] text-brand-cream/60">
                        Jump to section
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
