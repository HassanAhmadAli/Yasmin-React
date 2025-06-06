import { useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function AppNavigationMenu() {
  const navigate = useNavigate();
  const navigationMenuTriggerStyle_ = navigationMenuTriggerStyle();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink
            onClick={() => {
              navigate("/");
            }}
            className={navigationMenuTriggerStyle_}
          >
            Customers Profiles
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink
            onClick={() => {
              navigate("/about");
            }}
            className={navigationMenuTriggerStyle_}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink
            onClick={() => {
              navigate("/products");
            }}
            className={navigationMenuTriggerStyle_}
          >
            Products
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
