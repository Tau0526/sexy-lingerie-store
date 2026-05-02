import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Image
          priority
          src="/icons/menu.svg"
          height={100}
          width={100}
          alt="menu"
          className="max-w-[22px] max-h-[22px]"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="overflow-y-auto border-[#9C7548]/20 bg-[#F2EADC] text-[#3D2E26]"
      >
        <SheetHeader className="mb-10">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center">
                  <Image
                    priority
                    src="/images/Main_logo颜色版_01.png"
                    height={48}
                    width={48}
                    alt="Moonlite Studio logo"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className={cn([integralCF.className, "text-[22px] text-[#3D2E26]"])}>
                  Moonlite Studio
                </span>
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start">
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "MenuItem" && (
                <SheetClose asChild>
                  <Link
                    href={item.url ?? "/"}
                    className="mb-4 text-[#3D2E26]/70 transition-colors hover:text-[#9C7548]"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              )}
              {item.type === "MenuList" && (
                <div className="mb-4 w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.label} className="border-none">
                      <AccordionTrigger className="text-left p-0 py-0.5 font-normal text-base text-[#3D2E26]/70 hover:text-[#9C7548]">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 pb-0 border-l border-[#9C7548]/20 flex flex-col">
                        {item.children.map((itemChild, idx) => (
                          <SheetClose
                            key={itemChild.id}
                            asChild
                            className="w-fit py-2 text-base text-[#3D2E26]/65 transition-colors hover:text-[#9C7548]"
                          >
                            <Link href={itemChild.url ?? "/"}>
                              {itemChild.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;
