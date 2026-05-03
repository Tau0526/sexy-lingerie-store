import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { PackageCheck, Ruler, Shirt, Sparkles } from "lucide-react";
import NewsletterMock from "./NewsletterMock";

const moodItems = [
  {
    title: "Lingerie Sets",
    copy: "Refined lace pieces for moonlit confidence.",
    href: "/shop?category=Lingerie+Sets",
  },
  {
    title: "Noir Lace",
    copy: "Deep tones, delicate textures and quiet allure.",
    href: "/shop",
  },
  {
    title: "Soft Sleepwear",
    copy: "Gentle pieces for slower evenings.",
    href: "/shop?category=Sleepwear",
  },
  {
    title: "Accessories",
    copy: "Finishing touches for private styling.",
    href: "/shop?category=Accessories",
  },
  {
    title: "Private Edit",
    copy: "Curated details for intimate moments.",
    href: "/shop",
  },
];

const careItems = [
  {
    icon: PackageCheck,
    title: "Discreet UK Packaging",
    copy: "Plain outer packaging prepared for privacy.",
    href: "/shipping",
    linkLabel: "Shipping",
  },
  {
    icon: Shirt,
    title: "Delicate Lace Care",
    copy: "Hand wash cold and lay flat to dry.",
    href: "/size-guide",
    linkLabel: "Care notes",
  },
  {
    icon: Ruler,
    title: "Easy Guidance",
    copy: "Size, shipping and returns information available before checkout.",
    href: "/returns",
    linkLabel: "Returns",
  },
];

const noteItems = [
  {
    title: "How to choose your first lace set",
    copy: "A gentle guide to finding a piece that feels soft, flattering and personal.",
    href: "/size-guide",
  },
  {
    title: "Why discreet packaging matters",
    copy: "Privacy is part of the Moonlite Studio experience.",
    href: "/shipping",
  },
  {
    title: "Caring for delicate lace",
    copy: "Simple care notes to help your intimate pieces last longer.",
    href: "/faq",
  },
];

export const ShopByMoodSection = () => {
  return (
    <section className="max-w-frame mx-auto px-4 pt-[64px] sm:pt-24 xl:px-0">
        <div className="mb-8 flex flex-col gap-4 border-b border-[#9C7548]/18 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
              Shop the Moonlite edit
            </span>
            <h2 className="text-3xl font-medium leading-tight text-[#3D2E26] md:text-[44px]">
              Shop by Mood
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#3D2E26]/60 md:text-right">
            Editorial paths into softness, confidence and private styling.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {moodItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex min-h-[210px] flex-col justify-between border border-[#9C7548]/14 bg-[#F2EADC]/40 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#9C7548]/42 hover:bg-[#E8DECD]/62 hover:shadow-[0_22px_60px_rgba(42,24,32,0.08)]"
            >
              <div>
                <span className="mb-8 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-medium text-[#3D2E26]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#3D2E26]/58">
                  {item.copy}
                </p>
              </div>
              <span className="mt-8 w-fit border-b border-[#9C7548]/40 pb-1 text-xs uppercase tracking-[0.18em] text-[#3D2E26]/62 transition-colors group-hover:text-[#9C7548]">
                View edit
              </span>
            </Link>
          ))}
        </div>
      </section>
  );
};

export const FitGuideSection = () => {
  return (
    <section className="max-w-frame mx-auto px-4 pt-[72px] sm:pt-28 xl:px-0">
        <div className="grid gap-6 border-y border-[#9C7548]/18 bg-[#E8DECD]/46 px-5 py-8 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:py-10">
          <div className="flex gap-5">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[#9C7548]/24 text-[#9C7548] sm:flex">
              <Ruler size={22} strokeWidth={1.5} />
            </div>
            <div>
              <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#9C7548]">
                Fit guidance
              </span>
              <h2 className="text-2xl font-medium text-[#3D2E26] md:text-[34px]">
                Find Your Moonlite Fit
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3D2E26]/62 md:text-base">
                A simple size guide for softness, comfort and confidence.
              </p>
            </div>
          </div>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-fit">
            <Link href="/size-guide">View Size Guide</Link>
          </Button>
        </div>
      </section>
  );
};

export const CareDiscretionSection = () => {
  return (
    <section className="max-w-frame mx-auto px-4 pt-[72px] sm:pt-28 xl:px-0">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Care and discretion
          </span>
          <h2 className="text-3xl font-medium leading-tight text-[#3D2E26] md:text-[44px]">
            Carefully Packed. Quietly Delivered.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#3D2E26]/62 md:text-base">
            Every order is prepared in discreet outer packaging, with care
            guidance for delicate lace pieces.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {careItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border-t border-[#9C7548]/24 px-1 py-6"
              >
                <Icon className="mb-5 text-[#9C7548]" size={24} strokeWidth={1.4} />
                <h3 className="text-lg font-medium text-[#3D2E26]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#3D2E26]/60">
                  {item.copy}
                </p>
                <Link
                  href={item.href}
                  className="moonlite-link mt-5 inline-block text-sm text-[#3D2E26]"
                >
                  {item.linkLabel}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#3D2E26]/58">
          <Link href="/shipping" className="moonlite-link">
            Shipping
          </Link>
          <Link href="/returns" className="moonlite-link">
            Returns
          </Link>
          <Link href="/size-guide" className="moonlite-link">
            Size Guide
          </Link>
        </div>
      </section>
  );
};

export const MoonliteNotesSection = () => {
  return (
    <section className="max-w-frame mx-auto px-4 pt-[72px] sm:pt-28 xl:px-0">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
              Advice
            </span>
            <h2 className="text-3xl font-medium leading-tight text-[#3D2E26] md:text-[44px]">
              Moonlite Notes
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#3D2E26]/60 md:text-base">
              Small notes on fit, care and quiet confidence.
            </p>
          </div>
          <Sparkles className="hidden text-[#9C7548]/70 md:block" size={30} strokeWidth={1.4} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {noteItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group border border-[#9C7548]/14 bg-[#F2EADC]/34 p-6 transition-all duration-500 hover:border-[#9C7548]/40 hover:bg-[#F2EADC]/68"
            >
              <span className="mb-8 flex h-10 w-10 items-center justify-center border border-[#9C7548]/24 text-xs tracking-[0.18em] text-[#9C7548]">
                0{index + 1}
              </span>
              <h3 className="text-lg font-medium leading-7 text-[#3D2E26]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#3D2E26]/58">
                {item.copy}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#3D2E26]/58 transition-colors group-hover:text-[#9C7548]">
                Read note
              </span>
            </Link>
          ))}
        </div>
      </section>
  );
};

export const HomeNewsletterSection = () => {
  return (
    <div className="pt-[72px] sm:pt-28">
      <NewsletterMock />
    </div>
  );
};
