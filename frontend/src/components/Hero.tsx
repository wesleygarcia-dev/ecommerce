export default function Hero() {
  return (
    <section className="flex items-center justify-between px-10 py-20 bg-zinc-950">

      <div className="max-w-xl">
        <p className="text-sm text-zinc-400 mb-3">
          NOVA COLEÇÃO
        </p>

        <h1 className="text-5xl font-bold mb-5">
          Vista seu estilo.
        </h1>

        <p className="text-zinc-400 mb-8">
          Descubra roupas modernas, confortáveis e feitas para o seu estilo.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
          Ver coleção
        </button>
      </div>

      <div className="w-96 h-72 bg-zinc-800 rounded-2xl flex items-center justify-center">
        <span className="text-zinc-500">
          Imagem da coleção
        </span>
      </div>

    </section>
  );
}