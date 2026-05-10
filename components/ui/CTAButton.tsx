export function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="
        inline-flex items-center gap-3 px-8 py-4
        bg-brand-gold text-brand-black
        font-body font-semibold text-sm uppercase tracking-widest
        rounded-none  /* Luxury = no border radius on primary CTA */
        transition-all duration-300
        hover:bg-brand-gold-light hover:gap-5
        group
      "
        >
            {children}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
    );
}