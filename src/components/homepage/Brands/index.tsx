import React from "react";

const highlightsData = [
  "Discreet UK Packaging",
  "Free UK Delivery Over £50",
  "Size Guidance",
  "Private boutique feel",
];

const Brands = () => {
  return (
    <div className="max-w-frame mx-auto mt-10 border-y border-[#D8B98A]/42 bg-[#FAF7F1]/58 px-4 xl:px-0">
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-3 text-center md:justify-between">
        {highlightsData.map((item) => (
          <span
            key={item}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#3D2E26]/58"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
