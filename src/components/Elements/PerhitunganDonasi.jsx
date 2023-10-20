import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PerhitunganDonasi = (props) => {
  const { harga, count, onCountChange } = props;
  const navigate = useNavigate();
  const { id } = useParams();

  const decreaseCount = () => {
    if (count > 0) {
      onCountChange(count - 1);
    }
  };

  const increaseCount = () => {
    onCountChange(count + 1);
  };

  const formatRupiah = (angka) => {
    if (angka === null || angka === undefined) {
      angka = 0;
    }

    var reverse = angka.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return "Rp." + ribuan;
  };

  const handleKirim = () => {
    if (count > 0) {
      navigate(`/program-kebaikan/${id}/donasi`, {
        state: { count, harga, id },
      });
    }
  };

  const totalHarga = count * harga;

  return (
    <div className="flex justify-between items-center w-full mt-5">
      <div className="flex gap-2 items-center">
        <button
          className="w-[35px] h-[35px] border border-[#979595] font-extrabold text-xl text-[#979595] rounded-lg"
          onClick={decreaseCount}
        >
          -
        </button>
        <input
          className="w-[62px] h-[40px] border border-[#979595] rounded-lg text-center font-bold text-xl text-[#979595]"
          value={count}
          type="number"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue === "" || inputValue === null) {
              onCountChange("");
            } else {
              onCountChange(parseInt(inputValue, 10));
            }
          }}
        />
        <button
          className="w-[35px] h-[35px] bg-[#1a2d57] font-extrabold text-xl text-white rounded-lg"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
      <div className="flex flex-col text-end">
        <p className="font-bold text-lg text-[#ED9E87]">Total Harga</p>
        <h2 className="font-extrabold text-2xl text-[#1a2d57]">
          {formatRupiah(totalHarga)}
        </h2>
      </div>
    </div>
  );
};

export default PerhitunganDonasi;
