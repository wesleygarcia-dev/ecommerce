import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}