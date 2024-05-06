import { useNavigate } from 'react-router-dom';
import { Box } from '../../components/Box';
import { PostHeader } from '../../components/PostHeader';

export const PostItem = ({
  data: { id, title, thumbnail, author, status, category },
}: {
  data: {
    id: number;
    title: string;
    thumbnail: string;
    author: string;
    status: string;
    category: string;
  };
}) => {
  const navigate = useNavigate();
  return (
    <Box
      className={`h-[22.5rem] cursor-pointer flex-col justify-end overflow-hidden bg-cover p-0`}
      style={{ backgroundImage: `url('${thumbnail}')` }}
      onClick={() => {
        navigate(`${id}`);
      }}
    >
      <PostHeader
        status={status}
        title={title}
        author={author}
        category={category}
      />
    </Box>
  );
};
