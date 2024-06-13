import React from "react";
import Link from "next/link";
import { NavbarItemP } from "./utils";

const NavBarItem = ({ url, label, isSelected }: NavbarItemP) => {
  return (
    <div className={`${isSelected ? "font-bold" : ""} px-4`}>
      <Link href={url}>{label}</Link>
    </div>
  );
};

export default NavBarItem;
