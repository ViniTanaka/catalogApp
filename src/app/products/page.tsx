"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterBar } from "../components/filter/filter-bar";
import { ProductList } from "../components/product/products-list";
import { Header } from "../components/header/header";

export default function Products() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <Header />
      <main className={styles.main}>
        <FilterBar />
        <ProductList/>
      </main>
    </QueryClientProvider>
  );
}
