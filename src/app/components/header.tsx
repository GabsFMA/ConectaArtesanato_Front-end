"use client";

import Image from "next/image";
import SearchBar from "./searchBar";
import { useState } from "react";
import { CircleUser, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full h-auto bg-[#C08B74] shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="">
          <div className="">
            <Image
              src="/ConectaArtesanato_Logo.png"
              alt="Logo"
              width={120}
              height={100}
              className="rounded"
            />
          </div>
        </a>
        <nav className="space-x-4 flex gap-10">
          
            <SearchBar query={query} onQueryChange={setQuery} />
          
          <div>
            <a
              href="/"
              className=""
            >
              <CircleUser className="text-white w-8 h-8" />
            </a>
          </div>
          <div>
            <a
              href="/cart"
              className=""
            >
              <ShoppingCart className="text-white w-8 h-8" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
