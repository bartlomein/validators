import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/providers/react-query-provider";

export const metadata: Metadata = {
  title: "Skip protocol validators",
  description: "Skip protocol validators",
};
import Navbar from "@/components/Nav/Navbar";
import {
  MAIN_NAVBAR_LINKS,
  HOME_LINK,
  SUB_NAVBAR_LINKS,
} from "@/components/Nav/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="w-screen">
          <Navbar
            firstHalfLinks={HOME_LINK}
            secondHalfLinks={MAIN_NAVBAR_LINKS}
            showSignupAndWalletConnect
          />
          <Navbar firstHalfLinks={SUB_NAVBAR_LINKS} showSearch />
          {children}
        </body>
      </Providers>
    </html>
  );
}
