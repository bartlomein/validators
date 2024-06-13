import React from "react";
import Link from "next/link";
import { NavbarItemP } from "./utils";

const NavBarItem = ({ url, label }: NavbarItemP) => {
  return (
    <div>
      <Link href={url}>{label}</Link>
    </div>
  );
};

export default NavBarItem;
