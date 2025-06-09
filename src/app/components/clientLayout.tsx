"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import React from "react";

const hiddenLayoutRoutes = ["/register", "/login"];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = hiddenLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}