import { useState } from "react";
import Anchor from "../Elements/Anchor";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-xl w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between flex-wrap bg-white py-6 px-10">
        <Link to={"/"}>
          <div className="flex items-center flex-shrink-0 mr-6 gap-3">
            <img
              src="./logo.png"
              alt="Indonesia Mustahil Lapar"
              className="w-12 h-12 rounded"
            />
            <p className="flex flex-col w-[140px] text-base font-bold text-zinc-800 font-sans">
              INDONESIA MUSTAHIL LAPAR
            </p>
          </div>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-black hover:border-black absolute right-8 cursor-pointer md:hidden"
        >
          <svg
            className=" fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div
          className={`md:flex gap-8 md:items-center md:pb-0 mt-12 md:mt-0 lg:shadow-none shadow absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto p-3 md:p-0  transition-all duration-300 ease-in
                    ${open ? "top-12" : "top-[-80px]"}`}
        >
          <div className="flex items-center rounded-lg bg-white border-2 border-gray-200 text-gray-600">
            <input
              className="w-full border-none bg-transparent outline-none py-1 px-4 "
              type="search"
              name="search"
              placeholder="Cari Program kebaikan"
            />
            <button
              type="submit"
              className="m-2 rounded bg-trasparent px-4 py-2 text-gray-600"
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="mt-2 lg:mt-0 text-end">
            <Anchor link="/">Salurkan Kebaikan</Anchor>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
