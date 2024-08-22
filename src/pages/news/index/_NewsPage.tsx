import { useEffect } from 'react';
import { useGetInfinitePostList } from '@query-hooks/post';
import { FilterNav } from './FilterNav';
import { PostItem } from './PostItem';
import { PostDetailResponse } from '@api/post/types';
import { useSearchParams } from 'react-router-dom';
import { isInCategory } from '@utils/isInCategory';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Intersection } from '@components/Intersection';
import { Loader } from '@/components/ui/Loader';

export const NewsPage = () => {
  const [searchParams] = useSearchParams();
  let category = isInCategory(searchParams.get('category') ?? '');
  const postListState = useGetInfinitePostList({
    size: 2,
    category: category ?? '',
  });
  const updatePostList = postListState.refetch;
  const {
    list: postList,
    intersection,
    isFetching,
  } = useInfiniteScroll<PostDetailResponse>(postListState);

  useEffect(() => {
    updatePostList();
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-5">
      <FilterNav />
      <ul className="flex flex-col gap-6 pt-[60px]">
        {postList?.map((data: PostDetailResponse) => (
          <PostItem key={data.postId} data={data} />
        ))}
      </ul>
      <Intersection ref={intersection} />
      <Loader loading={isFetching} />
    </div>
  );
};
