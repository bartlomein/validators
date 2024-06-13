import React from "react";
import Link from "next/link";
import { NavbarItemP } from "./utils";

const NavBarItem = ({ url, label, isSelected }: NavbarItemP) => {
  return (
    <div
      className={`${isSelected ? "font-bold text-slate-100" : ""} ${
        !isSelected ? `text-slate-400` : ""
      } px-4 `}
    >
      <Link href={url}>{label}</Link>
    </div>
  );
};

export default NavBarItem;
