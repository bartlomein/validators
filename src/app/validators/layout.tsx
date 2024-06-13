import Navbar from "@/components/Nav/Navbar";
import { CHAIN_LINKS } from "@/components/Nav/utils";
export default function ValidatorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar firstHalfLinks={CHAIN_LINKS} />

      {children}
    </div>
  );
}
