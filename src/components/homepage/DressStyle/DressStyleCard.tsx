import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const DressStyleCard = ({ title, url, className }: DressStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "group relative flex w-full items-end overflow-hidden bg-cover bg-top bg-no-repeat px-6 py-5 text-left text-2xl font-medium text-[#F2EADC] transition-all duration-700 ease-out hover:-translate-y-1 md:h-full md:px-9 md:py-8 md:text-4xl",
        className,
      ])}
    >
      <span className="absolute inset-0 bg-[#2A1820]/0 transition-colors duration-700 group-hover:bg-[#2A1820]/14" />
      <span className="relative border-b border-[#F2EADC]/45 pb-2 transition-colors group-hover:border-[#9C7548]">
        {title}
      </span>
    </Link>
  );
};

export default DressStyleCard;
