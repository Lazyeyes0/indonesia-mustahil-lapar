import Container from "../components/Layouts/Container";
import { calendar, carousel1, dokumentasi, desc } from "../assets";

const DetailPage = () => {
  return (
    <Container>
      <div className="mt-[150px]">
        <h1 className="text-4xl font-bold text-[#374647] my-1">
          Distribusi Sembako di desa mega timur
        </h1>
        <div className="flex flex-row gap-2 items-center my-1">
          <img src={calendar} className="w-6 h-6" alt="" />
          <p className="text-[#AEABAB] text-[20px]">Jumat, 28 November 2022</p>
        </div>
        <img
          src={carousel1}
          alt=""
          className="w-full max-h-[400px] object-cover rounded-2xl shadow-[8px_8px_20px_rgba(0,0,0,0.25)] mt-5 mb-14"
        />
        <p className="text-xl text-[#505D5E] text-justify mb-12 leading-relaxed">
          {desc}
        </p>
        <div className="mb-12">
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

        <div>
          <h1 className="text-5xl font-bold text-start text-[#1A2D57] mb-12">
            Video <span className="text-[#ED9E87]">Dokumentasi</span>
          </h1>
          <iframe
            width="100%"
            height="530px"
            src="https://www.youtube.com/embed/m0r_d4tUP5g?si=3ecAC277AiJ48p53"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="mb-[130px] rounded-3xl"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default DetailPage;
