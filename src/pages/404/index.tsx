import React from "react";
import { useLocation } from "react-router";

export function Page404() {
  const pathname = useLocation().pathname;
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <h1>{`"${pathname}"`}</h1>
    </>
  );
}
