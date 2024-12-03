import { Icon } from "@iconify/react/dist/iconify.js";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen w-[25rem] bg-white p-6 text-black">
      <div className="flex justify-between text-purple-600">
        <Icon icon="mdi:arrow-left" width={35} />
        <div className="flex items-center gap-2">
          <Icon icon="mdi:plus" width={35} />
          <Link to={"/form"} className="text-lg font-semibold">
            Cadastrar imóvel
          </Link>
        </div>
      </div>
      <h1 className="mt-8 text-xl font-semibold">Bem-vindo, Raphael!</h1>
      <button className="mr-2 mt-5 rounded-xl bg-purple-600 px-4 py-1 text-white">
        Todos os flats
      </button>
      <button className="rounded-xl border px-4 py-1">Indisponíveis</button>
      <div className="mt-48 flex flex-col items-center gap-4 text-center">
        <Icon
          icon="emojione-monotone:sad-but-relieved-face"
          className="text-purple-600"
          width={60}
        />
        <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
        <Link
          to={"/form"}
          className="w-full rounded-xl border border-purple-600 py-2 text-purple-600 duration-150 hover:bg-purple-600 hover:text-white"
        >
          Cadastrar meu primeiro imóvel
        </Link>
      </div>
      <Navbar />
    </main>
  );
}
