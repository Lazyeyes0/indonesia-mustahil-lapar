import { calendar } from "../../assets";
import Anchor from "../Elements/Anchor";

const persentaseCard = (terkumpul, target) => {
  const math = Math.round((terkumpul / target) * 100);
  return `${math}%`;
};

const CardDonation = (props) => {
  const { cardImage, title, link, terkumpul, target, satuan } = props;

  const persentase = Math.round((terkumpul / target) * 100) + "%";

  return (
    <div className="rounded-2xl w-full md:w-[350px] lg:w-[290px] shadow-[8px_8px_32px_rgba(155,152,152,0.25)] mb-[60px]">
      <img
        src={cardImage}
        alt={title}
        className="w-full object-cover rounded-2xl h-[160px]"
      />
      <div className="p-4">
        <h1 className="font-bold text-lg text-[#374647]">{title}</h1>
        <div className="my-3">
          <p className="text-[#ED9E87] text-sm font-bold text-end">Terkumpul</p>
          <div className="flex justify-between">
            <p className="text-lg text-[#1A2D57] font-bold">{persentase}</p>
            <p className="text-lg text-[#374647] font-bold">
              {terkumpul} {satuan}
            </p>
          </div>
        </div>
        <div className="bg-slate-200 relative h-[11px] w-full rounded-2xl">
          <div
            className="bg-[#1A2D57] absolute top-0 left-0 h-full rounded-2xl"
            style={{ width: persentase }}
          ></div>
        </div>
        <Anchor className="mt-4 mb-1 w-full" link={link}>
          Lihat Selengkapnya
        </Anchor>
      </div>
    </div>
  );
};
export default CardDonation;
