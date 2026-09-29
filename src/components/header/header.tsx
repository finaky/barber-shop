import Image from "next/image";
import HeroImg from "@/assets/images/stronaglowna-1536.webp";
import { badges, heroInfo } from "@/data/config";
import { Booking } from "./booking";
import { Rating } from "./rating";

export const Header = () => {
  return (
    <header>
      <div className="relative w-full min-h-[720px] text-white">
        <Image
          src={HeroImg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover z-0 brightness-70"
          priority
        />

        <div className="relative grid xl:grid-cols-2 mx-auto  max-w-[1400px]">
          <div className="max-w-[700px] mt-20 max-xl:mx-auto">
            <p className="text-(--accent) tracking-widest">
              Profesjonalizm. Styl. Kazimierz.
            </p>
            <h1 className="lg:text-7xl text-5xl font-bold">
              <p>Najlepiej oceniany</p>{" "}
              <p className="text-(--accent)">barber shop</p> <p>w Krakowie</p>
            </h1>

            <p className="text-white/90 my-5 xl:max-w-100 max-w-80">
              Profesjonalne strzyżenie męskie i pielęgnacja brody przy Józefa
              Dietla 80/82.
            </p>

            <ul className=" border-t border-t-(--accent)/50 grid grid-cols-3 py-5">
              {heroInfo.map((info, i) => (
                <li key={info.title} className="relative ">
                  <p className="text-(--accent) font-bold">{info.title}</p>
                  <p className="text-white/80 text-[12px] max-xl:max-w-[100px]">
                    {info.description}
                  </p>
                  {i !== 0 && (
                    <div className="h-full w-[1px] bg-(--accent)/30 absolute top-0 -left-10"></div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex justify-between">
              {badges.map((badge) => (
                <Rating badge={badge} key={badge.name} />
              ))}
            </div>
          </div>

          <Booking />
        </div>
      </div>
    </header>
  );
};
