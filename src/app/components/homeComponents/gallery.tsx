import React from "react";

export default function Gallery() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-10">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <img
          key={num}
          src={`/images/Art${num}.jpg`}
          alt={`Artesanato ${num}`}
          className="w-full rounded-lg"
        />
      ))}
    </section>
  );
}