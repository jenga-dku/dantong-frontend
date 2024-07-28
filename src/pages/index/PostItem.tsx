import { Box } from '@components/Box';
import CouncilLogo from '@assets/image/CouncilLogo.png';
import { useNavigate } from 'react-router-dom';
import { PostDetailResponse } from '@api/post/types';

export const PostItem = ({
  data: { postId, title, postFileResponse },
}: {
  data: PostDetailResponse;
}) => {
  const navigate = useNavigate();

  return (
    <Box
      key={postId}
      className="clickable skeleton h-[17rem] w-[17rem] flex-col p-0"
      onClick={() => {
        navigate(`/news/${postId}`);
      }}
    >
      <div
        className="h-[17rem] bg-[#e5e5e5] bg-cover"
        style={{
          backgroundImage: `url(${postFileResponse[0]?.url ?? ''})`,
        }}
      />
      <div className="box-border flex h-[4rem] items-center gap-2 bg-white p-2">
        <img
          className="h-[2rem] w-[2rem] rounded-full border-[1px] border-solid border-[#e7e7e7]"
          src={CouncilLogo}
          alt="학생회 로고"
        />
        <div className="flex w-[calc(100%-2.8rem)] flex-col gap-[0.1rem]">
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {title}
          </p>
          <p className="text-xs text-[#848484]">SW융합대학 SW:ing 학생회</p>
        </div>
      </div>
    </Box>
  );
};
