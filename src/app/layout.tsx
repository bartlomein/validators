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
        <body className="w-screen bg-black text-white">
          <Navbar
            firstHalfLinks={HOME_LINK}
            secondHalfLinks={MAIN_NAVBAR_LINKS}
            showSignupAndWalletConnect
            extraClasses={"my-4"}
          />
          <Navbar
            firstHalfLinks={SUB_NAVBAR_LINKS}
            showSearch
            extraClasses={"my-8"}
          />
          {children}
        </body>
      </Providers>
    </html>
  );
}
