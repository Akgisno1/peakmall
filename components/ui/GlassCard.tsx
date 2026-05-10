interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    goldBorder?: boolean;
}

export function GlassCard({ children, className = "", goldBorder = false }: GlassCardProps) {
    return (
        <div
            className={`
        rounded-2xl p-8
        bg-white/5 backdrop-blur-md
        border ${goldBorder ? "border-brand-gold/30" : "border-white/8"}
        transition-all duration-500
        hover:bg-white/8 hover:border-brand-gold/50
        ${className}
      `}
        >
            {children}
        </div>
    );
}