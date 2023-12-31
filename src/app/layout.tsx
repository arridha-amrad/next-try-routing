import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-[150px]">
              <Sidebar />
            </div>
            <div className="flex-1 border-x border-neutral-300">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
