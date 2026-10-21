import Image from "next/image";
import { SectionHeading } from "../section-heading";

export const Gallery = () => {
  return (
    <section className="w-full py-20 bg-[#181818] mt-12 absolute left-0">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-10">
        <SectionHeading title="Galeria stylów" desc="Realizacje z Krakowa" />

        <div className="grid lg:grid-cols-[2fr_3fr] mt-12">
          <div className="relative lg:h-125 h-200 max-lg:mb-12 overflow-hidden">
            <Image
              src={"/images/krakow-barber-fade-cut-kazimierz-784.avif"}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 lg:ml-10">
            <div className="relative h-60 overflow-hidden">
              <Image
                src={
                  "/images/krakow-klasyczne-strzyzenie-meskie-dietla-784.avif"
                }
                alt=""
                fill
                className="w-100 h-71 object-cover"
              />
            </div>
            <div className="relative h-60 overflow-hidden">
              <Image
                src={"/images/krakow-barber-shop-wnetrze-premium-784.avif"}
                alt=""
                fill
                className="w-100 h-71 object-cover"
              />
            </div>

            <div className="relative h-60 overflow-hidden col-span-2">
              <Image
                src={"/images/krakow-barber-shop-wnetrze-premium-784.avif"}
                alt=""
                fill
                className="w-full h-60 object-cover mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
