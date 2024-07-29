import { Box } from '@/components/ui/Box';
import HorizontalScrollBox from '@components/HorizontalScrollBox';
import { SwiperSlide } from 'swiper/react';

export default function PostItemsSkeleton() {
  return (
    <HorizontalScrollBox>
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide>
          <Box
            key={index}
            className="skeleton h-[17rem] w-[17rem] flex-col overflow-hidden p-0"
          >
            <div className="h-[17rem]" />
            <div className="box-border h-[4rem] bg-white" />
          </Box>
        </SwiperSlide>
      ))}
    </HorizontalScrollBox>
  );
}
