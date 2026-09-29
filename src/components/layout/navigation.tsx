import { contact, navLinks } from "@/data/config";
import Image from "next/image";
import logo from "@/assets/images/loader-logo-260.webp";

export const Navigation = () => {
  return (
    <nav
      aria-label="Nawigacja Główna"
      className="w-full relative h-20 border-b border-(--accent)/50 flex items-center justify-center"
    >
      <div className="w-[1400px] flex justify-between items-center">
        <Image src={logo} alt="Gentlemen" className="w-auto h-16" />

        <ul className="hidden xl:flex  gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className="text-white/50 hover:text-white transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* TODO: */}
        <div className="flex items-center gap-5">
          <a className="px-5 py-3 bg-linear-90 from-(--accent)/70 to-200% to-black/10 rounded-xl text-black border-2 border-black">
            Zarezerwuj online
          </a>
          <a>📞 {contact.phoneDisplay}</a>

          <select className="border border-(--accent)/30 rounded-xl p-2 outline-none text-white/50 bg-black/90">
            <option>Język: PL</option>
            <option>Język: ENG</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
