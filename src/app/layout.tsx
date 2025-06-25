import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./components/clientLayout";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthProvider } from "@/contexts/AuthContext"; // Importação adicionada

export const metadata: Metadata = {
  title: "Conecta Artesanato",
  description: "Conectando artesãos de todo o Brasil com clientes de todo o mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* AuthProvider envolvendo o layout */}

        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}