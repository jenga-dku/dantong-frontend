import React from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Box } from '../../components/Box';

export default function ImageList({ images }: { images: string[] }) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          enabled: false,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box className="h-[100px] w-[100px] justify-center p-1">
              <img
                className="rounded-[10px]"
                src={image}
                alt="소식글 첨부 이미지"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
