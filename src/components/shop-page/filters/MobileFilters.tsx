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
            className="h-9 w-9 rounded-sm border border-[#9C7548]/24 bg-[#E8DECD]/70 p-1 text-[#3D2E26] md:hidden"
          >
            <FiSliders className="text-base mx-auto" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90%] border-[#9C7548]/18 bg-[#F2EADC] text-[#3D2E26]">
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium text-[#3D2E26]">Filters</span>
              <FiSliders className="text-2xl text-[#9C7548]" />
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
