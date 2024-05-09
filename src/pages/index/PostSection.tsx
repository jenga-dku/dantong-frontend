import { SwiperSlide } from 'swiper/react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { PostDataList } from '../../data';
import { PostItem } from './PostItem';
import { Section } from './Section';
import { useGetPostList } from '../../query-hooks/post';

export const PostSection = () => {
  const { data } = useGetPostList();

  return (
    <Section title="게시글 둘러보기">
      <HorizontalScrollBox>
        {data?.map(({ userId, title }) => (
          <SwiperSlide key={`post-${userId}`}>
            <PostItem
              id={userId}
              title={title}
              thumbnail={PostDataList[Number(userId)].thumbnail}
            />
          </SwiperSlide>
        ))}
      </HorizontalScrollBox>
    </Section>
  );
};
