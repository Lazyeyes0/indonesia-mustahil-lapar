import Anchor from "../Elements/Anchor";
import { girl } from "../../assets";
import { Link } from "react-router-dom";

const GirlCard = () => {
  return (
    <div className="flex flex-row items-center justify-between pt-4 px-10 h-[470px] rounded-3xl bg-gradient-to-tr from-[#1a2d57] to-slate-300 lg:mx-16 px-12 md:px-20">
      <div className="w-[550px] text-center md:text-start">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-10">
          Silahkan Ajukan amal kebaikan
        </h2>
        <Link
          to={"/"}
          className="rounded-full py-3 px-6 bg-white text-[#1a2d57] text-center text-md font-bold"
        >
          Ajukan Segera
        </Link>
      </div>
      <img src={girl} alt="arabic girl" className="h-full hidden md:block" />
    </div>
  );
};
export default GirlCard;
