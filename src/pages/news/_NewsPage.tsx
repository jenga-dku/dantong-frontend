import { useEffect } from 'react';
import { useGetInfinitePostList } from '../../query-hooks/post';
import { FilterNav } from './FilterNav';
import { PostItem } from './PostItem';
import { PostDetailResponse } from '../../api/post/types';
import { useSearchParams } from 'react-router-dom';
import { isInCategory } from '../../utils/isInCategory';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Intersection } from '../../components/Intersection';

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
  } = useIntersectionObserver<PostDetailResponse>(postListState);

  useEffect(() => {
    updatePostList();
  }, [searchParams]);

  return (
    <div className="gap- flex flex-col gap-5">
      <FilterNav />
      <ul className="flex flex-col gap-6 pt-[55px]">
        {postList?.map((data: PostDetailResponse) => (
          <li key={data.postId}>
            <PostItem data={data} />
            <Intersection ref={intersection} />
          </li>
        ))}
        {isFetching && <div>로딩 중...</div>}
      </ul>
    </div>
  );
};
