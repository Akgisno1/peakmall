import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/lib/context/NavigationContext";
import { SmoothScrollProvider } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-stack-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-stack-display",
  display: "swap",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-brand-black text-brand-white antialiased"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}