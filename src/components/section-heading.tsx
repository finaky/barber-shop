export const SectionHeading = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <>
      <p className="text-accent uppercase text-sm font-medium">{desc}</p>
      <h2 className="text-5xl text-white mt-5 font-georgia">{title}</h2>
    </>
  );
};
