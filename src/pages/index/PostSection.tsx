import { PostDataList } from '../../data';
import { PostItem } from './PostItem';
import { Section } from './Section';

export const PostSection = () => {
  return (
    <Section title="게시글 둘러보기">
      <div className="flex gap-4">
        {PostDataList.map(({ id, title, thumbnail }) => (
          <PostItem id={id} title={title} thumbnail={thumbnail} />
        ))}
      </div>
    </Section>
  );
};
