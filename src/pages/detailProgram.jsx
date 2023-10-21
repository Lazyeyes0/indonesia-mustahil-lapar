import Container from "../components/Layouts/Container";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { carausel, dokumentasi, donasi } from "../assets";
import { useParams } from "react-router-dom";
import Donatur from "../components/Fragments/DetailProgram/Donatur";
import Deskripsi from "../components/Fragments/DetailProgram/Deskripsi";
import CardAction from "../components/Fragments/DetailProgram/CardAction";
import Navbar from "../components/Layouts/Navbar";

const detailProgram = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { id } = useParams();
  const data = donasi.find((item) => item.slug === id);
  const persentase = Math.round((data.terkumpul / data.target) * 100);

  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-[150px]">
          <h1 className="text-4xl font-bold text-[#374647] my-1">
            {data.title}
          </h1>
          <p className="text-[#AEABAB] text-[20px] my-3">{data.kategori}</p>
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
    </>
  );
};

export default detailProgram;
