import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/utils/http";
import { SearchArea } from "./search";
import { SkeletonContent } from "./skeleton";
import { RealCellContent } from "./RealContent";
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  _id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export function Content() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [searchByTerm, setSearchBy] = React.useState("any");
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await axiosInstance.get(
        `/api/customer/page/${paginationNumber}`,
      );
      const data = response.data;
      setUsers(data);
      setFilteredUsers(data);
    };
    fetchUsers();
  }, [paginationNumber]);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="w-full space-y-2">
      <SearchArea
        setSearchBy={setSearchBy}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      {filteredUsers.length === 0 ? (
        <SkeletonContent isMobile={isMobile} />
      ) : (
        <RealCellContent isMobile={isMobile} filteredUsers={filteredUsers} />
      )}

      <Pagination>
        <PaginationContent>
          {paginationNumber !== 1 ? (
            <>
              <PaginationItem>
                <button
                  onClick={() => {
                    setPaginationNumber(paginationNumber - 1);
                  }}
                >
                  <PaginationPrevious />
                </button>
              </PaginationItem>
              <PaginationItem className="hidden sm:inline-block">
                <PaginationEllipsis />
              </PaginationItem>
            </>
          ) : (
            <></>
          )}

          <PaginationItem
            className="hidden sm:inline-block"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <PaginationLink>{paginationNumber}</PaginationLink>
          </PaginationItem>
          <PaginationItem className="hidden sm:inline-block">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <button
              onClick={() => {
                setPaginationNumber(paginationNumber + 1);
              }}
            >
              <PaginationNext />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
