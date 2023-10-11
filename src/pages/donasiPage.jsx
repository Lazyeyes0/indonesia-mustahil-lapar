import Container from "../components/Layouts/Container";
import { girl, bca, briSyariah } from "../assets";

const GirlCard = (props) => {
  const { image, bank, noBank } = props;
  return (
    <div className="flex flex-row items-center justify-between pt-4 px-10 h-[470px] rounded-3xl bg-gradient-to-tr from-[#1a2d57] to-slate-300 lg:mx-16 px-12 md:px-20">
      <div className="w-[550px] text-center md:text-start">
        <img
          src={image}
          alt={bank}
          className="w-[120px] h-[40px] object-contain"
        />
        <h2 className="text-white text-4xl md:text-[3rem] font-bold mb-5 leading-tight">
          Indonesia Mustahil Miskin
        </h2>
        <h2 className="text-white text-4xl md:text-5xl font-bold">{noBank}</h2>
      </div>
      <img src={girl} alt="arabic girl" className="h-full hidden md:block" />
    </div>
  );
};

const DonasiPage = () => {
  return (
    <Container>
      <div className="mt-[180px]">
        <h1 className="text-5xl font-bold text-center text-[#1A2D57] mb-4">
          Terima Kasih <br />
          <span className="text-[#ED9E87]">Orang Baik</span>
        </h1>
        <div className="mt-[50px] flex flex-col justify-center items-center gap-14 mb-[100px]">
          <GirlCard
            image={bca}
            bank="Bank Central Asia"
            noBank="0121122112211"
          />
          <GirlCard
            image={briSyariah}
            bank="Bank BRI Syariah"
            noBank="1234567890"
          />
        </div>
      </div>
    </Container>
  );
};

export default DonasiPage;
