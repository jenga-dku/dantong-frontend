import { SwiperSlide } from 'swiper/react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { PostItem } from './PostItem';
import { Section } from './Section';
import { useGetPostList } from '../../query-hooks/post';
import { PostDetailResponse } from '../../api/post/types';

export const PostSection = () => {
  const { data: postList } = useGetPostList('');

  return (
    <Section title="게시글 둘러보기">
      <HorizontalScrollBox>
        {postList?.content.map((postData: PostDetailResponse) => (
          <SwiperSlide key={`post-${postData.postId}`}>
            <PostItem data={postData} />
          </SwiperSlide>
        ))}
      </HorizontalScrollBox>
    </Section>
  );
};
