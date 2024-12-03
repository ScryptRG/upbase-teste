import { Icon } from "@iconify/react/dist/iconify.js";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="relative w-[25rem] min-h-screen mx-auto bg-white p-6">
      <div className="flex justify-between text-purple-600">
        <Icon icon="mdi:arrow-left" width={35} />
        <div className="flex gap-2 items-center">
          <Icon icon="mdi:plus" width={35} />
          <a href="/form" className="text-lg font-semibold ">
            Cadastrar imóvel
          </a>
        </div>
      </div>
      <h1 className="text-black font-semibold text-xl mt-8">
        Bem-vindo, Raphael!
      </h1>
      <button className="px-4 py-1 bg-purple-600 text-white rounded-xl mr-2 mt-5">
        Todos os flats
      </button>
      <button className="px-4 py-1 rounded-xl border">Indisponíveis</button>
      <div className="flex flex-col gap-4 items-center text-center mt-32">
        <Icon
          icon="mdi:emoticon-sad-outline"
          className="text-purple-600"
          width={60}
        />
        <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
        <button className="py-2 text-purple-600 border border-purple-600 rounded-xl w-full">
          Cadastrar meu primeiro imóvel
        </button>
      </div>
      <Navbar />
    </main>
  );
}
