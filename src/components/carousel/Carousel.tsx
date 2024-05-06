import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export const Carousel = ({ data }: { data: string[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ type: 'bullets' }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="swiper-carousel [&_.swiper-button-next::after]:h-[20px] [&_.swiper-button-next::after]:text-[20px] [&_.swiper-button-next::after]:font-bold [&_.swiper-button-prev::after]:h-[20px] [&_.swiper-button-prev::after]:text-[20px] [&_.swiper-button-prev::after]:font-bold "
    >
      {data.map((item) => (
        <SwiperSlide key={item}>
          <img src={item} alt="캐러셀 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
