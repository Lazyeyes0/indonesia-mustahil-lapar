import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carousel1, carousel2, carousel3, next, prev } from "../../assets";

const CustomArrow = ({ onClick, direction }) => {
  const icon = direction === "prev" ? prev : next;

  return (
    <div
      onClick={onClick}
      className={`absolute ${
        direction === "prev" ? "left-10" : "right-10"
      } top-1/2 transform -translate-y-1/2 cursor-pointer w-16 h-16 rounded-full z-10`}
    >
      <img src={icon} alt={`Arrow ${direction}`} />
    </div>
  );
};

const CarouselSection = () => {
  return (
    <div className="mt-[130px]">
      <Carousel
        autoPlays
        centerMode
        swipeable
        emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <CustomArrow onClick={onClickHandler} direction="prev" />
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <CustomArrow onClick={onClickHandler} direction="next" />
        }
      >
        {[carousel1, carousel2, carousel3].map((item, index) => (
          <div className="p-5" key={index}>
            <img
              src={item}
              alt="First slide"
              className="max-h-[400px] shadow-xl rounded-xl mx-5"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
