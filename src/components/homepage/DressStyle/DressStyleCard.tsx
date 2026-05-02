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
        "w-full md:h-full rounded-[18px] bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover text-white transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(155,223,255,0.12)]",
        className,
      ])}
    >
      {title}
    </Link>
  );
};

export default DressStyleCard;
