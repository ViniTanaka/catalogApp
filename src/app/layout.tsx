"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { FilterContextProvider } from "./contexts/filter-context";
import Home from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={new QueryClient()}>
    <html lang="en">
      
      <body className={inter.className}>
      <FilterContextProvider>
        {children}
      </FilterContextProvider>
      </body>
    </html>
    </QueryClientProvider>
  );
}
