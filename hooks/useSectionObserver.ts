"use client";
import { useEffect } from "react";
import { useNavigation } from "@/lib/context/NavigationContext";
import { SECTIONS } from "@/lib/data/sections";

export function useSectionObserver() {
    const { setActiveSection } = useNavigation();

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.4 }  // Section must be 40% visible to be "active"
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [setActiveSection]);
}