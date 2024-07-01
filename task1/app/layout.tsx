import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({   subsets: ['latin'],
display: 'swap', });

export const metadata: Metadata = {
  title: "Rishit Kamboj Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
