"use client";

import Image from "next/image";
import SearchBar from "./headerComponents/searchBar";
import { useState } from "react";
import { CircleUser, ShoppingCart } from 'lucide-react';
import Link from "next/link";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full h-auto bg-[#C08B74] shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="">
          <Link className="" href={"/"}>
            <Image
              src="/ConectaArtesanato_Logo.png"
              alt="Logo"
              width={120}
              height={100}
              className="rounded"
            />
          </Link>
        </a>
        <nav className="space-x-4 flex gap-10">
          <div>
            <SearchBar query={query} onQueryChange={setQuery} />
          </div>
            
          <div>
            <Link
              href="/register"
              className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#D8671E] scale-110 transition-all duration-300"
            >
              <CircleUser className="text-white w-8 h-8" />
            </Link>
          </div>
          <div>
            <a
              href="/cart"
              className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#D8671E] scale-110 transition-all duration-300"
            >
              <ShoppingCart className="text-white w-8 h-8" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
