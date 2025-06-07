import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGlobalState } from "@/globalState";
import { ReactNode } from "react";
export function ItemsWrapper({ children }: { children: ReactNode[] }) {
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
