interface StatCardProps {
    value: string;
    label: string;
    sublabel?: string;
}

export function StatCard({ value, label, sublabel }: StatCardProps) {
    return (
        <div className="glass rounded-xl p-6 text-center border border-brand-gold/20">
            <div className="text-stat text-gradient-gold font-display mb-2">{value}</div>
            <div className="text-brand-white font-medium text-sm uppercase tracking-wider">{label}</div>
            {sublabel && (
                <div className="text-brand-cream/60 text-xs mt-1">{sublabel}</div>
            )}
        </div>
    );
}