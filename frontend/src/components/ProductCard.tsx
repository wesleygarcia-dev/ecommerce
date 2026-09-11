import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4">

    <div className="relative h-64 bg-zinc-800 rounded-lg mb-4 overflow-hidden">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover"
  />
</div>

      <p className="text-zinc-500 text-sm">
        {product.category}
      </p>

      <h3 className="font-semibold text-lg mt-1">
        {product.name}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        Tamanhos: {product.sizes.join(", ")}
      </p>

      <div className="flex items-center justify-between mt-5">

        <span className="font-bold text-xl">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

       <Link
          href={`/produtos/${product.id}`}
          className="bg-white text-black px-4 py-2 rounded-lg"
          >
          Ver produto
        </Link>

      </div>

    </div>
  );
}