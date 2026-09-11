"use client";

import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-zinc-900">

      <h2 className="text-xl font-bold">
        STND COMPANY
      </h2>

      <input
        type="text"
        placeholder="Buscar camisetas, moletons, calças..."
        className="w-96 px-4 py-2 rounded-lg bg-zinc-800 outline-none"
      />

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg">
          Entrar
        </button>

        <button className="px-4 py-2 rounded-lg bg-white text-black">
          Carrinho ({cart.length})
        </button>
      </div>

    </header>
  );
}