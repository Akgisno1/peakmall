export function GoldDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className="h-px flex-1 bg-brand-gold/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <div className="h-px w-12 bg-brand-gold/60" />
        </div>
    );
}