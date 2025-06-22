import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import IMG1 from "../../assets/SWIPER-IMG/1.webp"
import IMG2 from "../../assets/SWIPER-IMG/2.webp"
import IMG3 from "../../assets/SWIPER-IMG/3.webp"
import IMG4 from "../../assets/SWIPER-IMG/4.webp"

import "swiper/css";
import "swiper/css/pagination";
import "./Firstpage.css"; // Styles moved here


const App = () => {
  return (
    <div className="mySwiper swiper">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        speed={700}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          thresholdDelta: 30,
          thresholdTime: 100,
        }}
        modules={[Mousewheel, Pagination]}
        className="swiper-wrapper"
      >
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundImage: `url(${IMG1})`
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundImage: `url(${IMG2})`
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundImage: `url(${IMG3})`
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{
            backgroundImage: `url(${IMG4})`
          }}
        ></SwiperSlide>
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default App;
