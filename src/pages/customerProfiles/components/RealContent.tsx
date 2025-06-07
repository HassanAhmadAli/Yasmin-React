import { UserDropdownMenu } from "./dropDownMenu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGlobalState } from "@/globalState";
import { useDashboardState } from "../state";
import { Skeleton } from "@/components/ui/skeleton";

import { User } from "@/model/user";
import { ReactNode } from "react";

function Item({ user }: { user: User }) {
  const isMobile = useGlobalState((state) => state.isMobile);
  if (isMobile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{user.name}</CardTitle>
          {/* 4 200 */}
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-sm font-medium">Email:</span>
              <span className="break-all text-sm">{user.email}</span>
              {/* 4 200 */}
              <span className="text-sm font-medium">Address:</span>
              <span className="break-words text-sm">{`${user.address.city}, ${user.address.street}`}</span>
              {/* 4 200 */}
              <span className="text-sm font-medium">Phone:</span>
              <span className="text-sm">{user.phone}</span>
              {/* 4 200 */}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <TableRow key={user._id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell className="" onClick={() => {}}>
          {user.email}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {" "}
          {user?.address ? `${user.address.city}, ${user.address.street}` : ""}
        </TableCell>
        <TableCell className="hidden sm:table-cell">{user.phone}</TableCell>
        <TableCell>
          <UserDropdownMenu />
        </TableCell>
      </TableRow>
    );
  }
}

function ItemsWrapper({ children }: { children: ReactNode[] }) {
  const isMobile = useGlobalState((state) => state.isMobile);
  if (isMobile)
    return <div className="space-y-4 sm:rounded-md sm:border">{children}</div>;
  else {
    return (
      <div className="space-y-4 sm:rounded-md sm:border">
        <Table>
          <TableCaption>A list of Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Address</TableHead>
              <TableHead className="hidden sm:table-cell">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </div>
    );
  }
}

export function RealCellContent() {
  const users = useDashboardState((state) => state.users);
  return (
    <ItemsWrapper>
      {users.map((user) => (
        <Item user={user} key={user._id}></Item>
      ))}
    </ItemsWrapper>
  );
}
