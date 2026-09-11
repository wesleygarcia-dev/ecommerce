import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductsSection() {
  return (
    <section className="px-10 py-16">

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Produtos em destaque
        </h2>

        <p className="text-zinc-400 mt-2">
          Confira algumas peças da nossa coleção.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}