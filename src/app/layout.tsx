import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import AgeGate from "@/components/age-gate/AgeGate";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
import HolyLoader from "holy-loader";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Moonlite Studio",
  description:
    "Elegant intimate apparel, lingerie sets and sensual sleepwear for the UK market.",
};

export const viewport: Viewport = {
  themeColor: "#F2EADC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <HolyLoader color="#9C7548" />
        <AgeGate />
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
