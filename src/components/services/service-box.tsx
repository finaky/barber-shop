import { IPopularService } from "@/data/services";
import Image from "next/image";
import i from "@/assets/images/ikona-strzyzenie-meskie-gentlemen-barber-krakow-70.webp";

export const ServiceBox = ({ service }: { service: IPopularService }) => {
  return (
    <div className="flex flex-col 2xl:w-full w-[80%] h-full border border-accent/30 rounded-xl p-10 relative">
      <Image src={i} width={48} height={48} alt="" className="" />
      <p className="text-4xl font-georgia flex items-center min-h-30 font-bold">
        {service.name}
      </p>
      <p className="text-white/50 min-h-20">{service.description} </p>

      <hr className="mt-10 text-accent"></hr>

      <p className="text-3xl text-accent mt-2 mb-10 font-bold">
        {service.price} zł
      </p>

      <a
        href="#"
        className="bg-[#222] py-3 text-center border border-accent/30 rounded-xl block"
      >
        {service.buttonTitle}
      </a>
    </div>
  );
};
