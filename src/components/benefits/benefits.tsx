import { benefits } from "@/data/config";

export const Benefits = () => {
  return (
    <section className="w-full min-h-[200px] bg-[#181818] mt-24 grid lg:grid-cols-[3fr_4fr] lg:p-10">
      <div>
        <h2 className="text-5xl font-semibold font-georgia">Dlaczego my?</h2>
        <p className="text-gray mt-24">
          W Gentlemen Kraków każda wizyta to dopracowany proces: konsultacja,
          precyzyjne cięcie, pielęgnacja i spokojna atmosfera w centrum
          Kazimierza.
        </p>
      </div>

      <ul className="grid lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:ml-16 mt-12">
        {benefits.map((benefit) => (
          <li
            className="py-2 gap-2 text-gray flex items-center fill-accent"
            key={benefit}
          >
            <svg className="w-8 h-8 " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l1.45 4.45L18 9l-4.55 1.55L12 15l-1.45-4.45L6 9l4.55-1.55L12 3Z"></path>
              <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"></path>
              <path d="M5 13l.7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8-1.8-.7 1.8-.7L5 13Z"></path>
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
};
