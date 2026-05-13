"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HERO_STATS = [
    { value: "3M+", label: "Sq Ft", detail: "Gross Leasable Area" },
    { value: "450+", label: "Retailers", detail: "Global & Local Brands" },
    { value: "40M", label: "Annual Visitors", detail: "Projected at Maturity" },
    { value: "16", label: "Attractions", detail: "World-Class Experiences" },
    { value: "$5B", label: "Investment", detail: "Total Development Cost" },
];

export function HeroStatsBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            barRef.current?.querySelectorAll(".hero-stat-item") ?? [],
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                delay: 2,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div
            ref={barRef}
            className="glass border border-white/10 rounded-xl p-4 flex flex-wrap gap-6 justify-between"
        >
            {HERO_STATS.map((stat) => (
                <div key={stat.label} className="hero-stat-item opacity-0 text-center flex-1 min-w-[80px]">
                    <div className="font-display text-2xl font-semibold text-gradient-gold">
                        {stat.value}
                    </div>
                    <div className="text-brand-white text-xs font-medium uppercase tracking-wider">
                        {stat.label}
                    </div>
                    <div className="text-brand-white/40 text-xs hidden md:block">
                        {stat.detail}
                    </div>
                </div>
            ))}
        </div>
    );
}