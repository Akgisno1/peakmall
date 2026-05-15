"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useLenisInstance } from "@/components/layout/SmoothScroll";
import { NAV_SCROLL_OFFSET } from "@/lib/assets";

interface NavigationContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  activeSection: "hero",
  setActiveSection: () => {},
  scrollToSection: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");
  const lenis = useLenisInstance();

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      setActiveSection(id);
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -NAV_SCROLL_OFFSET,
          duration: 1.15,
        });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [lenis],
  );

  return (
    <NavigationContext.Provider
      value={{ activeSection, setActiveSection, scrollToSection }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);