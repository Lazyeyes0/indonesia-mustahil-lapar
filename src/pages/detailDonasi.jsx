import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PerhitunganDonasi from "../components/Elements/PerhitunganDonasi";

const DetailDonasi = () => {
  const navigate = useNavigate();
  const { id, count, harga } = useParams();

  const [countDetail, setCountDetail] = useState(count);
  const [isHambaAllah, setIsHambaAllah] = useState(false);
  const [isNamaPendaftar, setIsNamaPendaftar] = useState(false);
  const [name, setName] = useState("");
  const [Pendaftar, setPendaftar] = useState("");

  const namePendaftar = isHambaAllah ? "Hamba Allah" : name;

  const handleCountChange = (newCount) => {
    setCountDetail(newCount);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#1a2d57] w-full h-[80px] md:h-[110px]">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Biodata Pengirim
        </h1>
        <button
          className="absolute left-5 w-10 md:left-24 md:w-14"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M8.29 11.29C8.19896 11.3851 8.12759 11.4972 8.08 11.62C7.97998 11.8635 7.97998 12.1365 8.08 12.38C8.12759 12.5028 8.19896 12.6149 8.29 12.71L11.29 15.71C11.4783 15.8983 11.7337 16.0041 12 16.0041C12.2663 16.0041 12.5217 15.8983 12.71 15.71C12.8983 15.5217 13.0041 15.2663 13.0041 15C13.0041 14.7337 12.8983 14.4783 12.71 14.29L11.41 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11H11.41L12.71 9.71C12.8037 9.61704 12.8781 9.50644 12.9289 9.38458C12.9797 9.26272 13.0058 9.13201 13.0058 9C13.0058 8.86799 12.9797 8.73728 12.9289 8.61542C12.8781 8.49356 12.8037 8.38296 12.71 8.29C12.617 8.19627 12.5064 8.12188 12.3846 8.07111C12.2627 8.02034 12.132 7.9942 12 7.9942C11.868 7.9942 11.7373 8.02034 11.6154 8.07111C11.4936 8.12188 11.383 8.19627 11.29 8.29L8.29 11.29ZM2 12C2 13.9778 2.58649 15.9112 3.6853 17.5557C4.78412 19.2002 6.3459 20.4819 8.17317 21.2388C10.0004 21.9957 12.0111 22.1937 13.9509 21.8079C15.8907 21.422 17.6725 20.4696 19.0711 19.0711C20.4696 17.6725 21.422 15.8907 21.8079 13.9509C22.1937 12.0111 21.9957 10.0004 21.2388 8.17317C20.4819 6.3459 19.2002 4.78412 17.5557 3.6853C15.9112 2.58649 13.9778 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12ZM20 12C20 13.5823 19.5308 15.129 18.6518 16.4446C17.7727 17.7602 16.5233 18.7855 15.0615 19.391C13.5997 19.9965 11.9911 20.155 10.4393 19.8463C8.88743 19.5376 7.46197 18.7757 6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21447 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-4 rounded-2xl border-[5px] border-[#1a2d57] py-3 px-5 w-[600px] mt-[50px] mb-[50px]">
          <h2 className="text-2xl font-bold text-[#1a2d57] mt-5">
            Nominal dan Pembayaran
          </h2>
          <PerhitunganDonasi
            count={countDetail}
            harga={harga}
            onCountChange={handleCountChange}
          />
          <div>
            <label
              htmlFor="metodePembayaran"
              className="font-bold text-[#AEABAB]"
            >
              Metode Pembayaran
            </label>
            <select
              name="metodePembayaran"
              id="metodePembayaran"
              className="w-full border border-[#979595] rounded-lg px-3 py-2 mt-2 focus:outline-none"
            >
              <option value="BCA">BCA</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
              <option value="BRI">BRI</option>
              <option value="BNI Syariah">BNI Syariah</option>
              <option value="BRI Syariah">BRI Syariah</option>
              <option value="BNI Syariah">BNI Syariah</option>
            </select>
          </div>

          <div className="h-[3px] w-11/12 rounded-full bg-[#1a2d57] my-5 mx-auto" />

          <div>
            <label htmlFor="nama" className="font-bold text-[#AEABAB]">
              Nama
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={namePendaftar}
              className="w-full border border-[#979595] rounded-lg px-3 py-2 mt-2 focus:outline-none"
              placeholder="Masukkan nama anda"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex gap-3 my-2 ml-1">
              <input
                type="checkbox"
                name="isHambaAllah"
                id="isHambaAllah"
                checked={isHambaAllah}
                onChange={(e) => setIsHambaAllah(e.target.checked)}
              />
              <label htmlFor="isHambaAllah" className="text-[#AEABAB]">
                Hamba Allah
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="telepon" className="font-bold text-[#AEABAB]">
              No Telepon
            </label>
            <input
              type="number"
              name="telepon"
              id="telepon"
              className="w-full border border-[#979595] rounded-lg px-3 py-2 mt-2 focus:outline-none"
              placeholder="Masukkan Nomor Telepon"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-bold text-[#AEABAB]">
              Email (optional)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-[#979595] rounded-lg px-3 py-2 mt-2 focus:outline-none"
              placeholder="Masukkan Alamat Email"
            />
          </div>

          <div className="h-[3px] w-11/12 rounded-full bg-[#ED9E87] my-5 mx-auto" />

          <div>
            <label htmlFor="hadiah" className="font-bold text-[#AEABAB]">
              Pahala DIhadiahkan, Atas Nama
            </label>
            <input
              type="text"
              name="hadiah"
              value={isNamaPendaftar ? namePendaftar : Pendaftar}
              id="hadiah"
              className="w-full border border-[#979595] rounded-lg px-3 py-2 mt-2 focus:outline-none"
              placeholder="Masukkan Nama Penerima Hadiah"
              onChange={(e) => setPendaftar(e.target.value)}
            />
            <div className="flex gap-3 my-2 ml-1">
              <input
                type="checkbox"
                name="isNamaPendaftar"
                id="isNamaPendaftar"
                checked={isNamaPendaftar}
                onChange={(e) => setIsNamaPendaftar(e.target.checked)}
              />
              <label htmlFor="isNamaPendaftar" className="text-[#AEABAB]">
                Gunakan Nama Pendaftar
              </label>
            </div>

            <button className="w-full bg-[#1a2d57] text-white py-5 rounded-lg my-7">
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailDonasi;
