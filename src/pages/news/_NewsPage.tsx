import { useEffect, useState } from 'react';
import { useGetPostList } from '../../query-hooks/post';
import { FilterNav } from './FilterNav';
import { PostItem } from './PostItem';
import { FilterCategory } from '../../types';

export const NewsPage = () => {
  const [category, setCategory] = useState<FilterCategory>('');
  const { data: postList, refetch: updatePostList } = useGetPostList(category);

  useEffect(() => {
    updatePostList();
  }, [category]);

  return (
    <div className="gap- flex flex-col gap-5">
      <FilterNav updateCategory={setCategory} />
      <ul className="flex flex-col gap-6 pt-[55px]">
        {postList?.map((data) => <PostItem data={data} />)}
      </ul>
    </div>
  );
};
