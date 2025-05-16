import React from "react";

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

import { Skeleton } from "../../../components/ui/skeleton";
const SkeletonContent = ({ isMobile }: { isMobile: boolean }) => {
  const skeletonArray = Array(7).fill(null);

  const MobileCellContent = function () {
    return (
      <div className="space-y-4">
        {skeletonArray.map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">
                <Skeleton className="h-4 w-[200px]" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-sm font-medium">Email:</span>
                  <Skeleton className="h-4 w-[200px]" />
                  <span className="text-sm font-medium">Address:</span>
                  <Skeleton className="h-4 w-[200px]" />
                  <span className="text-sm font-medium">Phone:</span>
                  <Skeleton className="h-4 w-[200px]" />
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
        <TableCaption>A list of Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="hidden md:table-cell">Address</TableHead>
            <TableHead className="hidden sm:table-cell">Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletonArray.map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Skeleton className="h-4 w-[150px]" />
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

export { SkeletonContent };
