import Title from "../components/Elements/Title";
import Category from "../components/Fragments/Category";
import Container from "../components/Layouts/Container";
import { donasi } from "../assets";
import CardDonation from "../components/Fragments/CardDonation";
import Navbar from "../components/Layouts/Navbar";

const ProgramKebaikan = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-[200px] min-h-screen">
          <Title
            h1="Program "
            span="Kebaikan"
            p="Temui Program Kebaikan sesuai dengan kategori"
          />

          <Category />

          <div className="flex flex-wrap justify-center gap-x-3 mt-[70px] mb-[100px]">
            {donasi.map((item) => (
              <CardDonation
                key={`program-kebaikan-${item.id}`}
                cardImage={item.image}
                title={item.title}
                link={`/program-kebaikan/${item.id}`}
                terkumpul={item.terkumpul}
                target={item.target}
                satuan={item.satuan}
              />
            ))}
            {donasi.map((item) => (
              <CardDonation
                key={`program-kebaikan-${item.id}`}
                cardImage={item.image}
                title={item.title}
                link={`/program-kebaikan/${item.id}`}
                terkumpul={item.terkumpul}
                target={item.target}
                satuan={item.satuan}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default ProgramKebaikan;
