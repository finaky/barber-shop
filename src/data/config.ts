import lbooksy from "@/assets/images/logo-booksy.webp";
import lgoogle from "@/assets/images/google-logo.png";
import { StaticImageData } from "next/image";

export interface IBadge {
  name: string;
  rate: number;
  image: StaticImageData;
  alt: string;
  reviews: number;
}

export const navLinks = [
  {
    id: 0,
    name: "Strona główna",
    href: "/",
  },

  {
    id: 1,
    name: "Usługi i Cennik",
    href: "/",
  },

  {
    id: 2,
    name: "Nasz Zespół",
    href: "/",
  },

  {
    id: 3,
    name: "Galeria",
    href: "/",
  },

  {
    id: 4,
    name: "Voucher",
    href: "/",
  },

  {
    id: 5,
    name: "Blog",
    href: "/",
  },

  {
    id: 6,
    name: "Kontakt",
    href: "/",
  },
];

export const heroInfo = [
  {
    title: "Booksy",
    description: "4816 opinii",
  },
  {
    title: "Kazimierz",
    description: "Józefa Dietla 80/82",
  },
  {
    title: "Online 24/7",
    description: "Wybierz termin, który pasuje",
  },
];

export const contact = {
  phoneDisplay: "732 126 188",
  phoneHref: "+48732126188",
  booksyUrl: "https://booksy.com/...",
};

export const badges: IBadge[] = [
  {
    name: "Booksy",
    rate: 4.9,
    image: lbooksy,
    alt: "Logo Booksy",
    reviews: 4817,
  },

  {
    name: "Google",
    rate: 4.9,
    image: lgoogle,
    alt: "Logo Google",
    reviews: 129,
  },
];
