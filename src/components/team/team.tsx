import { team } from "@/data/team";
import { SectionHeading } from "../section-heading";
import { TeamCard } from "./team-card";

export const Team = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-2">
        <div>
          <SectionHeading
            title="Nasz zespół"
            desc="Barberzy Gentlemen Kraków"
          />
        </div>

        <div className="w-[80%] ml-auto">
          <p>
            Poznaj barberów Gentlemen Kraków i wybierz osobę, do której chcesz
            umówić wizytę.
          </p>

          <a className="lg:w-[50%] w-full text-sm text-center h-10 flex items-center justify-center border border-accent/30 rounded-sm mt-12 hover:bg-accent/70 cursor-pointer">
            Zobacz Cały Zespół
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {team.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};
