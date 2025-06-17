"use client"; // Essencial para usar hooks como usePathname e Contexts

import { usePathname } from "next/navigation";
import React from "react";

// Importe seus componentes de layout e providers
import Header from "./header";
import Footer from "./footer";
import { AuthProvider } from "@/contexts/AuthContext";

// Rotas onde o Header e Footer não devem aparecer
const hiddenLayoutRoutes = ["/login", "/register"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = hiddenLayoutRoutes.includes(pathname);

  return (
    // 1. Providers envolvem toda a aplicação
    <AuthProvider>
        {/*
          2. A estrutura visual (div, header, main, footer) fica aqui.
             Isso evita o erro de aninhamento de <body> e <main>.
        */}
        <div className="flex flex-col min-h-screen">
          {!hideLayout && <Header />}
          <main className="flex-grow">
            {children}
          </main>
          {!hideLayout && <Footer />}
        </div>
    </AuthProvider>
  );
}