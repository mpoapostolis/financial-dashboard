import { Header } from "@/components/header";
import { SideBar } from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Findasb",
  description: "See your accounts, taxes, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </>
  );
}
