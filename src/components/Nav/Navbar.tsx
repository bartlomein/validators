"use client";
import React from "react";
import { NavbarItemP } from "./utils";
import NavBarItem from "./NavBarItem";
import { usePathname } from "next/navigation";

type NavbarP = {
  firstHalfLinks: NavbarItemP[];
  secondHalfLinks?: NavbarItemP[];
  showSignupAndWalletConnect?: boolean;
  showSearch?: boolean;
};

const Navbar = ({
  firstHalfLinks,
  secondHalfLinks,
  showSignupAndWalletConnect,
  showSearch,
}: NavbarP) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between">
      <div className="flex flex-auto justify-between">
        <div className="flex">
          {firstHalfLinks.map((item, index) => (
            <NavBarItem
              url={item.url}
              label={item.label}
              key={index}
              isSelected={pathname.includes(item.url)}
            />
          ))}
        </div>

        {secondHalfLinks && secondHalfLinks?.length > 0 ? (
          <div className="flex">
            {secondHalfLinks.map((item, index) => (
              <NavBarItem
                url={item.url}
                label={item.label}
                key={index}
                isSelected={pathname.includes(item.url)}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div>
        {showSignupAndWalletConnect ? <div>SIGN UP AND WALLET</div> : null}
        {showSearch ? <div>search</div> : null}
      </div>
    </div>
  );
};

export default Navbar;
