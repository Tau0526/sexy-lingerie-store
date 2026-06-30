import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    title: "New In",
    href: "/shop",
    image: "/images/moonlite/image_1.png",
    position: "50% 50%",
  },
  {
    title: "Crotchless Bodysuits",
    href: "/shop",
    image: "/images/moonlite/real-products/blue-lace-bodysuit-01.jpg",
    position: "50% 50%",
  },
  {
    title: "Nightwear",
    href: "/shop",
    image: "/images/moonlite/image_3.png",
    position: "50% 50%",
  },
  {
    title: "Sexy Dresses",
    href: "/shop",
    image: "/images/moonlite/real-products/red-lace-dress-01.png",
    position: "50% 50%",
  },
  {
    title: "Boudoir Accessories",
    href: "/shop",
    image: "/images/moonlite/image_5.png",
    position: "50% 50%",
  },
];

const CategoryNavigation = () => {
  return (
    <section className="mx-auto max-w-frame px-4 pb-8 pt-12 sm:pb-10 sm:pt-14 lg:pb-10 lg:pt-16 xl:px-0">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-lg font-medium uppercase tracking-[0.28em] text-moonlite-espresso sm:text-xl">
          SHOP BY CATEGORY
        </h2>
        <span className="mx-auto mt-4 block h-px w-20 bg-moonlite-bronze/60" />
      </div>

      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group relative block overflow-hidden rounded-md bg-moonlite-cream shadow-moonlite-card outline-none transition duration-500 hover:-translate-y-1 hover:shadow-moonlite-soft focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
          >
            <div className="relative aspect-[4/5] min-h-[240px] overflow-hidden bg-moonlite-cream sm:min-h-[280px] lg:min-h-[320px]">
              <Image
                src={category.image}
                alt={`${category.title} category`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                style={{ objectPosition: category.position }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,33,27,0.02)_35%,rgba(47,33,27,0.48)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(47,33,27,0.04)_24%,rgba(47,33,27,0.6)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                <span className="max-w-[150px] text-left text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-moonlite-ivory drop-shadow-sm sm:text-xs sm:tracking-[0.16em]">
                  {category.title}
                </span>
                <span
                  aria-hidden="true"
                  className="mb-0.5 shrink-0 text-lg leading-none text-moonlite-ivory transition-transform duration-500 group-hover:translate-x-1"
                >
                  -&gt;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryNavigation;
