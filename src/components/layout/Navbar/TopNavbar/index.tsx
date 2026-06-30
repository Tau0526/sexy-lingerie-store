import { cn } from "@/lib/utils";
import { moonliteLogo } from "@/styles/fonts";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import AccountBtn from "./AccountBtn";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuList } from "./MenuList";
import { MenuItem } from "./MenuItem";

const data: NavMenu = [
  {
    id: 1,
    label: "Home",
    type: "MenuItem",
    url: "/",
    children: [],
  },
  {
    id: 2,
    label: "New In",
    type: "MenuList",
    featuredTitle: "New In",
    featuredText: "Fresh arrivals, best sellers and gift-ready pieces.",
    featuredHref: "/shop",
    children: [
      {
        id: 101,
        label: "Latest Arrivals",
        url: "/shop",
        description: "Fresh pieces just added",
      },
      {
        id: 102,
        label: "Best Sellers",
        url: "/shop?sort=best-sellers",
        description: "Most-loved Moonlite styles",
      },
      {
        id: 103,
        label: "Limited Edit",
        url: "/shop?tag=limited-edit",
        description: "Small-run statement pieces",
      },
      {
        id: 104,
        label: "Gift Ready",
        url: "/shop?tag=gift-ready",
        description: "Considered pieces for private gifting",
      },
    ],
  },
  {
    id: 3,
    label: "Crotchless Bodysuits",
    type: "MenuList",
    featuredTitle: "Crotchless Bodysuits",
    featuredText: "Sculpted silhouettes with private detail",
    featuredHref: "/shop?category=crotchless-bodysuits",
    children: [
      {
        id: 301,
        label: "Lace Bodysuits",
        url: "/shop?category=lace-bodysuits",
        description: "Delicate all-in-one lace",
      },
      {
        id: 302,
        label: "Sheer Bodysuits",
        url: "/shop?category=sheer-bodysuits",
        description: "Soft sheer structure",
      },
      {
        id: 303,
        label: "Black Bodysuits",
        url: "/shop?category=black-bodysuits",
        description: "Deep classic tones",
      },
      {
        id: 304,
        label: "Soft Neutrals",
        url: "/shop?category=soft-neutrals",
        description: "Ivory, champagne and taupe edits",
      },
    ],
  },
  {
    id: 4,
    type: "MenuList",
    label: "Nightwear",
    featuredTitle: "Nightwear",
    featuredText: "Satin, lace and lounge pieces for slow evenings",
    featuredHref: "/shop?category=satin-nightwear",
    children: [
      {
        id: 401,
        label: "Slip Dresses",
        url: "/shop?category=slips-chemises",
        description: "Soft drape and gentle lines",
      },
      {
        id: 402,
        label: "Robes",
        url: "/shop?category=robes",
        description: "Layered dressing moments",
      },
      {
        id: 403,
        label: "Satin Sets",
        url: "/shop?category=satin-nightwear",
        description: "Champagne-smooth finish",
      },
      {
        id: 404,
        label: "Sleepwear",
        url: "/shop?category=lounge-sleep",
        description: "Relaxed private comfort",
      },
    ],
  },
  {
    id: 5,
    type: "MenuList",
    label: "Sexy Dresses",
    featuredTitle: "Sexy Dresses",
    featuredText: "Sheer, satin and occasion silhouettes",
    featuredHref: "/shop?category=sexy-dresses",
    children: [
      {
        id: 501,
        label: "Mini Dresses",
        url: "/shop?category=mini-dresses",
        description: "Short after-dark shapes",
      },
      {
        id: 502,
        label: "Lace Dresses",
        url: "/shop?category=lace-dresses",
        description: "Romantic textured finishes",
      },
      {
        id: 503,
        label: "Date Night",
        url: "/shop?category=date-night",
        description: "Confident evening cuts",
      },
      {
        id: 504,
        label: "After Dark Edit",
        url: "/shop?category=after-dark",
        description: "Bold private occasion pieces",
      },
    ],
  },
  {
    id: 6,
    type: "MenuList",
    label: "Boudoir Accessories",
    featuredTitle: "Boudoir Accessories",
    featuredText: "Finishing touches for boudoir styling",
    featuredHref: "/shop?category=boudoir-accessories",
    children: [
      {
        id: 601,
        label: "Stockings",
        url: "/shop?category=stockings",
        description: "Classic legwear accents",
      },
      {
        id: 602,
        label: "Garters",
        url: "/shop?category=garters",
        description: "Delicate styling accents",
      },
      {
        id: 603,
        label: "Gift Sets",
        url: "/shop?category=gift-sets",
        description: "Curated intimate gifting",
      },
      {
        id: 604,
        label: "Care Accessories",
        url: "/shop?category=care-accessories",
        description: "Keep delicate pieces beautiful",
      },
    ],
  },
  {
    id: 7,
    type: "MenuList",
    label: "Guide",
    featuredTitle: "Guide",
    featuredText: "Sizing, care and practical support",
    featuredHref: "/size-guide",
    children: [
      {
        id: 701,
        label: "Size Guide",
        url: "/size-guide",
        description: "Find your best fit",
      },
      {
        id: 702,
        label: "Care / Washing Guide",
        url: "/faq#care",
        description: "Keep pieces beautiful",
      },
      {
        id: 703,
        label: "Shipping & Delivery",
        url: "/shipping",
        description: "Shipping information",
      },
      {
        id: 704,
        label: "Returns",
        url: "/returns",
        description: "Return policy details",
      },
      {
        id: 705,
        label: "FAQs",
        url: "/faq",
        description: "Common questions",
      },
    ],
  },
];

