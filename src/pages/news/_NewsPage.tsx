import { PostDataList } from '../../data';
import { FilterNav } from './FilterNav';
import { PostItem } from './PostItem';

export const NewsPage = () => {
  return (
    <div className="gap- flex flex-col gap-5">
      <FilterNav />
      <ul className="flex flex-col gap-6 pt-[55px]">
        {PostDataList.map((data) => (
          <PostItem data={data} />
        ))}
      </ul>
    </div>
  );
};
