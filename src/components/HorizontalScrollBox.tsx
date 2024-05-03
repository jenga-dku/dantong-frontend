import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function HorizontalScrollBox({
  children,
  width,
}: {
  children: ReactNode;
  width?: string;
}) {
  return (
    <div className={`w-${width ? `[${width}]` : 'fit-content'}`}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode={true}
        pagination={{
          enabled: false,
        }}
        modules={[FreeMode, Pagination]}
        className="horizontalScrollBox"
      >
        {children}
      </Swiper>
    </div>
  );
}
