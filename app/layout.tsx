import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

// import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
// const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Fundamentals",
  description: "Generated by create next app",
  keywords: "Next.js, Typescript, TailwindCSS",
};

// This is the Root Layout

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
