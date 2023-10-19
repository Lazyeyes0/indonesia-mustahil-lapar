import Container from "../components/Layouts/Container";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { carausel, dokumentasi } from "../assets";
import { useParams } from "react-router-dom";
import { donasi } from "../assets";

const Deskripsi = (props) => {
  const { desc } = props;
  return (
    <div className="h-[30vh] lg:h-[60vh] overflow-y-auto">
      <p>{desc}</p>
    </div>
  );
};

const Donatur = (props) => {
  const { donatur, satuan } = props;
  return (
    <div className="flex flex-col gap-5 h-[30vh] lg:h-[60vh] overflow-y-auto">
      {donatur.map((item) => (
        <div
          className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3"
          key={item.id}
        >
          <div className="w-[73px] h-[73px]">
            {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
            <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
          </div>
          <div className="w-[285px]">
            <h2 className="text-lg font-bold text-[#ED9E87]">{item.name}</h2>
            <h1 className="text-2xl font-bold text-[#1a2d57]">
              {item.jumlah} {satuan}
            </h1>
            <p className="text-[#AEABAB] text-xs">{item.doa}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardAction = (props) => {
  const { harga } = props;
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const formatRupiah = (angka) => {
    var reverse = angka.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return "Rp." + ribuan;
  };

  const totalHarga = count * harga;

  return (
    <div className="flex flex-col rounded-2xl border-[5px] border-[#1a2d57] py-3 px-5">
      <h2 className="text-lg font-bold text-[#1a2d57]">Atur Jumlah Donasi</h2>
      <div className="flex justify-between items-center w-full mt-5">
        <div className="flex gap-2 items-center">
          <button
            className="w-[35px] h-[35px] border border-[#979595] font-extrabold text-xl text-[#979595] rounded-lg"
            onClick={decreaseCount}
          >
            -
          </button>
          <div className="w-[62px] h-[40px] border border-[#979595] rounded-lg flex items-center justify-center">
            <p className="text-center font-bold text-xl text-[#979595]">
              {count}
            </p>
          </div>
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
          disabled={count === 0}
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

const detailProgram = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { id } = useParams();
  const data = donasi.find((item) => item.slug === id);
  const persentase = Math.round((data.terkumpul / data.target) * 100);
  return (
    <Container>
      <div className="mt-[150px]">
        <h1 className="text-4xl font-bold text-[#374647] my-1">{data.title}</h1>
        <p className="text-[#AEABAB] text-[20px] my-3">Sembako</p>
        <div className="flex flex-col lg:flex-row gap-3 mt-3">
          <div className="lg:w-4/6 w-full">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              className="mb-3"
            >
              {carausel.map((item) => (
                <SwiperSlide key={`program-kebaikan-${item.id}`}>
                  <img
                    src={item.image}
                    className="w-full h-[530px] object-cover rounded-3xl shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-between items-center my-5">
              <div className="text-white bg-[#1a2d57] rounded-lg py-2 px-4 font-bold">
                {persentase}%
              </div>
              <div className="text-end">
                <h1 className="text-4xl font-bold text-[#1a2d57]">
                  {data.terkumpul} {data.satuan}
                </h1>
                <small className="text-[#AEABAB]">
                  Terkumpul dari {data.target} {data.satuan}
                </small>
              </div>
            </div>
            <progress
              max="100"
              value={`${persentase}`}
              className="w-full detail"
            />

            <div className="flex space-x-3 border-b">
              <button
                className={`py-2 border-b-4 transition-colors duration-300 ${
                  0 === activeTabIndex
                    ? "border-[#1a2d57] text-[#1a2d57] text-xl font-bold"
                    : "border-transparent hover:border-gray-200 text-xl font-bold text-[#505D5E]"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(0)}
              >
                Deskripsi
              </button>
              <button
                className={`py-2 border-b-4 transition-colors duration-300 ${
                  1 === activeTabIndex
                    ? "border-[#1a2d57] text-[#1a2d57] text-xl font-bold"
                    : "border-transparent hover:border-gray-200 text-xl font-bold text-[#505D5E]"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(1)}
              >
                Donatur
              </button>
            </div>
            {/* Show active tab content. */}
            <div className="py-4 mb-10">
              {activeTabIndex == 0 ? (
                <Deskripsi desc={data.desc} />
              ) : (
                <Donatur donatur={data.donatur} satuan={data.satuan} />
              )}
            </div>
          </div>

          <div className="lg:w-2/6 w-full">
            <div className="sticky top-[120px] mb-5">
              <CardAction harga={data.harga} />
            </div>
          </div>
        </div>
        <div className="mb-12 mt-20">
          <h1 className="text-5xl font-bold text-start text-[#1A2D57] mb-12">
            Galery <span className="text-[#ED9E87]">Dokumentasi</span>
          </h1>
          <div className="flex flex-wrap justify-evenly">
            {dokumentasi.map((dokumentasi) => (
              <img
                src={dokumentasi.image}
                alt=""
                key={dokumentasi.id}
                className="w-full lg:h-[200px] lg:w-[385px] md:h-[200px] md:w-[340px] object-cover rounded-2xl mb-3"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default detailProgram;
