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
  const [selected, setSelected] = useState<string>("bg-[#050507]");

  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className="border-none">
        <AccordionTrigger className="text-white font-bold text-xl hover:no-underline p-0 py-0.5">
          Colors
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {[
              "bg-[#050507]",
              "bg-[#f3eadf]",
              "bg-[#6f5bd6]",
              "bg-[#9bdfff]",
              "bg-white",
            ].map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  color,
                  "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-white/20",
                ])}
                onClick={() => setSelected(color)}
              >
                {selected === color && (
                  <IoMdCheckmark className="text-base text-white" />
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
