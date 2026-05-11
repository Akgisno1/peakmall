"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { SECTIONS } from "@/lib/data/sections";

interface NavigationContextType {
    activeSection: string;
    setActiveSection: (id: string) => void;
    scrollToSection: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
    activeSection: "hero",
    setActiveSection: () => { },
    scrollToSection: () => { },
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState("hero");

    const scrollToSection = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
        }
    }, []);

    return (
        <NavigationContext.Provider value={{ activeSection, setActiveSection, scrollToSection }
        }>
            {children}
        </NavigationContext.Provider>
    );
}

export const useNavigation = () => useContext(NavigationContext);