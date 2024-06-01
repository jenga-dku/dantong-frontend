import { SwiperSlide } from 'swiper/react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { PostDataList } from '../../data';
import { PostItem } from './PostItem';
import { Section } from './Section';
import { useGetPostList } from '../../query-hooks/post';
import { PostDetailResponse } from '../../api/post/types';

export const PostSection = () => {
  const { data } = useGetPostList('');

  return (
    <Section title="게시글 둘러보기">
      <HorizontalScrollBox>
        {data?.content.map(({ postId, title }: PostDetailResponse) => (
          <SwiperSlide key={`post-${postId}`}>
            <PostItem
              id={postId}
              title={title}
              thumbnail={PostDataList[0].thumbnail}
            />
          </SwiperSlide>
        ))}
      </HorizontalScrollBox>
    </Section>
  );
};
