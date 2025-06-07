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

const RealCellContent = () => {
  const isMobile = useGlobalState((state) => state.isMobile);
  const users = useDashboardState((state) => state.users);
  const header = isMobile ? (
    <></>
  ) : (
    <>
      <TableCaption>A list of Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="hidden md:table-cell">Address</TableHead>
          <TableHead className="hidden sm:table-cell">Phone</TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
  const MobileCellContent = function () {
    return (
      <div className="space-y-4">
        {header}
        {users.map((user) => (
          <Card key={user._id}>
            <CardHeader>
              <CardTitle className="text-lg">{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="break-all text-sm">{user.email}</span>
                  <span className="text-sm font-medium">Address:</span>
                  <span className="break-words text-sm">{`${user.address.city}, ${user.address.street}`}</span>
                  <span className="text-sm font-medium">Phone:</span>
                  <span className="text-sm">{user.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  const LargeCellContent = () => (
    <div className="rounded-md border">
      <Table>
        {header}
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="">{user.email}</TableCell>
              <TableCell className="hidden md:table-cell">{`${user.address.city}, ${user.address.street}`}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.phone}
              </TableCell>
              <TableCell>
                <UserDropdownMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
  if (isMobile) return <MobileCellContent />;
  else return <LargeCellContent />;
};
export { RealCellContent };
