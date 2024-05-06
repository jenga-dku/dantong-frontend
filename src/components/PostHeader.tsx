export const PostHeader = ({
  status,
  category,
  title,
  author,
}: {
  status: string;
  category: string;
  title: string;
  author: string;
}) => {
  return (
    <div className="flex flex-col gap-1 bg-white px-4 py-3 [&>p]:ml-2">
      <div className="[&>span]: flex gap-1 [&>span]:rounded-xl [&>span]:px-3 [&>span]:py-1 [&>span]:text-xs">
        <span className="bg-[#E9F8D1] ">{status}</span>
        <span className="bg-[#D9D9D9]">{category}</span>
      </div>
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-[#848484]">{author}</p>
    </div>
  );
};
