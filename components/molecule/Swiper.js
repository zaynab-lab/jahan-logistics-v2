import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function () {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img width="100%" src="./img/png/cursol1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%" src="./img/png/cursol2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%" src="./img/png/cursol3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
