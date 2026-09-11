"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CarrinhoPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (soma, item) => soma + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-6xl mx-auto px-8 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Meu Carrinho
      </h1>

      {cart.length === 0 ? (
        <div>
          <p className="text-zinc-400 mb-6">
            Seu carrinho está vazio.
          </p>

          <Link
            href="/"
            className="bg-white text-black px-5 py-3 rounded-lg"
          >
            Ver produtos
          </Link>
        </div>
      ) : (
        <div className="space-y-6">

          {cart.map((item, index) => (
            <div
              key={`${item.id}-${item.size}-${index}`}
              className="flex items-center gap-6 bg-zinc-900 p-5 rounded-xl"
            >

              <div className="relative w-28 h-32 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-zinc-400 text-sm">
                  {item.category}
                </p>

                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>

                <p className="text-zinc-400 mt-2">
                  Tamanho: {item.size}
                </p>

                <p className="font-bold mt-2">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

            </div>
          ))}

          <div className="border-t border-zinc-800 pt-6 flex justify-between">
            <span className="text-xl">
              Total
            </span>

            <span className="text-2xl font-bold">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

        </div>
      )}

    </main>
  );
}