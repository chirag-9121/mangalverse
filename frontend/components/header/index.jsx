import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <div className="text-primary font-[family-name:var(--font-conthrax)] text-base sm:text-lg">
          Mangal<span className="text-secondary">Verse</span>
        </div>
      </Link>

      <div className="[&>a]:text-secondary-foreground [&>a]:hover:text-primary-foreground flex items-center gap-5 sm:gap-10 [&>a]:hover:underline">
        <Link href="/">
          <p>Home</p>
        </Link>

        <NavigationMenu delayDuration={100}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-secondary-foreground hover:text-primary-foreground">
                Rovers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/rover/curiosity">
                  Curiosity
                </NavigationMenuLink>
                <NavigationMenuLink href="/rover/opportunity">
                  Opportunity
                </NavigationMenuLink>
                <NavigationMenuLink href="/rover/perseverance">
                  Perseverance
                </NavigationMenuLink>
                <NavigationMenuLink href="/rover/spirit">
                  Spirit
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/apod">
          <p>APOD</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
