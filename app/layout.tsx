import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Navbar, NextUIProvider } from "@nextui-org/react";
import { Topbar } from "./_components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NextUIProvider>
            <Topbar />
            {children}
          </NextUIProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
