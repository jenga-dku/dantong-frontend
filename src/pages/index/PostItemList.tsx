import 'swiper/css';
import 'swiper/css/pagination';
import { PostItem } from './PostItem';
import { useGetPostList } from '@query-hooks/post';
import { PostDetailResponse } from '@api/post/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';

export default function PostItemList() {
  const { data: postList } = useGetPostList('');

  return (
    <PostListSwiperSlide>
      {postList?.content.map((postData: PostDetailResponse) => (
        <SwiperSlide key={`post-${postData.postId}`}>
          <PostItem data={postData} />
        </SwiperSlide>
      ))}
    </PostListSwiperSlide>
  );
}

export const PostListSwiperSlide = ({ children }: { children: ReactNode }) => (
  <Swiper
    slidesPerView={1}
    breakpoints={{
      345: {
        slidesPerView: 1.15,
      },
      380: {
        slidesPerView: 1.25,
      },
    }}
    spaceBetween={10}
    className="swiperPerView"
  >
    {children}
  </Swiper>
);
