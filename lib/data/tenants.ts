import { tenantLogoPath } from "@/lib/assets";

export const TENANT_CATEGORIES = [
  {
    name: "Luxury & Designer",
    slug: "luxury",
    count: 50,
    bgImage: "/images/retail-luxury.png",
    tenants: [
      "Hermès",
      "Louis Vuitton",
      "Gucci",
      "Prada",
      "Bottega Veneta",
      "Dior",
      "Burberry",
      "Valentino",
      "Moncler",
      "Balenciaga",
    ],
  },
  {
    name: "Premium Retail",
    slug: "premium",
    count: 120,
    bgImage: "/images/retail-premium.png",
    tenants: [
      "Zara",
      "H&M",
      "Uniqlo",
      "Lululemon",
      "Anthropologie",
      "Free People",
      "Sephora",
      "MAC",
      "Aesop",
      "Kiehl's",
    ],
  },
  {
    name: "Flagship Stores",
    slug: "flagship",
    count: 25,
    bgImage: "/images/retail-flagship.png",
    tenants: [
      "Primark (largest US store)",
      "Zara (flagship)",
      "H&M (flagship)",
      "Sephora (experiential)",
      "Nike",
    ],
  },
  {
    name: "Dining & F&B",
    slug: "dining",
    count: 100,
    bgImage: "/images/retail-dining.png",
    tenants: [
      "Casa Cipriani",
      "Don Angie",
      "Benihana",
      "The Melting Pot",
      "Buffalo Wild Wings",
      "Shake Shack",
      "Din Tai Fung",
    ],
  },
  {
    name: "Entertainment",
    slug: "entertainment",
    count: 16,
    bgImage: "/images/retail-entertainment.png",
    tenants: [
      "Nickelodeon Universe",
      "DreamWorks Water Park",
      "Big Snow (indoor ski)",
      "Angry Birds Mini Golf",
      "NHL-Size Ice Rink",
      "Legoland Discovery",
    ],
  },
] as const;

/** Logo file paths for each tenant (PNG in public/images/logos/). */
export function getTenantLogo(tenantName: string): string {
  return tenantLogoPath(tenantName);
}

export const RETAIL_STATS = [
  { value: "450+", label: "Total Tenants", sub: "Across all categories" },
  { value: "98%", label: "Occupancy Rate", sub: "At opened sections" },
  {
    value: "$180/sqft",
    label: "Avg Retail Sales PSF",
    sub: "Comparable properties",
  },
  {
    value: "3X",
    label: "Traffic vs. Regional Avg",
    sub: "Due to entertainment mix",
  },
];

export const AVAILABLE_SPACES = [
  {
    type: "Flagship",
    size: "10,000–50,000 sq ft",
    ideal: "Luxury, anchor brands",
  },
  {
    type: "Inline Retail",
    size: "500–5,000 sq ft",
    ideal: "Mid-tier, specialty",
  },
  {
    type: "Pop-Up / Kiosk",
    size: "100–500 sq ft",
    ideal: "DTC brands, seasonal",
  },
  {
    type: "F&B Pad",
    size: "2,000–8,000 sq ft",
    ideal: "Restaurants, cafes, QSR",
  },
];
