"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [userType, setUserType] = useState<"cliente" | "artesao">("cliente");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#C08B74]">
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
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {userType === "artesao" && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="craft">
                  Tipo de Artesanato
                </label>
                <input
                  type="text"
                  id="craft"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Ex: Cerâmica, Crochê, Madeira..."
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="bio">
                  Breve descrição sobre você
                </label>
                <textarea
                  id="bio"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={3}
                  placeholder="Conte um pouco sobre seu trabalho"
                  required
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-[#D8671E] text-white py-2 rounded hover:bg-[#C0581A] transition duration-200"
          >
            Registrar como {userType === "cliente" ? "Cliente" : "Artesão"}
          </button>
        </form>
      </div>
    </div>
  );
}