"use client";
import { useState } from "react";
import { useGSAP } from "@/lib/gsap/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const CTA_PATHS = [
  {
    id: "leasing",
    icon: "🏪",
    title: "Retail Leasing",
    subtitle: "For brands and retailers",
    description:
      "Explore available spaces from flagship to pop-up. Our leasing team will match your brand to the right opportunity.",
    action: "Request Leasing Info",
    color: "from-brand-gold/20 to-brand-gold/5",
    borderColor: "border-brand-gold/40",
    fields: [
      "Company Name",
      "Brand Category",
      "Target Size (sq ft)",
      "Target Opening",
    ],
  },
  {
    id: "sponsorship",
    icon: "🤝",
    title: "Brand Partnerships",
    subtitle: "For sponsors and marketers",
    description:
      "Access 40M+ visitors through property-wide sponsorships, naming rights, activation zones, and digital channels.",
    action: "Explore Partnership Tiers",
    color: "from-blue-900/20 to-blue-900/5",
    borderColor: "border-blue-400/30",
    fields: ["Company Name", "Campaign Type", "Budget Range", "Target Dates"],
  },
  {
    id: "events",
    icon: "🎵",
    title: "Event Bookings",
    subtitle: "For promoters and producers",
    description:
      "Book one of our 5 dedicated venues for concerts, conventions, activations, or private events.",
    action: "Request Venue Info",
    color: "from-purple-900/20 to-purple-900/5",
    borderColor: "border-purple-400/30",
    fields: [
      "Event Type",
      "Expected Attendance",
      "Preferred Venue",
      "Preferred Dates",
    ],
  },
];

export function CTASection() {
  const [activePath, setActivePath] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const activeCTA = CTA_PATHS.find((p) => p.id === activePath);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".cta-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
      },
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { path: activePath, ...formData });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActivePath(null);
      setFormData({});
    }, 3000);
  };

  return (
    <SectionWrapper
      id="contact"
      className="justify-center py-24 bg-brand-black overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container-deck">
        <div className="text-center mb-16">
          <SectionLabel>Take the Next Step</SectionLabel>
          <h2 className="font-display font-light text-section-title text-brand-white mb-4">
            Be Part of
            <br />
            <span className="text-gradient-gold">American Dream.</span>
          </h2>
          <p className="text-body text-brand-cream/60 max-w-xl mx-auto">
            Whether you&apos;re opening a flagship, sponsoring the next major
            event, or booking a concert — the conversation starts here.
          </p>
        </div>

        {!activePath && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {CTA_PATHS.map((path) => (
              <button
                key={path.id}
                onClick={() => setActivePath(path.id)}
                className={cn(
                  "cta-card opacity-0 text-left rounded-2xl p-8 border transition-all duration-400 group",
                  `bg-gradient-to-br ${path.color}`,
                  path.borderColor,
                  "hover:scale-[1.02] hover:shadow-xl",
                )}
              >
                <div className="text-4xl mb-4">{path.icon}</div>
                <div className="text-brand-gold text-xs uppercase tracking-widest font-medium mb-1">
                  {path.subtitle}
                </div>
                <h3 className="font-display text-2xl text-brand-white font-light mb-3">
                  {path.title}
                </h3>
                <p className="text-brand-cream/60 text-sm leading-relaxed mb-6">
                  {path.description}
                </p>
                <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-medium group-hover:gap-4 transition-all duration-300">
                  {path.action}
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {activePath && activeCTA && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setActivePath(null)}
              className="flex items-center gap-2 text-brand-white/50 hover:text-brand-white text-xs uppercase tracking-widest mb-8 transition-colors"
            >
              ← Back to options
            </button>

            <div
              className={cn(
                "rounded-2xl p-10 border",
                `bg-gradient-to-br ${activeCTA.color}`,
                activeCTA.borderColor,
              )}
            >
              <div className="text-4xl mb-4">{activeCTA.icon}</div>
              <h3 className="font-display text-2xl text-brand-white mb-2">
                {activeCTA.title} Inquiry
              </h3>
              <p className="text-brand-cream/60 text-sm mb-8">
                {activeCTA.description}
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <div className="text-brand-white font-medium text-lg mb-2">
                    Thank you!
                  </div>
                  <div className="text-brand-cream/60 text-sm">
                    Our team will be in touch within 24 hours.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-brand-white/60 text-xs uppercase tracking-wider block mb-2">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Smith"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-brand-white/60 text-xs uppercase tracking-wider block mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jane@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCTA.fields.map((field) => (
                      <div key={field}>
                        <label className="text-brand-white/60 text-xs uppercase tracking-wider block mb-2">
                          {field}
                        </label>
                        <input
                          type="text"
                          placeholder={field}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field]: e.target.value,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-brand-white/60 text-xs uppercase tracking-wider block mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us more about your vision..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-gold text-brand-black font-semibold text-sm uppercase tracking-widest hover:bg-brand-gold-light transition-colors duration-300"
                  >
                    Submit Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl text-brand-white/40 uppercase tracking-widest">
            American<span className="text-brand-gold">Dream</span>
          </div>
          <div className="flex gap-8 text-brand-white/30 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-brand-white transition-colors">
              americandream.com
            </a>
            <a href="#" className="hover:text-brand-white transition-colors">
              Press
            </a>
            <a href="#" className="hover:text-brand-white transition-colors">
              Careers
            </a>
          </div>
          <div className="text-brand-white/20 text-xs">
            © 2025 American Dream. All rights reserved.
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
