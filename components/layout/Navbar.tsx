"use client";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@/lib/context/NavigationContext";
import { SECTIONS } from "@/lib/data/sections";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { activeSection, scrollToSection } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (menuOpen && overlayRef.current && panelRef.current) {
      // Animate menu slide in from right
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.fromTo(
        panelRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      );

      // Stagger menu items slide in from right
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    } else if (!menuOpen && overlayRef.current && panelRef.current) {
      // Animate menu slide out to right
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(panelRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20 py-6 px-8">
          <div className="container-deck flex items-center justify-between">
            {/* Logo - Cormorant Garamond like Hero */}
            <button
              onClick={() => handleNavClick("hero")}
              className="font-display text-lg font-light tracking-[0.1em] text-brand-white hover:text-brand-gold transition-colors duration-300"
            >
              American<span className="text-brand-gold">Dream</span>
            </button>

            {/* Navigation Links - Equal spacing, matching hero section styling */}
            <div className="flex items-center justify-center gap-12 flex-1 mx-16">
              {SECTIONS.slice(1, -1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    "font-body text-xs uppercase tracking-widest font-medium transition-all duration-300",
                    activeSection === section.id
                      ? "text-brand-gold"
                      : "text-brand-cream/70 hover:text-brand-white",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Partner CTA Button - Matching design system */}
            <button
              onClick={() => handleNavClick("contact")}
              className="px-6 py-3 bg-brand-gold/90 hover:bg-brand-gold text-brand-black text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger - Fixed top right */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-[60] lg:hidden text-brand-white hover:text-brand-gold transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu - Drawer from right (hidden on desktop) */}
      <div className="lg:hidden">
        {/* Overlay */}
        <div
          ref={overlayRef}
          className={cn(
            "fixed inset-0 z-40 pointer-events-none",
            menuOpen && "pointer-events-auto",
          )}
          onClick={handleOverlayClick}
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: menuOpen ? "blur(4px)" : "blur(0px)",
            opacity: menuOpen ? 1 : 0,
          }}
        />

        {/* Menu Panel */}
        <div
          ref={panelRef}
          className="fixed top-0 right-0 h-screen z-50"
          style={{
            width: "60%",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="pt-20 px-6 h-full flex flex-col">
            {/* Logo in Mobile Menu */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[0] = el as unknown as HTMLElement;
              }}
              className="mb-12"
            >
              <button
                onClick={() => handleNavClick("hero")}
                className="font-display text-lg font-light tracking-[0.1em] text-brand-white hover:text-brand-gold transition-colors duration-300"
              >
                American<span className="text-brand-gold">Dream</span>
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-6 flex-1">
              {SECTIONS.map((section, index) => (
                <button
                  key={section.id}
                  ref={(el) => {
                    if (el)
                      itemsRef.current[index + 1] =
                        el as unknown as HTMLElement;
                  }}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    "block w-full text-left font-body text-sm uppercase tracking-widest font-medium transition-all duration-300",
                    activeSection === section.id
                      ? "text-brand-gold"
                      : "text-brand-cream/70 hover:text-brand-white",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
