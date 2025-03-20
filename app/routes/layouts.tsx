import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Layouts" },
    { name: "description", content: "Different navigation layout patterns" },
  ];
};

export default function Layouts() {
  return <Outlet />;
} 