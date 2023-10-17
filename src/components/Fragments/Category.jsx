import { categories } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const CategoryIcon = (props) => {
  const { image, name } = props;
  return (
    <div className="rounded-[1.25rem] border-[3px] border-[#1a2d57] w-full md:w-[215px] h-[58px] my-10">
      <div className="flex flex-row items-center py-2 px-4">
        <img src={image} className="w-8 h-8" alt="" />
        <p className="text-center mx-auto text-[#949494] font-bold text-sm">
          {name}
        </p>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Swiper
      className="mt-[50px] lg:mt-[70px]"
      breakpoints={{
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.name} className="flex justify-center">
          <CategoryIcon image={category.image} name={category.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Category;
