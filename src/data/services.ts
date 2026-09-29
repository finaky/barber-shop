export interface IPopularService {
  name: string;
  description: string;
  price: number;
  buttonTitle: string;
}

export const popularServices: IPopularService[] = [
  {
    name: "Strzyżenie Męskie",
    description:
      "Profesjonalne strzyżenie dopasowane do kształtu twarzy i stylu życia.",
    price: 110,
    buttonTitle: "Więcej o strzyżeniu",
  },

  {
    name: "Strzyżenie Brody",
    description:
      "Precyzyjne przycinanie i stylizacja brody z użyciem premium kosmetyków.",
    price: 110,
    buttonTitle: "Więcej o strzyżeniu",
  },

  {
    name: "Combo Włosy + Broda",
    description:
      "Kompletna usługa dla pełnego odświeżenia fryzury i konturu brody.",
    price: 110,
    buttonTitle: "Więcej o strzyżeniu",
  },
];
