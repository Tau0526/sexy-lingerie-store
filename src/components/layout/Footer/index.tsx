import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { SocialNetworks } from "./footer.types";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import Image from "next/image";
import LayoutSpacing from "./LayoutSpacing";
import NewsletterMock from "@/components/homepage/NewsletterMock";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://instagram.com/Moonlite.studio_",
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[#9C7548]/20 bg-[#2A1820] px-4 pt-10 text-[#F2EADC] md:pt-14"
    >
      <div className="pointer-events-none absolute right-[-8%] top-[-24%] h-[360px] w-[360px] rounded-full bg-[#9C7548]/12 blur-3xl" />
      <div className="mx-auto max-w-frame">
        <nav className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:max-w-[380px]">
            <Link href="/" className="mb-5 flex w-fit items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center">
                <Image
                  priority
                  src="/brand/main-logo.png"
                  height={48}
                  width={48}
                  alt="Moonlite Studio logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <span
                className={cn([
                  integralCF.className,
                  "text-[24px] text-[#F2EADC] lg:text-[30px]",
                ])}
              >
                Moonlite Studio
              </span>
            </Link>
            <p className="mb-4 text-sm leading-6 text-[#E8DECD]/72">
              Intimate pieces designed for softness, discretion and quiet
              allure.
            </p>
            <p className="mb-5 font-serif text-lg italic leading-7 text-[#C9A28F]">
              Pamper Yourself, Embrace Your Desires
            </p>
            <p className="mb-5 border-l border-[#9C7548]/45 bg-[#F2EADC]/5 px-4 py-3 text-sm leading-6 text-[#E8DECD]/78">
              Discreet UK packaging available. Free UK delivery over £50.
            </p>
            <Link
              href="mailto:Kayee7601@gmail.com"
              className="moonlite-link mb-2 block w-fit text-sm text-[#E8DECD]/82"
            >
              Email: Kayee7601@gmail.com
            </Link>
            <Link
              href="https://instagram.com/Moonlite.studio_"
              className="moonlite-link mb-6 block w-fit text-sm text-[#E8DECD]/62"
            >
              Instagram: Moonlite.studio_
            </Link>
            <div className="flex items-center">
              {socialsData.map((social) => (
                <Link
                  href={social.url}
                  key={social.id}
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#9C7548]/28 bg-[#F2EADC]/6 p-1.5 text-[#F2EADC] transition-all hover:border-[#9C7548] hover:text-[#9C7548]"
                  aria-label="Moonlite Studio Instagram"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
            <LinksSection />
          </div>
        </nav>

        <div className="mt-10 border-t border-[#9C7548]/22 pt-8">
          <NewsletterMock variant="footer" />
        </div>

        <hr className="mb-6 mt-10 h-[1px] border-t-[#9C7548]/22" />
        <div className="mb-2 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-center text-sm text-[#E8DECD]/48 sm:text-left">
            Moonlite Studio. UK intimate apparel with privacy-minded delivery.
          </p>
          <p className="text-center text-sm text-[#E8DECD]/48 sm:text-right">
            GBP pricing. Tasteful 18+ storefront.
          </p>
        </div>
      </div>
      <LayoutSpacing />
    </footer>
  );
};

export default Footer;
