import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./components/clientLayout"; // Certifique-se que o caminho está correto

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
    <html lang="pt-br">
      <body>
        {/*
          Toda a lógica de providers e layout (Header/Footer)
          foi movida para dentro do ClientLayout.
        */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}