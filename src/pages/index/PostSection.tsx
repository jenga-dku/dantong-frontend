import { SwiperSlide } from 'swiper/react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { PostItem } from './PostItem';
import { Section } from './Section';
import { useGetPostList } from '../../query-hooks/post';
import { PostDetailResponse } from '../../api/post/types';
import { Box } from '../../components/Box';

export const PostSection = () => {
  const { data: postList, isFetched } = useGetPostList('');

  return (
    <Section title="게시글 둘러보기">
      <HorizontalScrollBox>
        {isFetched
          ? postList?.content.map((postData: PostDetailResponse) => (
              <SwiperSlide key={`post-${postData.postId}`}>
                <PostItem data={postData} />
              </SwiperSlide>
            ))
          : Array.from({ length: 2 }).map(() => (
              <SwiperSlide>
                <Box className="skeleton_loading h-[17rem] w-[17rem] flex-col p-0">
                  <div className="h-[17rem]" />
                  <div className="h-[4rem] bg-white" />
                </Box>
              </SwiperSlide>
            ))}
      </HorizontalScrollBox>
    </Section>
  );
};
