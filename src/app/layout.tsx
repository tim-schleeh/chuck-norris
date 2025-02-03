// main layout

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT Norris",
  description: "Chuck Norris jokes for IT nerds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          id="mainContainer"
          className="flex sm:items-center justify-center min-h-screen"
        >
          <div className="flex flex-col m-2 sm:m-0 sm:h-[80vh] w-full sm:w-[80vw] sm:max-w-[800px] sm:max-h-[600px] font-[family-name:var(--font-geist-sans)] rounded-2xl border overflow-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
