import { Product } from "@/types/product.types";
import Link from "next/link";
import React from "react";

const EnquireNowBtn = ({ data }: { data: Product }) => {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-3 text-xs leading-5 text-moonlite-taupe sm:text-sm">
        Interested in this piece?
        <br />
        Contact us for availability and enquiries.
      </p>
      <Link
        href={`/contact?piece=${encodeURIComponent(data.title)}`}
        className="silk-shimmer flex h-12 w-full items-center justify-center rounded-sm border border-moonlite-bronze bg-moonlite-bronze text-sm font-medium uppercase tracking-[0.12em] text-moonlite-ivory transition-all duration-300 ease-out hover:border-moonlite-hover hover:bg-moonlite-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory sm:text-base md:h-[52px]"
      >
        ENQUIRE NOW
      </Link>
    </div>
  );
};

export default EnquireNowBtn;
