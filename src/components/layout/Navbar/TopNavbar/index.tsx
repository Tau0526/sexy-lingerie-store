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
    url: "/shop#new-arrivals",
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
        url: "/shop#lingerie-sets",
        description: "Coordinated pieces with a refined boutique mood",
      },
      {
        id: 12,
        label: "Lace Sets",
        url: "/shop#lace-sets",
        description: "Soft lace, elegant shaping and quiet allure",
      },
      {
        id: 13,
        label: "Bodysuits",
        url: "/shop#bodysuits",
        description: "Sculpted silhouettes designed for confidence",
      },
      {
        id: 14,
        label: "Briefs",
        url: "/shop#briefs",
        description: "Everyday softness with elevated details",
      },
    ],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Sleepwear",
    url: "/shop#sleepwear",
    children: [],
  },
  {
    id: 5,
    type: "MenuItem",
    label: "Accessories",
    url: "/shop#accessories",
    children: [],
  },
  {
    id: 6,
    type: "MenuItem",
    label: "Contact",
    url: "/#contact",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-[#08080d]/95 backdrop-blur z-20 border-b border-white/10">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-xl lg:text-[28px] mb-2 mr-3 lg:mr-10 text-white tracking-wide",
            ])}
          >
            Moonlite Studio
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
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
        <InputGroup className="hidden md:flex bg-white/10 border border-white/10 mr-3 lg:mr-10 text-white">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5 invert opacity-70"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent text-white placeholder:text-white/45"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px] invert"
            />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px] invert"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
