import { IBadge } from "@/data/config";
import Image from "next/image";

export const Rating = ({ badge }: { badge: IBadge }) => {
  return (
    <div
      key={badge.name}
      className="xl:w-80 w-40 h-20 border border-(--accent)/50 rounded-sm bg-[#111]/80 flex items-center"
    >
      <Image
        src={badge.image}
        loading="lazy"
        alt={badge.alt}
        width={32}
        height={32}
        className="ml-4"
      />

      <div aria-label={`Ocena ${badge.rate}/5`} className="ml-5">
        <p>{badge.rate}/5</p>

        <p aria-hidden="true" className="text-[10px]">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
        </p>
      </div>
    </div>
  );
};
