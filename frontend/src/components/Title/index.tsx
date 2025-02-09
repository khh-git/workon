import { brandLogo } from "@assets";

const Title = () => {
  return (
    <figure className="flex gap-3 items-center transition-spacing ease-in-out duration-300 hover:gap-1">
      <img
        className="w-6 h-6"
        src={brandLogo}
        alt="a rounded square box with checklist items"
      />
      <figcaption className="text-lg font-medium text-gray-700">
        Workon
      </figcaption>
    </figure>
  );
};

export default Title;
