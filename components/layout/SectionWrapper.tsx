interface SectionWrapperProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    minHeight?: string;
}

export function SectionWrapper({
    id,
    className = "",
    children,
    minHeight = "min-h-screen",
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative w-full ${minHeight} flex flex-col scroll-mt-[88px] ${className}`}
        >
            {children}
        </section>
    );
}