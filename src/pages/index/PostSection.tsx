import { SwiperSlide } from 'swiper/react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { PostDataList } from '../../data';
import { PostItem } from './PostItem';
import { Section } from './Section';

export const PostSection = () => {
  return (
    <Section title="게시글 둘러보기">
      <HorizontalScrollBox>
        {PostDataList.map(({ id, title, thumbnail }) => (
          <SwiperSlide key={`post-${id}`}>
            <PostItem id={id} title={title} thumbnail={thumbnail} />
          </SwiperSlide>
        ))}
      </HorizontalScrollBox>
    </Section>
  );
};
