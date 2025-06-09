"use client";

import RegisterHeader from "./components/registerHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RegisterHeader/>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}