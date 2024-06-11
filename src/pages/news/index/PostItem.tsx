import { useNavigate } from 'react-router-dom';
import { Box } from '../../../components/Box';
import { PostHeader } from '../../../components/PostHeader';
import { PostDetailResponse } from '../../../api/post/types';

export const PostItem = ({
  data: { postId, title, status, category, postFileResponse },
}: {
  data: PostDetailResponse;
}) => {
  const navigate = useNavigate();
  return (
    <Box
      className={`h-[22.5rem] cursor-pointer flex-col justify-end overflow-hidden bg-slate-200 bg-cover bg-center p-0`}
      style={{
        backgroundImage: `url('${postFileResponse.length > 0 ? postFileResponse[0].url : ''}')`,
      }}
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
