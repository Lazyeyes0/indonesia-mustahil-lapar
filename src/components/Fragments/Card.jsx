import { calendar } from "../../assets";
import Anchor from "../Elements/Anchor";
const Card = (props) => {
  const { cardImage, children, title, date } = props;
  return (
    <div className="rounded-2xl w-full md:w-[350px] lg:w-[385px] shadow-[8px_8px_32px_rgba(155,152,152,0.25)] mb-[60px]">
      <img
        src={cardImage}
        alt={title}
        className="w-full object-cover rounded-2xl h-[160px]"
      />
      <div className="p-4">
        <h1 className="font-bold text-lg text-[#374647]">{title}</h1>
        <div className="flex flex-row gap-2 items-center my-1">
          <img src={calendar} className="w-3 h-3" alt="" />
          <p className="text-[#AEABAB] text-[12px]">{date}</p>
        </div>
        <p className="text-wrap text-justify text-sm text-[#9F9A9A]">
          {children}
        </p>
        <Anchor className="mt-4 mb-1 w-full" href="#">
          Lihat Selengkapnya
        </Anchor>
      </div>
    </div>
  );
};
export default Card;
