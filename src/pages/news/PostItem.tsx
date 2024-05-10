import { useNavigate } from 'react-router-dom';
import { Box } from '../../components/Box';
import { PostHeader } from '../../components/PostHeader';
import { PostDataList } from '../../data';
import { PostDetailResponse } from '../../api/post/types';

export const PostItem = ({
  data: { postId, title, status, category },
}: {
  data: PostDetailResponse;
}) => {
  const navigate = useNavigate();
  return (
    <Box
      className={`h-[22.5rem] cursor-pointer flex-col justify-end overflow-hidden bg-cover p-0`}
      style={{ backgroundImage: `url('${PostDataList[0].thumbnail}')` }}
      onClick={() => {
        navigate(`${postId}`);
      }}
    >
      <PostHeader
        status={status}
        title={title}
        author="SW융합대학 SW:ing 학생회"
        category={category}
      />
    </Box>
  );
};
