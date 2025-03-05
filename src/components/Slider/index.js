import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Slider/style.css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image from "../../../public/assets/Slider1.jpg";
import image2 from "../../../public/assets/Slider2.jpg";
import image3 from "../../../public/assets/Slider3.jpg";
import image4 from "../../../public/assets/Slider4.jpg";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1} // Default to 1 slide on small screens
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true} // Enable default navigation buttons
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens (sm)
          },
          768: {
            slidesPerView: 3, // 3 slides on medium screens (md)
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="imag1" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="imag2" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="imag3" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="imag4" className="w-full h-auto" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;