"use client";
import React from "react";
import { NavbarItemP } from "./utils";
import NavBarItem from "./NavBarItem";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import TextInput from "../TextInput/TextInput";

type NavbarP = {
  firstHalfLinks: NavbarItemP[];
  secondHalfLinks?: NavbarItemP[];
  showSignupAndWalletConnect?: boolean;
  showSearch?: boolean;
  extraClasses?: string;
};

const Navbar = ({
  firstHalfLinks,
  secondHalfLinks,
  showSignupAndWalletConnect,
  showSearch,
  extraClasses = "",
}: NavbarP) => {
  const pathname = usePathname();

  return (
    <div className={`flex justify-between items-center ${extraClasses} mx-24`}>
      <div className="flex flex-auto justify-between">
        <div className="flex">
          {firstHalfLinks.map((item, index) => (
            <NavBarItem
              url={item.url}
              label={item.label}
              key={index}
              isSelected={pathname.includes(item.url)}
              isFirst={index === 0}
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
                isFirst={index === 0}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div>
        {showSignupAndWalletConnect ? (
          <div className="flex">
            <Button size={"lg"} className={"mr-2"}>
              Sign up
            </Button>
            <Button size={"lg"} className={"ml-2"}>
              Wallet
            </Button>
          </div>
        ) : null}
        {showSearch ? (
          <div>
            <TextInput
              placeholder={"Search for chains"}
              onChange={() => null}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
