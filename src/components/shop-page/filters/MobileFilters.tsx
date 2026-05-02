import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiSliders } from "react-icons/fi";
import Filters from ".";

const MobileFilters = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <button
            type="button"
            className="h-9 w-9 rounded-full border border-white/10 bg-white/10 p-1 text-white md:hidden"
          >
            <FiSliders className="text-base mx-auto" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90%] border-white/10 bg-[#0b0b14] text-white">
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">Filters</span>
              <FiSliders className="text-2xl text-[#9bdfff]" />
            </div>
            <DrawerTitle className="hidden">filters</DrawerTitle>
            <DrawerDescription className="hidden">filters</DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[90%] overflow-y-auto w-full px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <Filters />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileFilters;
