import { Box } from '@/components/ui/Box';
import { SwiperSlide } from 'swiper/react';
import { PostListSwiperSlide } from './PostItemList';

export default function PostItemsSkeleton() {
  return (
    <PostListSwiperSlide>
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide>
          <Box
            key={index}
            className="skeleton h-[17rem] w-[17rem] flex-col overflow-hidden bg-[#e5e5e5] p-0"
          >
            <div className="h-[17rem]" />
            <div className="box-border h-[4rem] bg-white" />
          </Box>
        </SwiperSlide>
      ))}
    </PostListSwiperSlide>
  );
}
