import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "shop",
    children: [
      {
        id: 11,
        label: "New In",
        url: "/shop#new-arrivals",
      },
      {
        id: 12,
        label: "Lingerie Sets",
        url: "/shop#lingerie-sets",
      },
      {
        id: 13,
        label: "Sleepwear",
        url: "/shop#sleepwear",
      },
      {
        id: 14,
        label: "Accessories",
        url: "/shop#accessories",
      },
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      {
        id: 21,
        label: "Shipping",
        url: "/shipping",
      },
      {
        id: 22,
        label: "Returns",
        url: "/returns",
      },
      {
        id: 23,
        label: "Size Guide",
        url: "/size-guide",
      },
      {
        id: 24,
        label: "Privacy",
        url: "/privacy",
      },
    ],
  },
  {
    id: 3,
    title: "studio",
    children: [
      {
        id: 31,
        label: "About Moonlite",
        url: "/#about",
      },
      {
        id: 32,
        label: "Discreet Packaging",
        url: "/#packaging",
      },
      {
        id: 33,
        label: "Contact",
        url: "/#contact",
      },
      {
        id: 34,
        label: "Instagram",
        url: "https://instagram.com/Moonlite.studio_",
      },
    ],
  },
  {
    id: 4,
    title: "contact",
    children: [
      {
        id: 41,
        label: "Kayee7601@gmail.com",
        url: "mailto:Kayee7601@gmail.com",
      },
      {
        id: 42,
        label: "Moonlite.studio_",
        url: "https://instagram.com/Moonlite.studio_",
      },
      {
        id: 43,
        label: "UK boutique brand",
        url: "/",
      },
      {
        id: 44,
        label: "18+ tasteful intimates",
        url: "/",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6 text-white">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-white/55 hover:text-[#9bdfff] transition-colors text-sm md:text-base mb-4 w-fit"
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
