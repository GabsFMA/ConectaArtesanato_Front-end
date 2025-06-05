import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./components/clientLayout";

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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}