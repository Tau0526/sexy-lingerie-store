import { cn } from "@/lib/utils";
import { moonliteLogo } from "@/styles/fonts";
import React from "react";
import { FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa6";
import Link from "next/link";
import LayoutSpacing from "./LayoutSpacing";

const shopLinks = [
  { label: "New In", href: "/shop" },
  { label: "Best Sellers", href: "/shop" },
  { label: "Lingerie Sets", href: "/shop" },
  { label: "Bodysuits", href: "/shop" },
  { label: "Nightwear", href: "/shop" },
  { label: "Dresses", href: "/shop" },
  { label: "Accessories", href: "/shop" },
];

const customerCareLinks = [
  { label: "Size Guide", href: "/size-guide" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const aboutLinks = [
  { label: "Our Story", href: "/shop" },
  { label: "Lookbook", href: "/shop" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/privacy-policy" },
];

type SocialLink = {
  label: string;
  href?: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/Moonlite.studio_",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    icon: <FaTiktok />,
  },
  {
    label: "Pinterest",
    icon: <FaPinterestP />,
  },
];

const footerNotes = ["Wishlist friendly", "Product enquiries", "Sizing support"];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-moonlite-border/70 bg-moonlite-ivory px-4 pt-12 text-moonlite-espresso md:pt-16"
    >
      <div className="mx-auto max-w-frame">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr_1.35fr] lg:gap-12">
          <section className="max-w-[320px]">
            <Link href="/" className="mb-5 block w-fit">
              <span
                className={cn([
                  moonliteLogo.className,
                  "block text-[34px] font-normal uppercase leading-[0.9] tracking-[0.16em] text-moonlite-espresso sm:text-[40px]",
                ])}
              >
                MOONLITE
                <span className="block">INTIMATES</span>
              </span>
            </Link>
            <p className="mb-6 max-w-[260px] text-sm leading-7 text-moonlite-taupe">
              Luxury intimates designed to empower and enchant.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                social.href ? (
                  <Link
                    href={social.href}
                    key={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-moonlite-border/80 bg-moonlite-card/68 text-moonlite-bronze transition-colors hover:border-moonlite-bronze hover:bg-moonlite-cream"
                    aria-label={`Moonlite Intimates ${social.label}`}
                  >
                    {social.icon}
                  </Link>
                ) : (
                  <span
                    key={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-moonlite-border/80 bg-moonlite-card/68 text-moonlite-bronze"
                    aria-label={`Moonlite Intimates ${social.label}`}
                    role="img"
                  >
                    {social.icon}
                  </span>
                )
              ))}
            </div>
          </section>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="SHOP" links={shopLinks} />
            <FooterColumn title="CUSTOMER CARE" links={customerCareLinks} />
            <FooterColumn title="ABOUT" links={aboutLinks} />
          </div>

          <section>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlite-espresso">
              JOIN OUR VIP LIST
            </h3>
            <p className="mb-5 max-w-[330px] text-sm leading-7 text-moonlite-taupe">
              Be the first to know about new arrivals, exclusive offers and
              more.
            </p>
            <div className="flex h-12 w-full max-w-[360px] overflow-hidden rounded-sm border border-moonlite-border/90 bg-moonlite-card">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-moonlite-espresso outline-none placeholder:text-moonlite-taupe"
              />
              <button
                type="button"
                className="flex w-12 items-center justify-center bg-moonlite-bronze text-lg leading-none text-moonlite-ivory transition-colors hover:bg-moonlite-hover"
                aria-label="Submit newsletter signup"
              >
                -&gt;
              </button>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-moonlite-border/70 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-moonlite-taupe">
            &copy; 2024 Moonlite Intimates. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            {footerNotes.map((label) => (
              <span
                key={label}
                className="rounded-sm border border-moonlite-border/80 bg-moonlite-card/68 px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-moonlite-taupe"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <LayoutSpacing />
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <section>
    <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlite-espresso">
      {title}
    </h3>
    <div className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="w-fit text-sm leading-5 text-moonlite-taupe transition-colors hover:text-moonlite-bronze"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </section>
);

export default Footer;
