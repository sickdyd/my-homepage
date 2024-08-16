import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

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
      <body className={`${sans.className}`}>
        <Navbar />
        <main className="m-auto mt-16 flex h-full max-w-screen-md flex-grow flex-col bg-opacity-90 p-4 pt-3">
          {children}
        </main>
      </body>
    </html>
  );
}
