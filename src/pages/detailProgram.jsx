import Container from "../components/Layouts/Container";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { carausel } from "../assets";

const tabsData = [
  {
    label: "Deskripsi",
    content: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
  },
  {
    label: "Donatur",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];

const Deskripsi = () => {
  return (
    <div className="h-[60vh] overflow-y-auto">
      <p>{tabsData[0].content}</p>
    </div>
  );
};

const Donatur = () => {
  return (
    <div className="flex flex-col gap-5 h-[60vh] overflow-y-auto">
      <div className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3">
        <div className="w-[73px] h-[73px]">
          {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
          <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
        </div>
        <div className="w-[285px]">
          <h2 className="text-lg font-bold text-[#ED9E87]">Hamba Allah</h2>
          <h1 className="text-2xl font-bold text-[#1a2d57]">50 Kemasan</h1>
          <p className="text-[#AEABAB] text-xs">
            semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3">
        <div className="w-[73px] h-[73px]">
          {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
          <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
        </div>
        <div className="w-[285px]">
          <h2 className="text-lg font-bold text-[#ED9E87]">Hamba Allah</h2>
          <h1 className="text-2xl font-bold text-[#1a2d57]">50 Kemasan</h1>
          <p className="text-[#AEABAB] text-xs">
            semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3">
        <div className="w-[73px] h-[73px]">
          {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
          <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
        </div>
        <div className="w-[285px]">
          <h2 className="text-lg font-bold text-[#ED9E87]">Hamba Allah</h2>
          <h1 className="text-2xl font-bold text-[#1a2d57]">50 Kemasan</h1>
          <p className="text-[#AEABAB] text-xs">
            semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3">
        <div className="w-[73px] h-[73px]">
          {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
          <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
        </div>
        <div className="w-[285px]">
          <h2 className="text-lg font-bold text-[#ED9E87]">Hamba Allah</h2>
          <h1 className="text-2xl font-bold text-[#1a2d57]">50 Kemasan</h1>
          <p className="text-[#AEABAB] text-xs">
            semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3">
        <div className="w-[73px] h-[73px]">
          {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
          <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
        </div>
        <div className="w-[285px]">
          <h2 className="text-lg font-bold text-[#ED9E87]">Hamba Allah</h2>
          <h1 className="text-2xl font-bold text-[#1a2d57]">50 Kemasan</h1>
          <p className="text-[#AEABAB] text-xs">
            semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center w-[420px] border-[5px] border-[#1a2d57] rounded-3xl py-3">
        <div className="w-[73px] h-[73px]">
          {/* <img
            src={""}
            alt=""
            className="rounded-full w-full h-full object-cover"
          /> */}
          <div className="bg-[#D9D9D9] w-full h-full rounded-full" />
        </div>
        <div className="w-[285px]">
          <h2 className="text-lg font-bold text-[#ED9E87]">Hamba Allah</h2>
          <h1 className="text-2xl font-bold text-[#1a2d57]">50 Kemasan</h1>
          <p className="text-[#AEABAB] text-xs">
            semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim
          </p>
        </div>
      </div>
    </div>
  );
};

const CardAction = () => {
  return (
    <div className="flex flex-col rounded-2xl border-[5px] border-[#1a2d57] py-3 px-5">
      <h2 className="text-lg font-bold text-[#1a2d57]">Atur Jumlah Donasi</h2>
      <div className="flex justify-between items-center w-full mt-5">
        <div className="flex gap-2 items-center">
          <button className="w-[35px] h-[35px] border border-[#979595] font-extrabold text-xl text-[#979595] rounded-lg">
            -
          </button>
          <div className="w-[62px] h-[40px] border border-[#979595] rounded-lg flex items-center justify-center">
            <p className="text-center font-bold text-xl text-[#979595]">0</p>
          </div>
          <button className="w-[35px] h-[35px] bg-[#1a2d57] font-extrabold text-xl text-white rounded-lg">
            +
          </button>
        </div>
        <div className="flex flex-col text-end">
          <p className="font-bold text-lg text-[#ED9E87]">Total Harga</p>
          <h2 className="font-extrabold text-2xl text-[#1a2d57]">Rp.140.000</h2>
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
          rows="5"
          placeholder="ketikkan doa kepada penerima pada kolom ini....."
        ></textarea>
        <button className="w-full bg-[#1a2d57] text-white py-3 rounded-lg">
          Kirim
        </button>
      </div>
    </div>
  );
};

const detailProgram = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <Container>
      <div className="mt-[150px]">
        <h1 className="text-4xl font-bold text-[#374647] my-1">
          Distribusi Sembako di desa mega timur
        </h1>
        <p className="text-[#AEABAB] text-[20px] my-3">Sembako</p>
        <div className="flex gap-3 mt-3">
          <div className="w-4/6">
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
                20%
              </div>
              <div className="text-end">
                <h1 className="text-4xl font-bold text-[#1a2d57]">
                  3 Kemasan Minyak
                </h1>
                <small className="text-[#AEABAB]">
                  Terkumpul dari 500 Kemasan Minyak
                </small>
              </div>
            </div>
            <progress max="100" value="20" className="w-full detail" />

            <div className="flex space-x-3 border-b">
              {tabsData.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    className={`py-2 border-b-4 transition-colors duration-300 ${
                      idx === activeTabIndex
                        ? "border-[#1a2d57] text-[#1a2d57] text-xl font-bold"
                        : "border-transparent hover:border-gray-200 text-xl font-bold text-[#505D5E]"
                    }`}
                    // Change the active tab on click.
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Show active tab content. */}
            <div className="py-4 mb-10">
              {activeTabIndex == 0 ? <Deskripsi /> : <Donatur />}
            </div>
          </div>

          <div className="w-2/6">
            <div className="sticky top-[120px] mb-5">
              <CardAction />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default detailProgram;
