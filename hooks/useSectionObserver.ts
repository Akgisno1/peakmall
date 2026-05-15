"use client";

import { useEffect, useRef } from "react";
import { useNavigation } from "@/lib/context/NavigationContext";
import { useLenisInstance } from "@/components/layout/SmoothScroll";
import { resolveActiveSectionId } from "@/lib/scroll/activeSection";

export function useSectionObserver() {
  const { activeSection, setActiveSection } = useNavigation();
  const lenis = useLenisInstance();
  const activeRef = useRef(activeSection);

  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const sync = () => {
      ticking = false;
      const scrollY = lenis?.scroll ?? window.scrollY;
      const next = resolveActiveSectionId(scrollY);
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActiveSection(next);
      }
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(sync);
    };

    schedule();

    if (lenis) {
      lenis.on("scroll", schedule);
    } else {
      window.addEventListener("scroll", schedule, { passive: true });
    }

    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.off("scroll", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [lenis, setActiveSection]);
}