const auxiliaryLinks = [
  { label: "UK", href: "/shipping" },
  { label: "Size Guide", href: "/size-guide" },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 z-20 border-b border-moonlite-border/70 bg-moonlite-ivory/96 text-moonlite-espresso shadow-[0_8px_24px_rgba(47,33,27,0.035)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid min-h-[70px] grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-moonlite-border/60 py-2.5 lg:min-h-[86px]">
          <div className="flex min-w-0 items-center">
            <div className="block md:hidden">
              <ResTopNavbar data={data} />
            </div>
            <div className="hidden min-w-0 items-center gap-5 lg:flex">
              {auxiliaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="moonlite-link whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.14em] text-moonlite-espresso/62 transition-colors hover:text-moonlite-bronze"
                >
                  {link.label === "UK" ? "UK" : link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="flex min-w-0 flex-col items-center justify-center text-center"
            aria-label="Moonlite Studio home"
          >
            <span
              className={cn([
                moonliteLogo.className,
                "whitespace-nowrap text-[28px] font-normal uppercase leading-[0.9] tracking-[0.16em] text-moonlite-espresso sm:text-[34px] lg:text-[46px]",
              ])}
            >
              MOONLITE
            </span>
            <span className="mt-0.5 text-[8px] font-medium uppercase leading-none tracking-[0.38em] text-moonlite-cocoa/80 sm:mt-1 sm:text-[10px] lg:text-[11px]">
              INTIMATES
            </span>
          </Link>

          <div className="flex min-w-0 items-center justify-end gap-1.5 sm:gap-2">
            <InputGroup className="mr-1 hidden h-10 w-[230px] rounded-full border-moonlite-border/80 bg-moonlite-card/72 pl-4 text-moonlite-espresso lg:flex xl:w-[280px]">
              <InputGroup.Text>
                <Image
                  priority
                  src="/icons/search.svg"
                  height={18}
                  width={18}
                  alt="search"
                  className="min-h-[18px] min-w-[18px] opacity-60"
                />
              </InputGroup.Text>
              <InputGroup.Input
                type="search"
                name="search"
                aria-label="Search pieces"
                placeholder="Search product or collections"
                className="text-moonlite-espresso placeholder:text-moonlite-taupe"
              />
            </InputGroup>
            <Link
              href="/products"
              className="flex h-10 w-10 items-center justify-center rounded-sm text-moonlite-espresso/72 transition-colors hover:bg-moonlite-cream/70 hover:text-moonlite-bronze lg:hidden"
              aria-label="Search products"
            >
              <Image
                priority
                src="/icons/search.svg"
                height={20}
                width={20}
                alt=""
                className="h-5 w-5 opacity-75"
              />
            </Link>
            <AccountBtn />
            <Link
              href="/products"
              className="hidden h-10 w-10 items-center justify-center rounded-sm text-moonlite-espresso/72 transition-colors hover:bg-moonlite-cream/70 hover:text-moonlite-bronze sm:flex"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={1.6} />
            </Link>
            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-sm text-moonlite-espresso/72 transition-colors hover:bg-moonlite-cream/70 hover:text-moonlite-bronze"
              aria-label="Open shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.55} />
              <span className="absolute -right-0.5 -top-0.5 min-w-4 rounded-full border border-moonlite-ivory bg-moonlite-espresso px-1 text-center text-[10px] leading-4 text-moonlite-ivory">
                0
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden justify-center py-3 lg:flex">
          <NavigationMenu className="w-full max-w-none justify-center">
            <NavigationMenuList className="flex w-full justify-center gap-1 space-x-0 xl:gap-2">
              {data.map((item) =>
                item.type === "MenuItem" ? (
                  <MenuItem key={item.id} label={item.label} url={item.url} />
                ) : (
                  <MenuList
                    key={item.id}
                    data={item.children}
                    label={item.label}
                    featuredTitle={item.featuredTitle}
                    featuredText={item.featuredText}
                    featuredHref={item.featuredHref}
                  />
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
