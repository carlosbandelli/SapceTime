import Image from "next/image";

import nlwLogo from "../assets/nlw-spacetime-logo.svg";
import Link from "next/link";

export function Hero() {
  return (
    <div className="sapce-y-5">
      <Image src={nlwLogo} alt="NLW Space-Time" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="tex-5xl mt-5 font-bold leading-tight text-gray-50">
          Sua capsulá do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe(se quiser)
          com o mundo
        </p>
      </div>

      <Link
        className="textt-sm inline-block rounded-full bg-green-500 px-3 py-3 font-alt uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
}
