import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const bestSellers = [
  {
    name: "Luna Lace Set",
    price: "\u00A334.00",
    image: "/images/moonlite/image_6.png",
    colors: ["bg-[#111111]", "bg-[#E8D7C4]", "bg-[#B66F7B]"],
  },
  {
    name: "Elysia Bodysuit",
    price: "\u00A338.00",
    image: "/images/moonlite/image_7.png",
    colors: ["bg-[#111111]", "bg-[#F1DFCC]", "bg-[#7D3640]"],
  },
  {
    name: "Valentina Set",
    price: "\u00A334.00",
    image: "/images/moonlite/real-products/red-lace-dress-01.png",
    colors: ["bg-[#111111]", "bg-[#EAD8C2]", "bg-[#C58E8E]"],
  },
  {
    name: "Sienna Bodysuit",
    price: "\u00A336.00",
    image: "/images/moonlite/real-products/blue-lace-bodysuit-01.jpg",
    colors: ["bg-[#15110F]", "bg-[#E6CBB6]", "bg-[#8A4D43]"],
  },
  {
    name: "Noir Lace Bodysuit",
    price: "\u00A340.00",
    image: "/images/moonlite/real-products/black-lace-dress-01.jpg",
    colors: ["bg-[#080808]", "bg-[#E8DDCE]", "bg-[#9B7143]"],
  },
  {
    name: "Chantelle Set",
    price: "\u00A334.00",
    image: "/images/moonlite/image_11.png",
    colors: ["bg-[#111111]", "bg-[#ECDCC9]", "bg-[#B88A95]"],
  },
];

const BestSellers = () => {
  return (
    <section className="relative mx-auto max-w-frame px-4 pb-12 pt-8 text-center sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12 xl:px-0">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-lg font-medium uppercase tracking-[0.28em] text-moonlite-espresso sm:text-xl">
          BEST SELLERS
        </h2>
        <span className="mx-auto mt-4 block h-px w-20 bg-moonlite-bronze/60" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-[48%] z-[2] hidden h-9 w-9 items-center justify-center rounded-full border border-moonlite-border/70 bg-moonlite-card/80 text-moonlite-bronze shadow-moonlite-card xl:left-0 lg:flex"
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-[48%] z-[2] hidden h-9 w-9 items-center justify-center rounded-full border border-moonlite-border/70 bg-moonlite-card/80 text-moonlite-bronze shadow-moonlite-card xl:right-0 lg:flex"
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
        {bestSellers.map((product) => (
          <Link
            key={product.name}
            href="/shop"
            className="group block min-w-0 outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
            aria-label={`Shop ${product.name}`}
          >
            <div className="relative mb-4 flex aspect-[4/5] min-h-[170px] items-center justify-center overflow-hidden rounded-md bg-[#F8F1E8] px-4 py-5 transition duration-500 group-hover:bg-[#F4E9DC] xs:min-h-[190px] sm:min-h-[230px] sm:px-5 sm:py-6 lg:min-h-[250px]">
              <Image
                src={product.image}
                alt={`${product.name} product image`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.035] sm:p-5"
              />
              <span className="absolute right-3 top-3 z-[1] flex h-8 w-8 items-center justify-center rounded-full bg-moonlite-card/82 text-moonlite-bronze shadow-[0_8px_18px_rgba(61,46,38,0.08)] backdrop-blur">
                <Heart size={15} strokeWidth={1.6} />
              </span>
            </div>

            <h3 className="min-h-12 text-center text-sm font-medium leading-6 text-moonlite-espresso">
              {product.name}
            </h3>
            <p className="mt-1 text-center text-sm text-moonlite-taupe">
              {product.price}
            </p>
            <div className="mt-3 flex justify-center gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className={`h-2.5 w-2.5 rounded-full border border-moonlite-border/70 ${color}`}
                />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
