export interface IPerson {
  id: number;
  name: string;
  sex: string;
  city: string;
  avatar: string;
  desc: string;
  characteristics: string[];
}

export const team: IPerson[] = [
  {
    id: 0,
    name: "Gabrysia",
    sex: "K",
    city: "Kraków",
    avatar: "/images/team/gabrysia-barberka-gentlemen-krakow-fade-784.avif",
    desc: "Dokładna i bardzo uważna. Tworzy komfortową atmosferę i dopracowuje każdy detal.",
    characteristics: [
      "Spokój i cierpliwość",
      "Jasna komunikacja",
      "Dbałość o komfort",
    ],
  },
  {
    id: 1,
    name: "Julia",
    sex: "K",
    city: "Kraków",
    avatar: "/images/team/julia-barberka-gentlemen-krakow-koloryzacja-784.avif",
    desc: "Empatyczna i skrupulatna. Uważnie słucha i doradza prosto, bez komplikowania.",
    characteristics: ["Empatia", "Dokładność", "Spokojne tempo pracy"],
  },
  {
    id: 2,
    name: "Alex",
    sex: "K",
    city: "Kraków",
    avatar: "/images/team/alex-barber-gentlemen-krakow-stare-miasto-784.avif",
    desc: "Opanowany i konkretny. Dba o dobrą atmosferę i przewidywalny efekt.",
    characteristics: [
      "Punktualność",
      "Dobra organizacja",
      "Szacunek do klienta",
    ],
  },
  {
    id: 3,
    name: "Dominika",
    sex: "K",
    city: "Kraków",
    avatar: "/images/team/dominika-barber-gentlemen-krakow-kazimierz-784.avif",
    desc: "Spokojna, uważna i bardzo kontaktowa. Specjalistka w strzyżeniu długich włosów.",
    characteristics: [
      "Spokój i cierpliwość",
      "Jasna komunikacja",
      "Dbałość o komfort",
    ],
  },
  {
    id: 4,
    name: "Dawid",
    sex: "M",
    city: "Kraków",
    avatar: "/images/team/david-barber-gentlemen-krakow-784.webp",
    desc: "Rzeczowy i spokojny. Klient czuje się swobodnie i wie, czego się spodziewać.",
    characteristics: [
      "Konkretna komunikacja",
      "Dobra organizacja",
      "Punktualność",
    ],
  },
];
