"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const SizeSection = () => {
  const [selected, setSelected] = useState<string>("M");

  return (
    <Accordion type="single" collapsible defaultValue="filter-size">
      <AccordionItem value="filter-size" className="border-none">
        <AccordionTrigger className="text-[#3D2E26] font-medium text-base hover:no-underline p-0 py-0.5">
          Size
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex items-center flex-wrap">
            {[
              "S",
              "M",
              "L",
              "32A",
              "32B",
              "34B",
              "34C",
              "36C",
              "38D",
            ].map((size, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  "bg-transparent text-[#3D2E26]/62 m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-sm max-h-[39px] border border-[#9C7548]/18",
                  selected === size && "bg-[#2A1820] font-medium text-[#F2EADC] border-[#2A1820]",
                ])}
                onClick={() => setSelected(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SizeSection;
