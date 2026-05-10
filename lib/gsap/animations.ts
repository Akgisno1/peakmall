import { gsap, ScrollTrigger } from "./config";
import { EASINGS, DURATIONS, STAGGER } from "./easings";

export function revealOnScroll(
    elements: string | Element,
    trigger: string | Element,
    options: { y?: number; delay?: number } = {}
) {
    return gsap.fromTo(
        elements,
        { y: options.y ?? 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: DURATIONS.medium,
            ease: EASINGS.luxury,
            delay: options.delay ?? 0,
            scrollTrigger: {
                trigger,
                start: "top 75%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        }
    );
}

export function staggerReveal(
    elements: string,
    trigger: string | Element,
    staggerAmount = STAGGER.medium
) {
    return gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: DURATIONS.medium,
            ease: EASINGS.snap,
            stagger: staggerAmount,
            scrollTrigger: {
                trigger,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        }
    );
}