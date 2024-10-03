import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/providers";
import ContextProvider from "@/context/context-wagmi";

import { headers } from "next/headers"; // added

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Remitt",
  description: "#",
};

const cookies = headers().get('cookie')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ContextProvider cookies={cookies}>
        <Providers>          
          {children}
        </Providers>
        </ContextProvider>
      </body>
    </html>
  );
}
