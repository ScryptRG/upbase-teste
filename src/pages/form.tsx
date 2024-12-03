import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <main className="relative mx-auto min-h-screen w-[25rem] bg-white p-6 text-black">
      <Link to={"/"}>
        <Icon icon="mdi:arrow-left" width={35} className="text-purple-600" />
      </Link>
      <h1 className="mt-8 text-xl">
        Para começarmos, precisamos de alguns dados
      </h1>
      <form action="" className="my-8 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nome do imóvel"
          className="border p-4"
        />
        <p className="text-sm">
          O nome do imóvel será exibido na sua tea inicial e na reserva para o
          hóspede
        </p>
        <textarea
          placeholder="Descrição"
          className="block h-32 resize-none border p-4"
        ></textarea>
        <p className="-mt-2 text-end font-['Lato'] text-sm text-neutral-400">
          0/250
        </p>
        <input type="text" placeholder="CEP" className="border p-4" />
        <input type="text" placeholder="Endereço" className="border p-4" />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Número"
            className="w-full border p-4"
          />
          <input
            type="text"
            placeholder="Complemento"
            className="w-full border p-4"
          />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Cidade" className="border p-4" />
          <select className="w-full border p-4">
            <option value="" disabled selected>
              UF
            </option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </div>
        <button className="mt-6 rounded-lg bg-purple-600 py-3 text-white">
          Continuar
        </button>
      </form>
    </main>
  );
}
