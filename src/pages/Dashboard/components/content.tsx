import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
    };
    fetchUsers();
  }, [paginationNumber]);

  return (
    <div className="w-full space-y-2">
      <SearchArea
        setSearchBy={setSearchBy}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {users.length === 0 ? (
        <SkeletonContent isMobile={isMobile} />
      ) : (
        <RealCellContent isMobile={isMobile} users={users} />
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
