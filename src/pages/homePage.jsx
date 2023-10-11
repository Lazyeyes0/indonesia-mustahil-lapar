import { useState } from "react";
import Card from "../components/Fragments/Card";
import Category from "../components/Fragments/Category";
import CarouselSection from "../components/Layouts/CarouselSection";
import Container from "../components/Layouts/Container";
import { cards, partnership } from "../assets";
import { Link } from "react-router-dom";
import GirlCard from "../components/Fragments/GirlCard";
import CardOverlay from "../components/Fragments/CardOverlay";
import Title from "../components/Elements/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <>
      <CarouselSection />
      <Container>
        <div className="program-kebaikan mt-[120px] min-h-screen">
          <Title
            h1="Program "
            span="Kebaikan"
            p="Temui Program Kebaikan sesuai dengan kategori"
          />

          <Category />
          <div className="flex flex-wrap gap-x-4 justify-evenly mt-[50px]">
            {cards.map((card) => (
              <Card
                key={card.id}
                cardImage={card.cardImage}
                title={card.title}
                date={card.date}
                link={`/program-kebaikan/${card.id}`}
              >
                {card.desc}
              </Card>
            ))}
            <div className="flex justify-center w-full">
              <Link
                className="border-4 border-[#1a2d57] py-3 px-6 rounded-xl text-[#1a2d57] text-center text-md font-bold"
                to="program-kebaikan"
              >
                Lihat Amal Lainnya
              </Link>
            </div>
          </div>
          <div className="mt-[60px]">
            <GirlCard></GirlCard>
          </div>
        </div>

        <div className="cerita-kebaikan mt-[100px] min-h-screen">
          <Title
            h1="Cerita "
            span="Kebaikan"
            p="Temui Cerita Kebaikan Hari ini"
          />
          <div className="flex flex-wrap gap-x-4 justify-evenly mt-[50px]">
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
            <div className="flex justify-center w-full">
              <Link
                className="border-4 border-[#1a2d57] py-3 px-6 rounded-xl text-[#1a2d57] text-center text-md font-bold"
                to="cerita-kebaikan"
              >
                Lihat Amal Lainnya
              </Link>
            </div>
          </div>
        </div>

        <CardOverlay />

        <div className="partnership mt-[160px] mb-[120px]">
          <Title
            h1="Partnership Indonesia"
            span=" Mustahil Lapar"
            p="- This activity program is supported by -"
          />

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {partnership.map((partner) => (
              <SwiperSlide key={partner.id} className="w-1/2 h-[120px] my-20">
                <img
                  src={partner.image}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
