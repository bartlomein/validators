import { ChainT } from "@/api/api";
export const MAIN_NAVBAR_LINKS: NavbarItemP[] = [
  { label: "Home", url: "#" },
  { label: "Github", url: "#" },
  { label: "Careers", url: "#" },
  { label: "Contact", url: "#" },
];
export const HOME_LINK: NavbarItemP[] = [{ label: "Skip/Select", url: "#" }];

export const SUB_NAVBAR_LINKS: NavbarItemP[] = [
  { label: "Overview", url: "#" },
  { label: "Validators", url: "/validators" },
];

export const CHAIN_LINKS = [
  { label: "Osmosis", url: "/validators/osmosis" },
  { label: "Juno", url: "/validators/juno" },
  { label: "Hub", url: "/validators/hub" },
  { label: "Evmos", url: "/validators/evmos" },
];

export type NavbarItemP = {
  label: string;
  url: string;
  isSelected?: boolean;
  isFirst?: boolean;
};
