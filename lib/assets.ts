/** Shared scroll offset (must match NavigationContext + SectionWrapper scroll-mt). */
export const NAV_SCROLL_OFFSET = 88;

/** URL-safe filename for tenant / brand assets. */
export function slugifyTenant(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Expected logo path after you add PNGs to public/images/logos/ */
export function tenantLogoPath(tenantName: string): string {
  return `/images/logos/${slugifyTenant(tenantName)}.png`;
}
