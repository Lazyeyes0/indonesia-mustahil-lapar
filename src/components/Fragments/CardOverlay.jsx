import { Link } from "react-router-dom";
import { cardOverlay } from "../../assets";
const CardOverlay = () => {
  return (
    <div
      className="w-full h-[540px] rounded-3xl flex items-center justify-center my-[60px]"
      style={{
        backgroundImage: `url(${cardOverlay})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center gap-5 justify-center items-center">
        <h1 className="text-white text-center text-[48px] md:text-[64px] font-bold">
          Salurkan Kebaikanmu
        </h1>
        <Link
          to={"/"}
          className="rounded-full py-3 px-12 bg-white text-[#1a2d57] text-center text-xl font-bold"
        >
          Salurkan
        </Link>
      </div>
    </div>
  );
};
export default CardOverlay;
