import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "All",
    slug: "/shop",
  },
  {
    title: "Lingerie Sets",
    slug: "/shop?category=Lingerie+Sets",
  },
  {
    title: "Sleepwear",
    slug: "/shop?category=Sleepwear",
  },
  {
    title: "Slips & Chemises",
    slug: "/shop?category=Slips+%26+Chemises",
  },
  {
    title: "Costumes",
    slug: "/shop?category=Costumes",
  },
  {
    title: "Accessories",
    slug: "/shop?category=Accessories",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-white/65">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2 transition-colors hover:text-[#9bdfff]"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
