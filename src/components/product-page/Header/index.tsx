import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";
import { PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";

const Header = ({ data }: { data: Product }) => {
  const currency = "\u00a3";
  const discountedPrice =
    data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
      ? data.price - data.discount.amount
      : data.price;

  return (
    <>
      <div className="grid grid-cols-1 gap-8 border-b border-[#9C7548]/18 pb-10 text-[#3D2E26] md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div className="moonlite-reveal-delay">
          <PhotoSection data={data} />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-[#9C7548]">{data.category}</span>
          <h1 className="mt-3 mb-4 text-3xl font-medium capitalize leading-tight text-[#3D2E26] md:text-[44px]">
            {data.title}
          </h1>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-6">
            <span className="text-xl font-normal text-[#3D2E26]/78 sm:text-2xl">
              {currency}
              {discountedPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#3D2E26]/64 mb-6 leading-7">
            {data.description}
          </p>
          {data.longDescription && (
            <p className="mb-6 text-sm leading-7 text-[#3D2E26]/62 sm:text-base">
              {data.longDescription}
            </p>
          )}
          <div className="mb-6 grid gap-3 border-l border-[#9C7548]/35 bg-[#E8DECD]/58 p-4 text-sm text-[#3D2E26]/62 transition-colors duration-500 hover:bg-[#E8DECD]/78 sm:grid-cols-2">
            <div>
              <span className="mb-1 block font-medium text-[#3D2E26]">Material</span>
              <p>{data.material}</p>
            </div>
            <div>
              <span className="mb-1 block font-medium text-[#3D2E26]">Care</span>
              <p>{data.care}</p>
            </div>
          </div>
          <hr className="h-[1px] border-t-[#9C7548]/18 mb-5" />
          <ColorSelection data={data} />
          <hr className="h-[1px] border-t-[#9C7548]/18 my-5" />
          <SizeSelection data={data} />
          <div className="my-5 divide-y divide-[#9C7548]/18 border-y border-[#9C7548]/18 bg-[#E8DECD]/52">
            {[
              {
                title: "Discreet UK Packaging",
                body: "Prepared in plain outer packaging for privacy.",
                icon: PackageCheck,
              },
              {
                title: "Free UK delivery over £50",
                body: "Delivery is calculated at checkout before mock order placement.",
                icon: Truck,
              },
              {
                title: "Hygiene-conscious returns",
                body: "Unopened, unworn pieces may be eligible unless faulty.",
                icon: ShieldCheck,
              },
              {
                title: "Size guidance available",
                body: "Use our size guide for a softer, more confident fit.",
                icon: Ruler,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3 px-4 py-4 transition-colors duration-300 hover:bg-[#F2EADC]/42">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#9C7548]" />
                  <div>
                    <h2 className="mb-1 text-sm font-medium text-[#3D2E26]">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-6 text-[#3D2E26]/62">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="hidden md:block h-[1px] border-t-[#9C7548]/18 my-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
