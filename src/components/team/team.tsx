import { team } from "@/data/team";
import { SectionHeading } from "../section-heading";
import { TeamCard } from "./team-card";

export const Team = () => {
  return (
    <section className="mt-12">
      <SectionHeading title="Nasz zespół" desc="Barberzy Gentlemen Kraków" />

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {team.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};
