import { contact } from "@/data/config";

export const Booking = () => {
  return (
    <div className="xl:mt-20 flex flex-col justify-center items-center">
      <div className="flex max-lg:flex-col xl:gap-10 gap-2">
        <a
          className="px-10 py-3 bg-linear-190 from-(--accent) to-200% to-black text-black rounded-2xl border-2 border-black/55 "
          href={contact.booksyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Rezerwacja Booksy
        </a>
        <a
          className="px-15 py-3 bg-black text-(--accent) border-2 border-white/15 rounded-2xl"
          href={`tel:${contact.phoneHref}`}
        >
          {contact.phoneDisplay}
        </a>
      </div>

      <p className="mt-10 max-w-[80%] text-center text-gray-300">
        <span aria-hidden="true">🕒</span> Rezerwacja online przez Booksy lub
        telefonicznie: {contact.phoneDisplay}.
      </p>
    </div>
  );
};
