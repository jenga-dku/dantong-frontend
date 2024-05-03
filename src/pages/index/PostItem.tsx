import { Box } from '../../components/Box';
import CouncilLogo from '../../assets/image/CouncilLogo.png';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../types';

export const PostItem = ({ id, title, thumbnail }: Post) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        navigate(`/news/${id}`);
      }}
      className="h-[17rem] w-[17rem] cursor-pointer flex-col overflow-hidden p-0"
    >
      <img alt="홈화면 게시글 썸네일" className="h-[13rem]" src={thumbnail} />
      <div className="flex h-[4rem] items-center gap-2 p-2">
        <img
          className="h-[2.5rem] w-[2.5rem] rounded-full border-[1px] border-solid border-[#e7e7e7]"
          src={CouncilLogo}
          alt="학생회 로고"
        />
        <div className="flex flex-col gap-[0.1rem]">
          <p className="w-[calc(100%-50px)] overflow-hidden text-ellipsis whitespace-nowrap ">
            {title}
          </p>
          <p className="text-sm text-[#848484]">SW융합대학 SW:ng 학생회</p>
        </div>
      </div>
    </Box>
  );
};
