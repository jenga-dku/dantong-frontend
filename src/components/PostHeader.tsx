import { CATEGORY, Category } from '../types/news-category';

export const PostHeader = ({
  status,
  category,
  title,
  author,
}: {
  status: string;
  category: Category;
  title: string;
  author: string;
}) => {
  return (
    <div className="flex flex-col gap-1 bg-white px-4 py-3 [&>p]:ml-2">
      <div className="[&>span]: mb-1 flex gap-1 [&>span]:rounded-xl [&>span]:px-3 [&>span]:py-[0.1rem] [&>span]:text-xs">
        <span className="bg-[#E9F8D1] ">{status}</span>
        <span className="bg-[#D9D9D9]">{CATEGORY[category]}</span>
      </div>
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-[#848484]">{author}</p>
    </div>
  );
};
