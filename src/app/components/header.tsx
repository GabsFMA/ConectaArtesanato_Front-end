"use client";

import Image from "next/image";
import SearchBar from "./headerComponents/searchBar";
import { useState } from "react";
import { CircleUser, ShoppingCart, LogOut } from 'lucide-react';
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext"; // Importação adicionada

export default function Header() {
  const [query, setQuery] = useState("");
  const { isAuthenticated, logout, isLoading } = useAuth(); // Usando o contexto

  return (
    <div className="w-full h-auto bg-[#C08B74] shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link className="" href={"/"}>
          <Image
            src="/ConectaArtesanato_Logo.png"
            alt="Logo"
            width={120}
            height={100}
            className="rounded"
          />
        </Link>
        <nav className="space-x-4 flex gap-10 items-center">
          <div>
            <SearchBar query={query} onQueryChange={setQuery} />
          </div>

          {!isLoading && ( // Não mostra nada enquanto carrega o estado de auth
            <>
              {isAuthenticated ? (
                <>
                  {/* Botão de Perfil (futuramente levará para /profile/me) */}
                  <Link
                    href="/profile" // Mudar para o perfil quando a página existir
                    className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#D8671E] scale-110 transition-all duration-300"
                    title="Meu Perfil"
                  >
                    <CircleUser className="text-white w-8 h-8" />
                  </Link>
                  {/* Botão de Logout */}
                  <button
                    onClick={logout}
                    className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-red-600 scale-110 transition-all duration-300"
                    title="Sair"
                  >
                    <LogOut className="text-white w-8 h-8" />
                  </button>
                </>
              ) : (
                // Botão de Login
                <Link
                  href="/login"
                  className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#D8671E] scale-110 transition-all duration-300"
                  title="Login"
                >
                  <CircleUser className="text-white w-8 h-8" />
                </Link>
              )}
            </>
          )}

          {/* Carrinho de Compras continua igual */}
          <div>
            <a
              href=""
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