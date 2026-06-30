import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const promoBanners = [
  {
    title: "LUXURY NIGHTWEAR",
    body: "Designed for golden evenings & slow mornings.",
    cta: "SHOP NIGHTWEAR ->",
    href: "/shop",
    image: "/images/moonlite/image_12.png",
    hasEmbeddedCopy: false,
  },
  {
    title: "THE ART OF DETAIL",
    body: "Exquisite fabrics. Flattering fits. Timeless sensuality.",
    cta: "EXPLORE NOW ->",
    href: "/shop",
    image: "/images/moonlite/image_13.png",
    hasEmbeddedCopy: true,
  },
  {
    title: "PERFECT FOR EVERY MOMENT",
    body: "From everyday indulgence to unforgettable nights.",
    cta: "SHOP ACCESSORIES ->",
    href: "/shop",
    image: "/images/moonlite/image_14.png",
    hasEmbeddedCopy: true,
  },
];

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="mx-auto max-w-frame border-y border-[#9C7548]/18 py-8 sm:py-10">
        <motion.div
          initial={{ y: "60px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 md:grid-cols-3 lg:gap-5"
        >
          {promoBanners.map((banner) => (
            <Link
              key={banner.title}
              href={banner.href}
              aria-label={`${banner.title}. ${banner.body} ${banner.cta}`}
              className="group relative block h-[180px] overflow-hidden rounded-md bg-moonlite-cream text-left shadow-moonlite-card outline-none transition duration-500 hover:-translate-y-1 hover:shadow-moonlite-soft focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory sm:h-[190px] lg:h-[200px]"
            >
              <Image
                src={banner.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,247,239,0.72)_0%,rgba(251,247,239,0.38)_45%,rgba(251,247,239,0.04)_100%)] transition duration-500 group-hover:bg-[linear-gradient(90deg,rgba(251,247,239,0.62)_0%,rgba(251,247,239,0.28)_45%,rgba(251,247,239,0.03)_100%)]" />
              {!banner.hasEmbeddedCopy && (
                <span className="absolute left-5 top-5 max-w-[190px] sm:left-6 sm:top-6">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-moonlite-espresso">
                    {banner.title}
                  </span>
                  <span className="mt-3 block max-w-[180px] text-sm leading-6 text-moonlite-espresso/68">
                    {banner.body}
                  </span>
                </span>
              )}
              <span className="absolute bottom-5 left-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-moonlite-bronze transition duration-500 group-hover:translate-x-1 sm:left-6">
                {banner.cta}
              </span>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
