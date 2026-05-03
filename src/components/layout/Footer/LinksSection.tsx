import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import CookiePreferencesButton from "@/components/cookie-consent/CookiePreferencesButton";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "Shop",
    children: [
      {
        id: 12,
        label: "New In",
        url: "/shop",
      },
      {
        id: 13,
        label: "Lingerie Sets",
        url: "/shop?category=Lingerie+Sets",
      },
      {
        id: 14,
        label: "Sleepwear",
        url: "/shop?category=Sleepwear",
      },
      {
        id: 15,
        label: "Accessories",
        url: "/shop?category=Accessories",
      },
      {
        id: 16,
        label: "Private Edit",
        url: "/shop?edit=private-edit",
      },
    ],
  },
  {
    id: 2,
    title: "Help",
    children: [
      {
        id: 21,
        label: "Size Guide",
        url: "/size-guide",
      },
      {
        id: 22,
        label: "Shipping",
        url: "/shipping",
      },
      {
        id: 23,
        label: "Returns",
        url: "/returns",
      },
      {
        id: 24,
        label: "FAQ",
        url: "/faq",
      },
      {
        id: 25,
        label: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    id: 3,
    title: "Contact / Legal",
    children: [
      {
        id: 31,
        label: "Kayee7601@gmail.com",
        url: "mailto:Kayee7601@gmail.com",
      },
      {
        id: 32,
        label: "Instagram: Moonlite.studio_",
        url: "https://instagram.com/Moonlite.studio_",
      },
      {
        id: 33,
        label: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        id: 34,
        label: "Cookie Policy",
        url: "/cookie-policy",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="mt-5 flex flex-col" key={item.id}>
          <h3 className="mb-6 text-sm font-medium uppercase text-[#F2EADC] md:text-base">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="moonlite-link mb-4 w-fit text-sm text-[#E8DECD]/58 md:text-base"
            >
              {link.label}
            </Link>
          ))}
          {item.title === "Contact / Legal" && (
            <CookiePreferencesButton className="moonlite-link mb-4 w-fit text-left text-sm text-[#E8DECD]/58 md:text-base" />
          )}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
