import { useEffect } from 'react';
import { useGetPostList } from '../../query-hooks/post';
import { FilterNav } from './FilterNav';
import { PostItem } from './PostItem';
import { PostDetailResponse } from '../../api/post/types';
import { useSearchParams } from 'react-router-dom';

export const NewsPage = () => {
  const [searchParams] = useSearchParams();
  let category = searchParams.get('category');
  const { data: postList, refetch: updatePostList } = useGetPostList(
    category ?? '',
  );

  useEffect(() => {
    updatePostList();
  }, [searchParams]);

  return (
    <div className="gap- flex flex-col gap-5">
      <FilterNav />
      <ul className="flex flex-col gap-6 pt-[55px]">
        {postList?.content.map((data: PostDetailResponse) => (
          <PostItem data={data} />
        ))}
      </ul>
    </div>
  );
};
