import Title from "../components/Elements/Title";
import Category from "../components/Fragments/Category";
import Container from "../components/Layouts/Container";
import { cards } from "../assets";
import Card from "../components/Fragments/Card";
import Navbar from "../components/Layouts/Navbar";

const CeritaKebaikan = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-[200px] min-h-screen">
          <Title
            h1="Cerita "
            span="Kebaikan"
            p="Temui Program Kebaikan sesuai dengan kategori"
          />

          <Category />

          <div className="flex flex-wrap gap-x-4 justify-evenly mt-[70px] mb-[100px]">
            {cards.map((card) => (
              <Card
                key={card.id}
                cardImage={card.cardImage}
                title={card.title}
                date={card.date}
              >
                {card.desc}
              </Card>
            ))}
            {cards.map((card) => (
              <Card
                key={card.id}
                cardImage={card.cardImage}
                title={card.title}
                date={card.date}
              >
                {card.desc}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default CeritaKebaikan;
