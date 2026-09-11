export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  image: string;
};

import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Oversized Preta",
    price: 89.9,
    category: "Camisetas",
    sizes: ["P", "M", "G", "GG"],
    image: "/products/camisa.jpg",
  },
  {
    id: 2,
    name: "Moletom Essential",
    price: 179.9,
    category: "Moletons",
    sizes: ["P", "M", "G"],
    image: "/products/moletom.jpeg",
  },
  {
    id: 3,
    name: "Calça Cargo Bege",
    price: 149.9,
    category: "Calças",
    sizes: ["38", "40", "42", "44"],
    image: "/products/calca.jpeg",
  },
  {
    id: 4,
    name: "Jaqueta Street Black",
    price: 249.9,
    category: "Jaquetas",
    sizes: ["M", "G", "GG"],
    image: "/products/jaqueta.jpg",
  },
];