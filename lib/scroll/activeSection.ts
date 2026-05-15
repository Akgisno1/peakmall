import { SECTIONS } from "@/lib/data/sections";
import { NAV_SCROLL_OFFSET } from "@/lib/assets";

/**
 * Picks the section whose top is at or above the viewport marker.
 * Updates correctly during fast / momentum scroll (unlike per-section IntersectionObserver).
 */
export function resolveActiveSectionId(scrollY?: number): string {
  if (typeof window === "undefined") return SECTIONS[0].id;

  const y = scrollY ?? window.scrollY;
  const marker = y + NAV_SCROLL_OFFSET + window.innerHeight * 0.35;

  let activeId = SECTIONS[0].id;
  let bestTop = -Infinity;

  for (const { id } of SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + y;
    if (top <= marker && top > bestTop) {
      bestTop = top;
      activeId = id;
    }
  }

  return activeId;
}
