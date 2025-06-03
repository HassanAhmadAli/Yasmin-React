import React from "react";
import { useLocation } from "react-router";

export function Page404() {
  const pathname = useLocation().pathname;
  return <h1>unknown Path : {`"${pathname}"`}</h1>;
}
