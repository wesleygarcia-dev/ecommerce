"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 text-sm text-zinc-400 hover:text-white transition cursor-pointer"
    >
      ← VOLTAR
    </button>
  );
}