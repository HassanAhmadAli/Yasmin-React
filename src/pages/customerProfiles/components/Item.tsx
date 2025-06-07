import { UserDropdownMenu } from "./userDropDownMenu";
import { TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGlobalState } from "@/globalState";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/model/user";
import { useDashboardState } from "../state";

export function Item({ user }: { user: User | null }) {
  const isMobile = useGlobalState((state) => state.isMobile);
  const isLoading = useDashboardState((state) => state.isLoading);
  if (isMobile) {
    return (
      <Card>
        <CardHeader>
          {isLoading || user === null ? (
            <Skeleton className="h-4 w-[200px]" />
          ) : (
            <CardTitle className="text-lg">{user.name}</CardTitle>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-sm font-medium">Email:</span>
              {isLoading || user === null ? (
                <Skeleton className="h-4 w-[200px]" />
              ) : (
                <span className="break-all text-sm">{user.email}</span>
              )}

              <span className="text-sm font-medium">Address:</span>

              {isLoading || user === null ? (
                <Skeleton className="h-4 w-[200px]" />
              ) : (
                <span className="break-words text-sm">{`${user.address.city}, ${user.address.street}`}</span>
              )}

              <span className="text-sm font-medium">Phone:</span>
              {isLoading || user === null ? (
                <Skeleton className="h-4 w-[200px]" />
              ) : (
                <span className="text-sm">{user.phone}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <TableRow>
        <TableCell className="font-medium">
          {isLoading || user === null ? (
            <Skeleton className="h-4 w-[200px]"> </Skeleton>
          ) : (
            user.name
          )}
        </TableCell>
        <TableCell className="">
          {isLoading || user === null ? (
            <Skeleton className="h-4 w-[200px]" />
          ) : (
            user.email
          )}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {isLoading || user === null ? (
            <Skeleton className="h-4 w-[200px]" />
          ) : user?.address ? (
            ` ${user.address.city}, ${user.address.street}`
          ) : (
            " "
          )}
        </TableCell>
        <TableCell className="hidden sm:table-cell">
          {isLoading || user === null ? (
            <Skeleton className="h-4 w-[150px]" />
          ) : (
            user.phone
          )}
        </TableCell>
        {!(isLoading || user === null) && (
          <TableCell>
            <UserDropdownMenu />
          </TableCell>
        )}
      </TableRow>
    );
  }
}
