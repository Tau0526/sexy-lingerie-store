import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Home",
    type: "MenuItem",
    url: "/",
    children: [],
  },
  {
    id: 2,
    label: "New In",
    type: "MenuItem",
    url: "/shop",
    children: [],
  },
  {
    id: 3,
    label: "Lingerie Sets",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Matching Sets",
        url: "/shop?category=Lingerie+Sets",
        description: "Coordinated pieces with a refined boutique mood",
      },
      {
        id: 12,
        label: "Slips & Chemises",
        url: "/shop?category=Slips+%26+Chemises",
        description: "Moonlit silhouettes with soft drape and quiet allure",
      },
      {
        id: 13,
        label: "Sleepwear",
        url: "/shop?category=Sleepwear",
        description: "Elegant nightwear for slow evenings and soft mornings",
      },
      {
        id: 14,
        label: "Accessories",
        url: "/shop?category=Accessories",
        description: "Finishing details for refined private styling",
      },
    ],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Sleepwear",
    url: "/shop?category=Sleepwear",
    children: [],
  },
  {
    id: 5,
    type: "MenuItem",
    label: "Accessories",
    url: "/shop?category=Accessories",
    children: [],
  },
  {
    id: 6,
    type: "MenuItem",
    label: "Contact",
    url: "/contact",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 z-20 border-b border-[#9C7548]/20 bg-[#F2EADC]/92 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-frame items-center justify-between px-4 py-3 md:justify-start md:py-4 xl:px-0">
        <div className="flex shrink-0 items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className="mr-4 flex shrink-0 items-center gap-3 lg:mr-8"
            aria-label="Moonlite Studio home"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center md:h-12 md:w-12">
              <Image
                priority
                src="/images/Main_logo颜色版_01.png"
                height={56}
                width={56}
                alt="Moonlite Studio logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span
              className={cn([
                integralCF.className,
                "whitespace-nowrap text-xl font-normal text-[#3D2E26] md:text-[22px] lg:text-[25px]",
              ])}
            >
              Moonlite Studio
            </span>
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-5">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex max-w-[220px] bg-[#E8DECD]/80 border border-[#9C7548]/15 mr-3 text-[#3D2E26] lg:max-w-[280px]">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5 opacity-60"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent text-[#3D2E26] placeholder:text-[#3D2E26]/45"
          />
        </InputGroup>
        <div className="flex shrink-0 items-center">
          <CartBtn />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
