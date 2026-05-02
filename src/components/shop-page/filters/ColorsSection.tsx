"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";

const ColorsSection = () => {
  const [selected, setSelected] = useState<string>("bg-[#2A1820]");

  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className="border-none">
        <AccordionTrigger className="text-[#3D2E26] font-medium text-base hover:no-underline p-0 py-0.5">
          Colors
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {[
              "bg-[#2A1820]",
              "bg-[#F2EADC]",
              "bg-[#E8DECD]",
              "bg-[#9C7548]",
              "bg-[#C9A28F]",
            ].map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  color,
                  "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-[#9C7548]/25",
                ])}
                onClick={() => setSelected(color)}
              >
                {selected === color && (
                  <IoMdCheckmark className="text-base text-[#F2EADC]" />
                )}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorsSection;
