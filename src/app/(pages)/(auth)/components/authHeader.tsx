"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full h-auto bg-[#C08B74] shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center">
          <Link className="" href={"/"}>
            <Image
              src="/ConectaArtesanato_Logo.png"
              alt="Logo"
              width={120}
              height={100}
              className="rounded"
            />
          </Link>
      </div>
    </div>
  );
}
