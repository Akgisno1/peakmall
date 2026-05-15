"use client";
import { useNavigation } from "@/lib/context/NavigationContext";
import { SECTIONS } from "@/lib/data/sections";
import { cn } from "@/lib/utils";

export function SideProgress() {
    const { activeSection, scrollToSection } = useNavigation();
    const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

    return (
        <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:right-6 md:flex lg:right-6">
            {/* Progress line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

            {SECTIONS.map((section, index) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    title={section.label}
                    className="relative group flex items-center gap-3"
                >
                    {/* Dot */}
                    <div
                        className={cn(
                            "z-10 h-2 w-2 rounded-full transition-all duration-500",
                            activeSection === section.id
                                ? "bg-brand-gold scale-125"
                                : index < currentIndex
                                    ? "bg-brand-gold/40"
                                    : "bg-white/20 group-hover:bg-white/40"
                        )}
                    />
                    {/* Tooltip */}
                    <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs text-brand-white whitespace-nowrap bg-brand-charcoal px-2 py-1 rounded">
                        {section.label}
                    </span>
                </button>
            ))}
        </div>
    );
}