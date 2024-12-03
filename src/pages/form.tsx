import { Icon } from "@iconify/react/dist/iconify.js";

export default function Form() {
  return (
    <main className="relative w-[25rem] min-h-screen mx-auto bg-white p-6">
      <a href="/">
        <Icon icon="mdi:arrow-left" width={35} className="text-purple-600" />
      </a>
      <h1 className="text-black text-xl mt-8">
        Para começarmos, precisamos de alguns dados
      </h1>
      <form action="" className="flex flex-col gap-3 my-8">
        <input
          type="text"
          placeholder="Nome do imóvel"
          className="p-4 border"
        />
        <p className="text-sm">
          O nome do imóvel será exibido na sua tea inicial e na reserva para o
          hóspede
        </p>
        <textarea
          placeholder="Descrição"
          className="block p-4 border resize-none"></textarea>
        <p className="text-end text-sm -mt-2">0/250</p>
        <input type="text" placeholder="CEP" className="p-4 border" />
        <input type="text" placeholder="Endereço" className="p-4 border" />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Número"
            className="p-4 border w-full"
          />
          <input
            type="text"
            placeholder="Complemento"
            className="p-4 border w-full"
          />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Cidade" className="p-4 border" />
          <select className="p-4 border w-full">
            <option value="">UF</option>
          </select>
        </div>
      </form>
      <button className="bg-purple-600 text-white py-2 rounded-lg w-full">
        Continuar
      </button>
    </main>
  );
}
