import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";  // Requires GSAP Club (free trial ok)
import { TextPlugin } from "gsap/TextPlugin";

// Only register on client
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    // SplitText requires Club GSAP — use @gsap/react for free SplitText alternative
}

export { gsap, ScrollTrigger };