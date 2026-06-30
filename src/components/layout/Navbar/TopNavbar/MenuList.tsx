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
  featuredTitle?: string;
  featuredText?: string;
  featuredHref?: string;
};

export function MenuList({
  data,
  label,
  featuredTitle = "Moonlite Edit",
  featuredText = "Explore the latest private edit",
  featuredHref = "/shop",
}: MenuListProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="moonlite-link h-9 bg-transparent px-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-moonlite-espresso/78 hover:bg-transparent hover:text-moonlite-bronze focus:bg-transparent focus:text-moonlite-bronze data-[state=open]:bg-transparent data-[state=open]:text-moonlite-bronze xl:px-3 xl:text-xs">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-0 top-0 w-full border border-moonlite-border/60 bg-moonlite-ivory text-moonlite-espresso shadow-moonlite-soft">
        <div className="mx-auto grid min-h-[300px] w-[calc(100vw-2rem)] max-w-7xl grid-cols-12 gap-7 px-6 py-8 xl:px-8">
          <div className="col-span-12 min-w-0 md:col-span-8">
            <ul className="grid min-w-0 content-start grid-cols-2 gap-x-6 gap-y-5 xl:grid-cols-3">
              {data.map((item) => (
                <ListItem key={item.id} title={item.label} href={item.url ?? "/"}>
                  {item.description ?? ""}
                </ListItem>
              ))}
            </ul>
          </div>

          <Link
            href={featuredHref}
            className="relative col-span-4 hidden h-[260px] min-w-0 overflow-hidden border border-moonlite-border/70 bg-moonlite-cream p-6 transition-colors duration-300 hover:border-moonlite-bronze/70 md:flex md:flex-col md:justify-end"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,245,0.92)_0%,rgba(255,251,245,0)_34%),radial-gradient(circle_at_84%_22%,rgba(227,207,166,0.46)_0%,rgba(227,207,166,0)_30%),linear-gradient(135deg,#FFFBF5_0%,#F5EBDD_42%,#EDE0CE_72%,#C9A86A_118%)]" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(180deg,rgba(47,33,27,0)_0%,rgba(47,33,27,0.13)_100%)]" />
            <div className="relative max-w-[260px]">
              <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.24em] text-moonlite-bronze">
                {featuredTitle}
              </span>
              <p className="mb-6 text-[15px] leading-7 text-moonlite-espresso/72">
                {featuredText}
              </p>
              <span className="w-fit border-b border-moonlite-espresso/45 pb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-moonlite-espresso">
                Shop now
              </span>
            </div>
          </Link>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="min-w-0">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block min-w-0 select-none space-y-2 rounded-sm border border-transparent p-3 leading-none no-underline outline-none transition-all duration-300 hover:border-moonlite-border/80 hover:bg-moonlite-cream/78 focus:border-moonlite-border/80 focus:bg-moonlite-cream/78",
            className
          )}
          {...props}
        >
          <div className="min-w-0 whitespace-normal break-words text-[15px] font-medium leading-snug tracking-[0.03em] text-moonlite-espresso">
            {title}
          </div>
          <p className="line-clamp-2 min-w-0 whitespace-normal break-words text-[13px] leading-relaxed text-moonlite-taupe">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
