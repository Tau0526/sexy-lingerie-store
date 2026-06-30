import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { moonliteLogo } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";

const quickLinks = [
  { label: "UK Delivery", href: "/shipping" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "FAQs", href: "/faq" },
];

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-moonlite-espresso"
          aria-label="Open navigation menu"
        >
          <Image
            priority
            src="/icons/menu.svg"
            height={22}
            width={22}
            alt=""
            className="h-[22px] w-[22px]"
          />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="overflow-y-auto border-moonlite-border/70 bg-moonlite-ivory text-moonlite-espresso"
      >
        <SheetHeader className="mb-8">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href="/" className="flex flex-col items-start">
                <span
                  className={cn([
                    moonliteLogo.className,
                    "text-[32px] font-normal uppercase leading-[0.9] tracking-[0.16em] text-moonlite-espresso",
                  ])}
                >
                  MOONLITE
                </span>
                <span className="mt-1 text-[9px] font-medium uppercase leading-none tracking-[0.38em] text-moonlite-cocoa/78">
                  INTIMATES
                </span>
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <SheetClose asChild>
          <Link
            href="/products"
            className="mb-6 flex h-11 items-center rounded-full border border-moonlite-border/80 bg-moonlite-card/72 px-4 text-sm text-moonlite-taupe transition-colors hover:border-moonlite-bronze/70 hover:text-moonlite-bronze"
            aria-label="Search products"
          >
            <Image
              priority
              src="/icons/search.svg"
              height={17}
              width={17}
              alt=""
              className="mr-3 h-[17px] w-[17px] opacity-60"
            />
            <span className="truncate">Search product or collections</span>
          </Link>
        </SheetClose>

        <Accordion
          type="single"
          collapsible
          className="w-full border-y border-moonlite-border/60"
        >
          {data.map((item) =>
            item.type === "MenuItem" ? (
              <div key={item.id} className="border-b border-moonlite-border/60">
                <SheetClose asChild>
                  <Link
                    href={item.url ?? "/"}
                    className="block py-4 text-sm font-medium uppercase tracking-[0.16em] text-moonlite-espresso/78 transition-colors hover:text-moonlite-bronze"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </div>
            ) : (
              <AccordionItem
                key={item.id}
                value={`nav-${item.id}`}
                className="border-moonlite-border/60"
              >
                <AccordionTrigger className="py-4 text-sm font-medium uppercase tracking-[0.16em] text-moonlite-espresso/78 hover:text-moonlite-bronze hover:no-underline">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-1 pb-4">
                    {item.children.map((child) => (
                      <SheetClose key={child.id} asChild>
                        <Link
                          href={child.url ?? "/"}
                          className="block rounded-sm px-3 py-2.5 text-sm text-moonlite-espresso/70 transition-colors hover:bg-moonlite-cream hover:text-moonlite-bronze"
                        >
                          <span className="block font-medium">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="mt-1 block text-xs leading-5 text-moonlite-taupe">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>

        <div className="mt-8 border-t border-moonlite-border/60 pt-5">
          <span className="mb-4 block text-[11px] uppercase tracking-[0.2em] text-moonlite-bronze">
            Quick Links
          </span>
          <div className="flex flex-col items-start gap-3">
            {quickLinks.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link
                  href={link.href}
                  className="text-xs uppercase tracking-[0.14em] text-moonlite-espresso/62 transition-colors hover:text-moonlite-bronze"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>

        <div className="mt-7 border-t border-moonlite-border/60 pt-5">
          <SheetClose asChild>
            <Link
              href="/products"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-moonlite-espresso/62 transition-colors hover:text-moonlite-bronze"
            >
              <Image
                priority
                src="/icons/search.svg"
                height={16}
                width={16}
                alt=""
                className="h-4 w-4 opacity-65"
              />
              Search
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;
