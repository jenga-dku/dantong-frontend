import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { PostFileResponse } from '../../api/post/types';

export const Carousel = ({ data }: { data: PostFileResponse[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ type: 'bullets' }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="swiper-carousel [&_.swiper-button-next::after]:h-[20px] [&_.swiper-button-next::after]:text-[20px] [&_.swiper-button-next::after]:font-bold [&_.swiper-button-prev::after]:h-[20px] [&_.swiper-button-prev::after]:text-[20px] [&_.swiper-button-prev::after]:font-bold "
    >
      {data.map(({ url }, index) => (
        <SwiperSlide key={url}>
          <div
            className="h-[20rem] flex-col justify-end overflow-hidden bg-slate-200 bg-cover bg-center p-0"
            style={{
              backgroundImage: `url('${data.length > 0 ? data[index].url : ''}')`,
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
