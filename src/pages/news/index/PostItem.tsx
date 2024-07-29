import { useNavigate } from 'react-router-dom';
import { Box } from '@/components/ui/Box';
import { PostHeader } from '@components/PostHeader';
import { PostDetailResponse } from '@api/post/types';

export const PostItem = ({
  data: { postId, title, status, category, postFileResponse },
}: {
  data: PostDetailResponse;
}) => {
  const navigate = useNavigate();
  return (
    <Box
      className="clickable h-[22.5rem] flex-col justify-end bg-slate-200 bg-cover bg-center p-0"
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
