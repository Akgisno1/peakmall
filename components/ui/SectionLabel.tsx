export function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sub tracking-widest text-brand-gold text-sm font-medium uppercase mb-4">
            {children}
        </p>
    );
}