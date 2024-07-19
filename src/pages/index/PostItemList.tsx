import { SwiperSlide } from 'swiper/react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { PostItem } from './PostItem';
import { useGetPostList } from '../../query-hooks/post';
import { PostDetailResponse } from '../../api/post/types';

export default function PostItemList() {
  const { data: postList } = useGetPostList('');

  return (
    <HorizontalScrollBox>
      {postList?.content.map((postData: PostDetailResponse) => (
        <SwiperSlide key={`post-${postData.postId}`}>
          <PostItem data={postData} />
        </SwiperSlide>
      ))}
    </HorizontalScrollBox>
  );
}
