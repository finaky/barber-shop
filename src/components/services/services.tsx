import { popularServices } from "@/data/services";
import { SectionHeading } from "../section-heading";
import { ServiceBox } from "./service-box";

export const Services = () => {
  return (
    <section className="mt-20">
      <SectionHeading title="Popularne usługi" desc="Cennik Gentlemen Kraków" />

      <div className="grid 2xl:grid-cols-3 grid-cols-1 gap-8  mt-10">
        {popularServices.map((service) => (
          <ServiceBox key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
};
