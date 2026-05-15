export interface SectionConfig {
    id: string;          // DOM element id
    label: string;       // Display name in nav
    shortLabel: string;  // Dot tooltip
    color?: string;      // Optional accent color override
}

export const SECTIONS: SectionConfig[] = [
    { id: "hero", label: "Experience", shortLabel: "01" },
    { id: "why", label: "Why\u00A0Here", shortLabel: "02" },
    { id: "retail", label: "Retail", shortLabel: "03" },
    { id: "luxury", label: "Luxury", shortLabel: "04" },
    { id: "dining", label: "Dining", shortLabel: "05" },
    { id: "attractions", label: "Attractions", shortLabel: "06" },
    { id: "events", label: "Events", shortLabel: "07" },
    { id: "contact", label: "Partner", shortLabel: "08" },
];