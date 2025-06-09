"use client";

import AuthHeader from "../components/authHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthHeader/>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}