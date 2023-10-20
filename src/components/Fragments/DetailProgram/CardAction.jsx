import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PerhitunganDonasi from "../../Elements/PerhitunganDonasi";

const CardAction = (props) => {
  const { harga } = props;
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  const handleKirim = () => {
    if (count > 0) {
      navigate(`/program-kebaikan/${id}/donasi`, {
        state: { count, harga, id },
      });
    }
  };

  return (
    <div className="flex flex-col rounded-2xl border-[5px] border-[#1a2d57] py-3 px-5">
      <h2 className="text-lg font-bold text-[#1a2d57]">Atur Jumlah Donasi</h2>
      <PerhitunganDonasi
        harga={harga}
        count={count}
        onCountChange={handleCountChange}
      />
      <div className="mt-3">
        <label htmlFor="kirimDoa" className="font-bold text-[#AEABAB]">
          Kirim Doa
        </label>
        <textarea
          name=""
          id="kirimDoa"
          className="w-full border border-[#979595] rounded-lg p-5"
          cols="30"
          rows="3"
          placeholder="ketikkan doa kepada penerima pada kolom ini....."
        ></textarea>
        <button
          className="w-full bg-[#1a2d57] text-white py-3 rounded-lg"
          disabled={count === 0 || count === ""}
          onClick={handleKirim}
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default CardAction;
