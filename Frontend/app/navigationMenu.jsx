import React from "react";
import Link from "next/link";
import { Avatar } from "@heroui/avatar";
import { LogOutIcon, LucideShoppingCart, User2Icon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const components = [
  {
    title: "Shoes",
    href: "/products/shoes",
    description:
      "Kick it in style – sneakers, boots, and everything your feet will love!",
  },
  {
    title: "Shirts",
    href: "/products/shirts",
    description:
      "Button up, dress down – shirts that do both, effortlessly cool and comfy!",
  },
  {
    title: "Tshirts",
    href: "/products/tshirts",
    description:
      "Graphic, plain, or quirky – tees that speak your vibe loud and clear!",
  },
  {
    title: "Pants",
    href: "/products/pants",
    description:
      "Move easy, look sharp – pants for lounging, strutting, and everything in between!",
  },
];

export default function Navigation() {
  return (
    <div className="w-full flex lg:justify-around sm:justify-center items-center h-[90px] px-20 sm:px-10">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="text-xl font-semibold hover:underline"
                >
                  DevWear
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl [&>span]:text-lg ">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[350px]">
                  {components.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className=" pt-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {component.title}
                            </h3>
                            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                              {component.description}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/cart"
                  className="text-xl hover:underline h-10 w-10 flex justify-center"
                >
                  <LucideShoppingCart style={{ scale: 1.6, color: "black" }} />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/profile">
                  <Avatar
                    className="w-10 h-10 text-tiny"
                    size="md"
                    src="https://avatars.githubusercontent.com/u/43290758?v=4"
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
