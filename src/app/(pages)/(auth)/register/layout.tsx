"use client";

import RegisterHeader from "../components/authHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <body>
        <RegisterHeader/>
        <main>
            {children}
        </main>
      </body>
   
  );
}