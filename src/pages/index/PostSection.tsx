import { Suspense, lazy } from 'react';
import { Section } from './Section';
import PostItemListSkeleton from './PostItemListSkeleton';
const PostItemList = lazy(() => import('./PostItemList'));

export const PostSection = () => {
  return (
    <Section title="게시글 둘러보기">
      <Suspense fallback={<PostItemListSkeleton />}>
        <PostItemList />
      </Suspense>
    </Section>
  );
};
