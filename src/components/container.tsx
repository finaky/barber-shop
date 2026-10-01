import { Benefits } from "./benefits/benefits";
import { Services } from "./services/services";

export const Container = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-10">
      <Services />
      <Benefits />
    </div>
  );
};
