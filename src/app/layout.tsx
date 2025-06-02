import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";

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
        <Header />
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
