import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { BranchContextProvider } from "@/providers/useBranchData";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hearts for Hope",
  description: "Join us to fight against heart disease and better communities all over the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BranchContextProvider>
            <ModalProvider />
            <ToasterProvider />
            <div className="overflow-x-hidden">
              {children}
            </div>
        </BranchContextProvider>
      </body>
    </html>
  );
}
