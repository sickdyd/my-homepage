import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "600"],
});

export const metadata: Metadata = {
  title: "Roberto Reale",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Navbar />
        <main className="m-auto mt-20 flex h-full max-w-3xl flex-grow flex-col bg-opacity-90 p-4 pt-3">
          {children}
        </main>
      </body>
    </html>
  );
}
