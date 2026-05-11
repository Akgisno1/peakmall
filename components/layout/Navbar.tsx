"use client";
import { useState, useEffect } from "react";
import { useNavigation } from "@/lib/context/NavigationContext";
import { SECTIONS } from "@/lib/data/sections";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { activeSection, scrollToSection } = useNavigation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-deck flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection("hero")}
                    className="font-display text-xl font-light tracking-[0.2em] text-brand-white uppercase"
                >
                    American<span className="text-brand-gold">Dream</span>
                </button>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {SECTIONS.slice(1).map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                                "px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 rounded-sm",
                                activeSection === section.id
                                    ? "text-brand-gold"
                                    : "text-brand-white/50 hover:text-brand-white"
                            )}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                {/* Primary CTA */}
                <button
                    onClick={() => scrollToSection("contact")}
                    className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-brand-gold text-brand-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-brand-gold-light"
                >
                    Partner With Us
                </button>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <span className={cn("w-6 h-px bg-brand-white transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
                    <span className={cn("w-6 h-px bg-brand-white transition-all duration-300", menuOpen && "opacity-0")} />
                    <span className={cn("w-6 h-px bg-brand-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-brand-charcoal/95 backdrop-blur-md border-t border-white/5">
                    {SECTIONS.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => {
                                scrollToSection(section.id);
                                setMenuOpen(false);
                            }}
                            className="w-full text-left px-8 py-4 text-sm uppercase tracking-widest text-brand-white/70 hover:text-brand-gold hover:bg-white/5 transition-all border-b border-white/5"
                        >
                            <span className="text-brand-gold/50 text-xs mr-4">{section.shortLabel}</span>
                            {section.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}