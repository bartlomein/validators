import React from "react";
import { NavbarItemP } from "./utils";
import NavBarItem from "./NavBarItem";

type NavbarP = {
  firstHalfLinks: NavbarItemP[];
  secondHalfLinks?: NavbarItemP[] | [];
  showSignupAndWalletConnect?: boolean;
  showSearch?: boolean;
};

const Navbar = ({
  firstHalfLinks,
  secondHalfLinks,
  showSignupAndWalletConnect,
  showSearch,
}: NavbarP) => {
  return (
    <div className="flex">
      <div className="flex">
        {firstHalfLinks.map((item, index) => (
          <NavBarItem url={item.url} label={item.label} key={index} />
        ))}
      </div>

      {secondHalfLinks?.length > 0 ? (
        <div className="flex">
          {secondHalfLinks.map((item, index) => (
            <NavBarItem url={item.url} label={item.label} key={index} />
          ))}
        </div>
      ) : null}
      {showSignupAndWalletConnect ? <div>SIGN UP AND WALLET</div> : null}
      {showSearch ? <div>search</div> : null}
    </div>
  );
};

export default Navbar;
