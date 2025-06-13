"use client";

import AuthHeader from "../components/authHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <body>
        <AuthHeader/>
        <main>
            {children}
        </main>
      </body>
   
  );
}