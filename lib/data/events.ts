export const EVENTS_DATA = {
  headline: "America's Most Exciting Event Platform",
  subheadline: "Where concerts meet commerce. Where brands meet culture.",
  body: `American Dream hosts hundreds of events annually across 5+ dedicated venues.
  From 20,000-person concerts to intimate brand activations, the property offers
  unmatched flexibility, built-in foot traffic, and a national audience reach that
  no standalone venue can match.`,

  venues: [
    {
      id: "main-arena",
      name: "Central Arena",
      capacity: "20,000",
      type: "Concerts, Sports, Major Events",
      features: [
        "Full staging infrastructure",
        "LED walls",
        "360° sightlines",
        "VIP suites",
      ],
      image: "/images/venue-arena.png",
    },
    {
      id: "performing-arts",
      name: "Performing Arts Center",
      capacity: "2,500",
      type: "Theater, Live Performance, Corporate",
      features: [
        "Broadway-caliber staging",
        "Fly system",
        "Orchestra pit",
        "Premium acoustic treatment",
      ],
      image: "/images/venue-pac.png",
    },
    {
      id: "expo-hall",
      name: "Exposition & Convention Center",
      capacity: "150,000 sq ft",
      type: "Trade Shows, Conventions, Corporate Events",
      features: [
        "Flexible floor plan",
        "Loading docks",
        "Built-in AV",
        "Full catering kitchen",
      ],
      image: "/images/venue-expo.png",
    },
    {
      id: "outdoor-plaza",
      name: "The Grand Plaza",
      capacity: "5,000",
      type: "Brand Activations, Markets, Outdoor Events",
      features: [
        "Covered outdoor space",
        "Built-in screen",
        "Brand integration zones",
        "Year-round use",
      ],
      image: "/images/venue-plaza.png",
    },
  ],

  eventTypes: [
    {
      name: "Concerts & Music",
      icon: "🎵",
      examples: ["Major label tours", "EDM festivals", "Latin music events"],
    },
    {
      name: "Brand Activations",
      icon: "🎯",
      examples: ["Product launches", "Pop-up experiences", "Fan events"],
    },
    {
      name: "Corporate Events",
      icon: "🏢",
      examples: ["Conferences", "Galas", "Team building"],
    },
    {
      name: "Cultural Events",
      icon: "🌎",
      examples: ["Fashion weeks", "Art installations", "Film premieres"],
    },
    {
      name: "Sports Events",
      icon: "🏆",
      examples: ["E-sports tournaments", "Pro exhibitions", "Youth leagues"],
    },
    {
      name: "Holiday Programming",
      icon: "✨",
      examples: ["NYE countdown", "Holiday markets", "Family shows"],
    },
  ],

  highlights: [
    "200+ events annually across all venues",
    "Direct adjacency to MetLife Stadium (82,000 capacity)",
    "Built-in audience of 40M annual property visitors",
    "Integrated sponsorship and brand activation packages",
    "Full-service event operations team on property",
    "24/7 security, load-in, and production support",
  ],

  stats: [
    { value: "200+", label: "Annual Events" },
    { value: "5+", label: "Dedicated Venues" },
    { value: "20K", label: "Max Capacity" },
    { value: "150K", label: "Sq Ft Expo Space" },
  ],
};
