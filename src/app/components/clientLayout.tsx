"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { AuthProvider } from "@/contexts/AuthContext";

const hiddenLayoutRoutes = ["/login", "/register"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = hiddenLayoutRoutes.includes(pathname);

  return (
    <AuthProvider>
        <div className="flex flex-col min-h-screen">
          {!hideLayout && <Header />}
          <main>
            {children}
          </main>
          {!hideLayout && <Footer />}
        </div>
    </AuthProvider>
  );
}