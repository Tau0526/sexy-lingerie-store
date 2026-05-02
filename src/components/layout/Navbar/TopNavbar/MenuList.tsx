import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuListData } from "../navbar.types";

export type MenuListProps = {
  data: MenuListData;
  label: string;
};

export function MenuList({ data, label }: MenuListProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-normal px-3 bg-transparent text-[#3D2E26]/78 hover:bg-transparent hover:text-[#9C7548] focus:bg-transparent focus:text-[#9C7548] data-[state=open]:bg-transparent data-[state=open]:text-[#9C7548]">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="border border-[#9C7548]/20 bg-[#F2EADC] text-[#3D2E26] shadow-[0_20px_60px_rgba(42,24,32,0.08)]">
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {data.map((item) => (
            <ListItem key={item.id} title={item.label} href={item.url ?? "/"}>
              {item.description ?? ""}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E8DECD]/70 focus:bg-[#E8DECD]/70",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-[#3D2E26]">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-[#3D2E26]/60">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
