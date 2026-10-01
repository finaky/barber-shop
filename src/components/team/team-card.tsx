import { IPerson } from "@/data/team";
import Image from "next/image";

export const TeamCard = ({ person }: { person: IPerson }) => {
  return (
    <div className="w-64 h-120 bg-[#171717]">
      <Image
        src={person.avatar}
        alt={`Zdjęcie profilowe ${person.name}`}
        width={500}
        height={500}
        className="h-auto w-full"
      />

      <div className="my-6 px-4">
        <p className="text-3xl font-georgia font-bold">{person.name}</p>
        <p className="text-sm text-dark-gray mt-3">
          {person.sex === "K" ? "Barberka" : "Barber"} Gentlemen Kraków
        </p>

        <a className="w-full text-sm text-center h-10 flex items-center justify-center border border-accent/30 rounded-sm mt-12 hover:bg-accent/70 cursor-pointer">
          Umów się do
        </a>
      </div>
    </div>
  );
};
