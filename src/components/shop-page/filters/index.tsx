import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";

const Filters = () => {
  return (
    <div className="mt-5 space-y-5 md:space-y-6">
      <hr className="border-t-white/10" />
      <CategoriesSection />
      <hr className="border-t-white/10" />
      <PriceSection />
      <hr className="border-t-white/10" />
      <ColorsSection />
      <hr className="border-t-white/10" />
      <SizeSection />
    </div>
  );
};

export default Filters;
