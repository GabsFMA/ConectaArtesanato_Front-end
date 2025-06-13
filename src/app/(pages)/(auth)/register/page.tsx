"use client";

import { useState } from "react";
import ClienteForm from "./components/clientRegisterForm";
import ArtesaoForm from "./components/artesaoRegisterForm";

export default function RegisterPage() {
  const [userType, setUserType] = useState<"cliente" | "artesao">("cliente");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#C08B74] p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrar</h2>
        <div className="flex justify-center mb-6 gap-4">
          <button
            className={`px-4 py-2 rounded font-semibold transition ${
              userType === "cliente"
                ? "bg-[#D8671E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setUserType("cliente")}
            type="button"
          >
            Cliente
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold transition ${
              userType === "artesao"
                ? "bg-[#D8671E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setUserType("artesao")}
            type="button"
          >
            Artesão
          </button>
        </div>
        {userType === "cliente" ? <ClienteForm /> : <ArtesaoForm />}
      </div>
    </div>
  );
}