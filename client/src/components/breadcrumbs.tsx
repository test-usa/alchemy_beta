import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

type TBreadcrumbs = {
  bg: string;
  title: string;
  heading?: string;
};

const Breadcrumbs = ({ bg, title, heading }: TBreadcrumbs) => {
  return (
    <div className="relative w-full pb-64 md:pb-96">
      {/* Background Image */}
      <div className="absolute inset-0 h-80 md:h-[440px]">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Heading */}
      {heading && (
        <div className="absolute top-32 md:top-40 left-12 md:left-28 lg:left-48 xl:left-64 duration-300">
          <h1 className="font-semibold text-white text-2xl md:text-4xl leading-snug uppercase drop-shadow-lg">
            {heading}
          </h1>
        </div>
      )}

      {/* Overlay & Content */}
      <div className="w-fit relative top-52 md:top-[280px] left-12 md:left-28 lg:left-48 xl:left-64 duration-300 flex flex-col justify-end">
        <h1 className="font-semibold text-white text-lg md:text-2xl leading-snug uppercase drop-shadow-lg mb-2">
          {title}
        </h1>
        <div className="text-white uppercase flex items-center gap-2 text-sm md:text-base">
          <Link className="flex items-center gap-3 mr-2" to="/">
            <FaHome size={20} />
            Home
          </Link>
          <span className="text-5xl -mt-2">&bull;</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
