export function CTAButtonGhost({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="
        inline-flex items-center gap-3 px-8 py-4
        border border-brand-gold text-brand-gold
        font-body font-semibold text-sm uppercase tracking-widest
        rounded-none
        transition-all duration-300
        hover:bg-brand-gold hover:text-brand-black
      "
        >
            {children}
        </a>
    );
}