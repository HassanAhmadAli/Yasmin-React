import { useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
interface navigationItemProperties {
  path: string;
  name: string;
}
function createNavigationItem(
  navigate: any,
  { path, name }: navigationItemProperties,
) {
  return (
    <NavigationMenuItem key={path} className="cursor-pointer">
      <NavigationMenuLink
        onClick={() => {
          navigate(path);
        }}
        className={navigationMenuTriggerStyle()}
      >
        {name}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export function AppNavigationMenu() {
  const navigate = useNavigate();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {[
          {
            path: "/posts",
            name: "Posts",
          },
          {
            path: "/favorites",
            name: "Favorites",
          },
          {
            path: "/customers",
            name: "Customer Profiles",
          },
          {
            path: "/products",
            name: "Products",
          },

          {
            path: "/about",
            name: "About",
          },
        ].map((item) => createNavigationItem(navigate, item))}
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  );
}
