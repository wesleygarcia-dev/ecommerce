"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();

  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Imagem */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Informações */}
        <div>
          <p className="text-zinc-400">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-3xl font-bold mt-6">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          {/* Tamanhos */}
          <div className="mt-8">
            <p className="font-semibold mb-3">
              Escolha o tamanho
            </p>

            <div className="flex gap-3">
  {product.sizes.map((size) => (
    <button
      key={size}
      type="button"
      onClick={() => setSelectedSize(size)}
      style={{
        padding: "12px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        border: "2px solid white",
        backgroundColor:
          selectedSize === size ? "white" : "#18181b",
        color:
          selectedSize === size ? "black" : "white",
      }}
    >
      {size}
    </button>
  ))}
</div>

            <p className="mt-4 text-zinc-400">
              Tamanho escolhido:{" "}
              <strong className="text-white">
                {selectedSize || "nenhum"}
              </strong>
            </p>
          </div>

          {/* Carrinho */}
          <button
            type="button"
            disabled={!selectedSize}
            className={
              selectedSize
                ? "w-full bg-white text-black font-semibold py-4 rounded-xl mt-10 cursor-pointer"
                : "w-full bg-zinc-800 text-zinc-500 font-semibold py-4 rounded-xl mt-10 cursor-not-allowed"
            }
          >
            Adicionar ao carrinho
          </button>
        </div>

      </div>
    </main>
  );
}