import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/providers";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi"; 
import { config } from "@/config/config"; 
import Web3ModalProvider from "@/context/context-wagmi";

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
  title: "#",
  description: "#",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"))

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Web3ModalProvider initialState={initialState}>
        <Providers>          
          {children}
        </Providers>
        </Web3ModalProvider >
      </body>
    </html>
  );
}
