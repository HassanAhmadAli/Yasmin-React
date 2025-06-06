import {
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Calendar,  Inbox, Search, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router";
// Menu items.
const items = [
  {
    title: "Inbox",
    url: "/",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/",
    icon: Settings,
  },
];

const userImage = "https://github.com/shadcn.png";
const userName = "Hassan Ali";

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const navigation = useNavigate();
  return (
    <SidebarProvider>
      <Sidebar className="">
        <SidebarContent>
          <SidebarHeader>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="hover:bg-sidebar-accent flex h-auto items-center space-x-3 rounded-lg p-2">
                  <Avatar className="ring-primary/10 h-10 w-10 ring-2">
                    <AvatarImage
                      src={userImage}
                      alt={userName}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-primary/5 text-primary">
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{userName}</span>
                    <span className="text-muted-foreground text-xs">
                      Online
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>User Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer">
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      navigation("/login");
                      localStorage.removeItem("token");
                    }}
                  >
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center gap-4"
                    >
                      <Link to={item.url} className="">
                        <item.icon />
                        <span className="text-base">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarTrigger />

      {children}
    </SidebarProvider>
  );
}
