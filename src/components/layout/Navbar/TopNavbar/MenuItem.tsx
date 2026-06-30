import * as React from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  label: string;
  url?: string;
};

export function MenuItem({ label, url }: MenuItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={url ?? "/"} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn([
            navigationMenuTriggerStyle(),
            "moonlite-link h-9 bg-transparent px-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-moonlite-espresso/78 hover:bg-transparent hover:text-moonlite-bronze focus:bg-transparent focus:text-moonlite-bronze xl:px-3 xl:text-xs",
          ])}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
