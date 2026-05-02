import React from "react";

const highlightsData = [
  "Discreet UK delivery",
  "Elegant lingerie sets",
  "Soft sleepwear",
  "Inclusive sizing",
  "Private boutique feel",
];

const Brands = () => {
  return (
    <div className="border-y border-white/10 bg-[#0d0d15]">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-5 text-center md:justify-between xl:px-0">
        {highlightsData.map((item) => (
          <span
            key={item}
            className="text-xs font-medium uppercase tracking-[0.22em] text-white/62"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
