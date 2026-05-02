import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "Shop",
    children: [
      {
        id: 11,
        label: "Shop",
        url: "/shop",
      },
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
    ],
  },
  {
    id: 2,
    title: "Care",
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
        label: "Discreet Packaging",
        url: "/#packaging",
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    children: [
      {
        id: 31,
        label: "Contact",
        url: "/#contact",
      },
      {
        id: 32,
        label: "Kayee7601@gmail.com",
        url: "mailto:Kayee7601@gmail.com",
      },
      {
        id: 33,
        label: "Instagram: Moonlite.studio_",
        url: "https://instagram.com/Moonlite.studio_",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase mb-6 text-[#F2EADC]">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-[#E8DECD]/58 hover:text-[#9C7548] transition-colors text-sm md:text-base mb-4 w-fit"
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
