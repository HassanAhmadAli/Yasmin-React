import { useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
            path: "/",
            name: "Customer Profiles",
          },
          {
            path: "/about",
            name: "About",
          },
          {
            path: "/products",
            name: "Products",
          },
          {
            path: "/posts",
            name: "Posts",
          },
        ].map((item) => createNavigationItem(navigate, item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
