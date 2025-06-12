import React from "react";

export default function HeroSection() {
  return (
    <section className="py-10 text-center px-4">
      <h1 className="text-3xl font-bold mb-4">
        Compre produtos artesanais exclusivos
      </h1>
      <p className="mb-6">
        Descubra itens únicos feitos à mão pelos melhores artesãos.
      </p>
      <button className="bg-[#d8671e] text-white px-6 py-2 rounded font-semibold">
        Explorar
      </button>
    </section>
  );
}